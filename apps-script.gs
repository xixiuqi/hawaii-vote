/**
 * Hawaii trip ballot — storage backend (v4: migrates v1 rows; vote changes are not recorded).
 *
 * Standalone Apps Script project that stores votes in the Google Sheet below.
 * Deploy → Manage deployments → Edit → Version: New version → Deploy (URL stays the same).
 *
 * GET  <url> → {ok:true, votes:[{id, name, updatedAt, votes:{n:{w,s}}, note, comments:[...], history:[], resetAt:0}]}
 * POST <url> (text/plain JSON):
 *   {action:"vote",   id, name, votes:{n:{w,s}}, note, comments?:[{id,n,x,risk}]}
 *   {action:"reset",  id}   clear this voter's choices, keep comments
 *   {action:"delete", id}   remove this voter entirely
 *
 * The server stamps all times. Changes to choices are not recorded: `history` is always empty
 * and `resetAt` is always 0 (kept in the response for older pages).
 *
 * One row per voter in the "votes" sheet: id | name | updatedAt | json
 */

const SPREADSHEET_ID = '1pHq3HicysrfSpvTv1IDGyyuyc6W45Zj76tkaSxowsyE'; // 夏威夷投票
const SHEET_NAME = 'votes';
const MAX_PLACE = 25;
const MAX_VOTERS = 60;
const MAX_BODY = 80000;
const MAX_COMMENTS = 150;

function sheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'name', 'updatedAt', 'json']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function parse_(s, updatedAt) {
  let d = {};
  try { d = JSON.parse(s || '{}'); if (!d || typeof d !== 'object') d = {}; } catch (e) { d = {}; }
  // Migrate v1 rows: per-spot comment text lived in votes[n].c.
  if (!Array.isArray(d.comments)) {
    d.comments = [];
    Object.keys(d.votes || {}).forEach(function (k) {
      const c = d.votes[k] && d.votes[k].c;
      if (typeof c === 'string' && c.trim()) d.comments.push({ id: 'legacy-' + k, n: Number(k), x: c.trim().slice(0, 300), risk: false, t: Number(updatedAt) || 0 });
    });
  }
  Object.keys(d.votes || {}).forEach(function (k) {
    const v = d.votes[k];
    if (!v) return;
    delete v.c;
    delete v.at;
    if (v.w == null && !v.s) delete d.votes[k];
  });
  return d;
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const votes = rows
    .filter(function (r) { return r[0]; })
    .map(function (r) {
      const d = parse_(r[3], r[2]);
      return {
        id: String(r[0]),
        name: String(r[1] || ''),
        updatedAt: Number(r[2]) || 0,
        votes: d.votes || {},
        note: d.note || '',
        comments: d.comments || [],
        history: [],
        resetAt: 0
      };
    });
  return json_({ ok: true, votes: votes });
}

function doPost(e) {
  const raw = (e && e.postData && e.postData.contents) || '';
  if (!raw || raw.length > MAX_BODY) return json_({ ok: false, error: 'bad_size' });

  let body;
  try { body = JSON.parse(raw); } catch (err) { return json_({ ok: false, error: 'bad_json' }); }
  if (!body || ['vote', 'reset', 'delete'].indexOf(body.action) < 0) return json_({ ok: false, error: 'bad_action' });

  const id = String(body.id || '');
  if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) return json_({ ok: false, error: 'bad_id' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet_();
    const last = Math.max(sh.getLastRow(), 1);
    const ids = sh.getRange(1, 1, last, 1).getValues().map(function (r) { return String(r[0]); });
    const row = ids.indexOf(id) + 1; // 0 → not found
    const now = Date.now();

    if (body.action === 'delete') {
      if (row > 1) sh.deleteRow(row);
      return json_({ ok: true });
    }

    const old = row > 1 ? parse_(sh.getRange(row, 4).getValue(), sh.getRange(row, 3).getValue()) : {};
    const oldName = row > 1 ? String(sh.getRange(row, 2).getValue() || '') : '';

    if (body.action === 'reset') {
      if (row <= 1) return json_({ ok: true });
      const d = { votes: {}, note: old.note || '', comments: old.comments || [] };
      sh.getRange(row, 1, 1, 4).setValues([[id, oldName, now, JSON.stringify(d)]]);
      return json_({ ok: true, updatedAt: now });
    }

    // action === 'vote'
    const name = clean_(body.name, 20);
    if (!name) return json_({ ok: false, error: 'name_required' });

    const votes = {};
    const src = body.votes && typeof body.votes === 'object' ? body.votes : {};
    const keys = {};
    Object.keys(src).forEach(function (k) { keys[k] = 1; });

    Object.keys(keys).forEach(function (k) {
      const n = Number(k);
      if (!(n >= 1 && n <= MAX_PLACE && Math.floor(n) === n)) return;
      const v = src[k] || {};
      const w = (v.w === 0 || v.w === 1 || v.w === 2 || v.w === 3) ? v.w : null;
      const s = (Number(v.s) >= 1 && Number(v.s) <= 5) ? Math.round(Number(v.s)) : 0;
      if (w !== null || s) votes[String(n)] = { w: w, s: s };
    });

    let comments = Array.isArray(old.comments) ? old.comments : [];
    if (Array.isArray(body.comments)) {
      const oldById = {};
      comments.forEach(function (c) { oldById[c.id] = c; });
      const seen = {};
      comments = [];
      body.comments.slice(0, MAX_COMMENTS).forEach(function (c) {
        if (!c || typeof c !== 'object') return;
        const cid = String(c.id || '');
        if (!/^[A-Za-z0-9-]{4,40}$/.test(cid) || seen[cid]) return;
        const cn = Number(c.n);
        if (!(cn >= 0 && cn <= MAX_PLACE && Math.floor(cn) === cn)) return;
        const x = clean_(c.x, 300);
        if (!x) return;
        seen[cid] = 1;
        const prev = oldById[cid];
        comments.push({ id: cid, n: cn, x: x, risk: !!c.risk, t: prev ? prev.t : now });
      });
    }

    const d = {
      votes: votes,
      note: clean_(body.note, 500),
      comments: comments
    };
    const values = [[id, name, now, JSON.stringify(d)]];
    if (row > 1) {
      sh.getRange(row, 1, 1, 4).setValues(values);
    } else {
      if (ids.length - 1 >= MAX_VOTERS) return json_({ ok: false, error: 'too_many_voters' });
      sh.appendRow(values[0]);
    }
    return json_({ ok: true, updatedAt: now });
  } finally {
    lock.releaseLock();
  }
}

function clean_(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}
