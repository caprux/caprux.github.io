// ================================================================
// CAPRUX — PERFORMANCE DETECTION SYSTEM v25
// Deteksi kemampuan perangkat, lalu pasang atribut data-perf di <html>.
// Dipasang di <head> SEMUA halaman, jalan sebelum halaman digambar.
//   HIGH = normal | MID = animasi dikurangi | LOW = animasi berat dimatikan
// ================================================================
(function () {
  'use strict';

  var mem   = navigator.deviceMemory;                 // GB RAM (Chrome/Android)
  var cores = navigator.hardwareConcurrency || 2;
  var conn  = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var slowNet = conn && (conn.saveData || /2g|slow/i.test(conn.effectiveType || ''));

  var tier = 'HIGH';
  if (mem !== undefined && mem <= 1) tier = 'LOW';
  else if (mem !== undefined && mem <= 2) tier = 'MID';
  if (cores <= 2 && tier !== 'LOW') tier = 'MID';
  if (slowNet) tier = (tier === 'HIGH') ? 'MID' : 'LOW';

  try { sessionStorage.setItem('cpx_tier', tier); } catch (e) {}
  document.documentElement.setAttribute('data-perf', tier);
  window.__CPX_TIER = tier;   // dibaca script.js (parallax mati di LOW)

  if (tier === 'LOW' || tier === 'MID') {
    var css = [
      '.marquee-inner { animation-duration: 70s !important; }',
      '.about-logo-float { animation: none !important; }',
      '.scroll-line { animation: none !important; }',
      '.pcard { transition-duration: .25s !important; }',
      '.reveal, .reveal-scale, .reveal-left, .reveal-right { transition-duration: .4s !important; }',
      '.p-layer { will-change: auto !important; }'
    ];
    if (tier === 'LOW') {
      css.push('nav, nav.scrolled { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; background: rgba(0,0,0,.96) !important; }');
      css.push('.main-logo, .nav-logo img, .about-logo-float { filter: none !important; }');
    }
    var s = document.createElement('style');
    s.id = 'cpx-perf-override';
    s.textContent = css.join('\n');
    document.head.appendChild(s);
  }
})();
