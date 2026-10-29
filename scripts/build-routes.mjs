// Builds routes.json: real driving geometry, distance and time for every day's
// route segments in trip-data.js, using the public OSRM demo server.
// Run by .github/workflows/build-routes.yml (GitHub runners have open internet).
import fs from "node:fs";
import vm from "node:vm";

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(new URL("../trip-data.js", import.meta.url), "utf8"), ctx);
const T = ctx.window.TRIP;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Ramer–Douglas–Peucker on [lat, lng] pairs; tolerance in degrees (~0.00012 ≈ 13 m).
function simplify(pts, tol = 0.00012) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let maxD = 0, idx = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1e-12;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / len;
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > tol) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

async function route(ids) {
  const coords = ids.map((id) => {
    const s = T.stops[id];
    if (!s) throw new Error("unknown stop " + id);
    return `${s.ll[1]},${s.ll[0]}`;
  }).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson&steps=false`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const r = await fetch(url, { headers: { "User-Agent": "hawaii-vote-trip-map (github.com/xixiuqi/hawaii-vote)" } });
    if (r.ok) {
      const j = await r.json();
      if (j.code === "Ok" && j.routes && j.routes[0]) {
        const rt = j.routes[0];
        const pts = rt.geometry.coordinates.map(([lng, lat]) => [+lat.toFixed(5), +lng.toFixed(5)]);
        return {
          stops: ids,
          mi: +(rt.distance / 1609.344).toFixed(1),
          min: Math.round(rt.duration / 60),
          legs: rt.legs.map((l) => ({ mi: +(l.distance / 1609.344).toFixed(1), min: Math.round(l.duration / 60) })),
          coords: simplify(pts)
        };
      }
    }
    await sleep(2000 * attempt);
  }
  throw new Error("OSRM failed for " + ids.join(" → "));
}

const out = { generated: new Date().toISOString(), source: "OSRM (router.project-osrm.org), OpenStreetMap data", days: {} };
for (const d of T.days) {
  const segs = [];
  for (const ids of d.route || []) { segs.push({ ...(await route(ids)), opt: false }); await sleep(1200); }
  for (const ids of d.optRoute || []) { segs.push({ ...(await route(ids)), opt: true }); await sleep(1200); }
  out.days[d.id] = segs;
  console.log(d.id, segs.map((s) => `${s.stops.join("→")}: ${s.mi} mi / ${s.min} min (${s.coords.length} pts)`).join(" | "));
}
fs.writeFileSync(new URL("../routes.json", import.meta.url), JSON.stringify(out));
console.log("wrote routes.json");
