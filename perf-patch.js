// ================================================================
// CAPRUX — PERFORMANCE DETECTION SYSTEM
// Deteksi device capability, inject class ke <html>
// Jalankan SEBELUM DOMContentLoaded untuk mencegah flash
// ================================================================
(function() {
  'use strict';

  // ── Deteksi perangkat ──
  var mem    = navigator.deviceMemory; // GB RAM (Chrome/Android)
  var cores  = navigator.hardwareConcurrency || 2;
  var conn   = (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
  var slowNet = conn && (conn.saveData || /2g|slow/i.test(conn.effectiveType || ''));

  // Heuristik tier: HIGH / MID / LOW
  var tier = 'HIGH';
  if (mem !== undefined && mem <= 1)   tier = 'LOW';
  else if (mem !== undefined && mem <= 2) tier = 'MID';
  if (cores <= 2 && tier !== 'LOW')    tier = 'MID';
  if (slowNet)                         tier = (tier === 'HIGH') ? 'MID' : 'LOW';

  // Simpan ke sessionStorage biar tidak ngitung ulang tiap navigasi
  try { sessionStorage.setItem('cpx_tier', tier); } catch(e) {}

  // Inject ke <html> — CSS bisa pakai [data-perf="LOW"] selector
  document.documentElement.setAttribute('data-perf', tier);

  // Kalau LOW: langsung inject <style> override di head supaya CSS mahal tidak diparse GPU
  if (tier === 'LOW' || tier === 'MID') {
    var s = document.createElement('style');
    s.id = 'cpx-perf-override';
    s.textContent = [
      // Matiin animasi berat
      '.logo-glow { animation: none !important; filter: none !important; opacity: 0.3 !important; }',
      '.hero-scan { animation: none !important; }',
      '.hero-logo-wrap::before, .hero-logo-wrap::after { animation: none !important; opacity: 0 !important; }',
      '.btn-primary::after { animation: none !important; }',
      '.marquee-strip { --marquee-dur: 40s; }',
      '.email-fab-ping { animation: none !important; }',
      // Matiin cursor glow di mid/low (terlalu mahal rAF loop)
      '[data-perf="LOW"] .cursor-glow, [data-perf="MID"] .cursor-glow { display: none !important; }',
      // Matiin fabric-tex berat di body
      '[data-perf="LOW"] body { background-image: none !important; }',
      // Matiin will-change kalau tidak perlu
      '[data-perf="LOW"] .hero-sub, [data-perf="LOW"] .hero-actions { will-change: auto !important; }',
      '[data-perf="LOW"] .reveal, [data-perf="LOW"] .reveal-scale, [data-perf="LOW"] .reveal-left, [data-perf="LOW"] .reveal-right { transition-duration: 0.4s !important; }',
    ].join('\n');
    document.head.appendChild(s);
  }

  // Expose tier ke window supaya script.js bisa cek
  window.__CPX_TIER = tier;
})();
