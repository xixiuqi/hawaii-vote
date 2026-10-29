/**
 * Hawaii trip ballot — storage backend.
 *
 * Standalone Apps Script project that stores votes in the Google Sheet below.
 * Deploy → New deployment → Web app, Execute as: Me, Who has access: Anyone.
 * Paste the /exec URL into config.js.
 *
 * GET  <url>            → {ok:true, votes:[{id,name,votes,note,updatedAt}]}
 * POST <url> (text/plain JSON {action:"vote", id, name, votes, note}) → {ok:true}
 *
 * One row per voter in the "votes" sheet: id | name | updatedAt | json
 */

const SPREADSHEET_ID = '1pHq3HicysrfSpvTv1IDGyyuyc6W45Zj76tkaSxowsyE'; // 夏威夷投票
const SHEET_NAME = 'votes';
const MAX_PLACE = 25;
const MAX_VOTERS = 60;
const MAX_BODY = 30000;

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

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const votes = rows
    .filter(function (r) { return r[0]; })
    .map(function (r) {
      let d = {};
      try { d = JSON.parse(r[3] || '{}'); } catch (e) {}
      return {
        id: String(r[0]),
        name: String(r[1] || ''),
        updatedAt: Number(r[2]) || 0,
        votes: d.votes || {},
        note: d.note || ''
      };
    });
  return json_({ ok: true, votes: votes });
}

function doPost(e) {
  const raw = (e && e.postData && e.postData.contents) || '';
  if (!raw || raw.length > MAX_BODY) return json_({ ok: false, error: 'bad_size' });

  let body;
  try { body = JSON.parse(raw); } catch (err) { return json_({ ok: false, error: 'bad_json' }); }
  if (!body || body.action !== 'vote') return json_({ ok: false, error: 'bad_action' });

  const id = String(body.id || '');
  if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) return json_({ ok: false, error: 'bad_id' });

  const name = clean_(body.name, 20);
  if (!name) return json_({ ok: false, error: 'name_required' });

  const votes = {};
  const src = body.votes && typeof body.votes === 'object' ? body.votes : {};
  Object.keys(src).forEach(function (k) {
    const n = Number(k);
    if (!(n >= 1 && n <= MAX_PLACE && Math.floor(n) === n)) return;
    const v = src[k] || {};
    const w = (v.w === 0 || v.w === 1 || v.w === 2 || v.w === 3) ? v.w : null;
    const s = (Number(v.s) >= 1 && Number(v.s) <= 5) ? Math.round(Number(v.s)) : 0;
    const c = clean_(v.c, 300);
    if (w !== null || s || c) votes[String(n)] = { w: w, s: s, c: c };
  });
  const note = clean_(body.note, 500);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet_();
    const ids = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues().map(function (r) { return String(r[0]); });
    const row = ids.indexOf(id) + 1; // 0 → not found
    const now = Date.now();
    const values = [[id, name, now, JSON.stringify({ votes: votes, note: note })]];
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
