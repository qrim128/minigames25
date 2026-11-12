// Device-approval lock for the web player (new file; the original game files are untouched).
// Each browser gets a random device ID, registered as a 'pending' row in the Supabase
// `requests` table. The page stays locked until that row's status is 'approved'.
(function () {
  'use strict';

  // Start locked (fail closed): web.js refuses to launch games while this is true.
  window.__hackingWebLocked = true;

  // ---- Anti-inspect / anti-save shortcuts (as requested) ----
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && k === 'u') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].indexOf(k) >= 0) e.preventDefault();
    if ((e.ctrlKey || e.metaKey) && k === 's') e.preventDefault();
  });

  var SUPABASE_URL = 'https://hxzwvyovetiwmykeiznk.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4end2eW92ZXRpd215a2Vpem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5ODk1NDgsImV4cCI6MjA5MzU2NTU0OH0.jc4FiiHncItST_nlKkVpEb0V-aYLePCzy357aMMcbzE';
  var MINIGAME_NAME = 'Minigames';
  var POLL_MS = 3000;

  var ADMIN = !!window.WEB_ADMIN; // admin.html: password check instead of device approval
  var supabase = null;
  var deviceId = null;

  function $(id) { return document.getElementById(id); }

  function getDeviceId() {
    var id = null;
    try { id = localStorage.getItem('user_name'); } catch (e) {}
    if (!id) {
      id = 'ID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      try { localStorage.setItem('user_name', id); } catch (e) {}
    }
    return id;
  }

  function setStatus(t) { var s = $('lock-status'); if (s) s.textContent = t; }

  function unlockSite() {
    window.__hackingWebLocked = false;
    document.body.classList.remove('locked');
    var w = $('main-wrapper'); if (w) { w.removeAttribute('inert'); w.classList.add('unlocked'); }
    var l = $('lock-screen'); if (l) l.classList.add('hidden');
  }

  function lockSite() {
    var wasUnlocked = !window.__hackingWebLocked;
    window.__hackingWebLocked = true;
    document.body.classList.add('locked');
    var w = $('main-wrapper'); if (w) { w.setAttribute('inert', ''); w.classList.remove('unlocked'); }
    var l = $('lock-screen'); if (l) l.classList.remove('hidden');
    if (wasUnlocked) window.dispatchEvent(new Event('hacking-web-lock')); // aborts any running game
  }

  async function checkApproval() {
    try {
      var res = await supabase.from('requests').select('status').eq('name', deviceId);
      if (res.error) throw res.error;
      var rows = res.data || [];
      if (!rows.length) {
        var ins = await supabase.from('requests').insert([{ name: deviceId, status: 'pending', minigame: 'Minigames' }]);
        if (ins.error) throw ins.error;
        lockSite(); setStatus('Request sent. Waiting for approval...');
      } else if (rows.some(function (r) { return r.status === 'approved'; })) {
        unlockSite();
      } else {
        lockSite(); setStatus('Waiting for approval...');
      }
    } catch (err) {
      // Can't verify -> stay/become locked.
      lockSite(); setStatus('Cannot reach the approval server. Retrying...');
    }
    setTimeout(checkApproval, POLL_MS);
  }

  async function start() {
    deviceId = getDeviceId();
    var idEl = $('device-id-display'); if (idEl) idEl.textContent = 'DEVICE ID: ' + deviceId;
    var cp = $('copy-device-id');
    if (cp) cp.onclick = function () {
      var ui = window.__hackingWebUI;
      if (ui && ui.copy) ui.copy(deviceId, 'Device ID copied');
      else { var r = document.createRange(); r.selectNodeContents(idEl); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); try { document.execCommand('copy'); } catch (e) {} }
      cp.textContent = 'Copied!'; setTimeout(function () { cp.textContent = 'Copy'; }, 1400);
    };
    document.body.classList.add('locked');
    try {
      var mod = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
      supabase = mod.createClient(SUPABASE_URL, SUPABASE_KEY);
      window.__hackingWebDB = supabase;                      // shared with web.js (game list config)
      window.dispatchEvent(new Event('hacking-web-db'));
    } catch (e) {
      setStatus('Could not load the approval service. Check your connection and reload.');
      return;
    }
    if (ADMIN) return setupAdmin();
    checkApproval();
  }

  // ---- Admin page: unlock with the admin password, verified server-side (check_web_admin) ----
  async function tryAdmin(pw) {
    setStatus('Checking...');
    try {
      var r = await supabase.rpc('check_web_admin', { p_secret: pw });
      if (r.error) {
        var m = r.error.message || '';
        setStatus(/does not exist|could not find|schema cache/i.test(m) ? 'Server not set up for admin yet: run the latest web-config.sql in Supabase.' : 'Cannot verify: ' + m);
        return false;
      }
      if (r.data === true) {
        try { sessionStorage.setItem('hackingWebAdminPw', pw); } catch (e) {}
        unlockSite(); setStatus('');
        return true;
      }
      try { sessionStorage.removeItem('hackingWebAdminPw'); } catch (e) {}
      setStatus('Wrong password.');
      return false;
    } catch (e) { setStatus('Cannot reach the server.'); return false; }
  }
  function setupAdmin() {
    var form = $('admin-form'), input = $('admin-pw');
    setStatus('Enter the admin password.');
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); if (input.value) tryAdmin(input.value); });
    var cached = null; try { cached = sessionStorage.getItem('hackingWebAdminPw'); } catch (e) {}
    if (cached) tryAdmin(cached); else if (input) input.focus();
  }

  document.addEventListener('DOMContentLoaded', start);
})();
