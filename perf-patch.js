// ================================================================
// CAPRUX — PERFORMANCE DETECTION SYSTEM v10
// Detects device capability, injects class to <html>
// Runs BEFORE DOMContentLoaded to prevent flash
// ================================================================
(function() {
  'use strict';

  var mem    = navigator.deviceMemory;
  var cores  = navigator.hardwareConcurrency || 2;
  var conn   = (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
  var slowNet = conn && (conn.saveData || /2g|slow/i.test(conn.effectiveType || ''));

  var tier = 'HIGH';
  if (mem !== undefined && mem <= 1)   tier = 'LOW';
  else if (mem !== undefined && mem <= 2) tier = 'MID';
  if (cores <= 2 && tier !== 'LOW')    tier = 'MID';
  if (slowNet)                         tier = (tier === 'HIGH') ? 'MID' : 'LOW';

  try { sessionStorage.setItem('cpx_tier', tier); } catch(e) {}
  document.documentElement.setAttribute('data-perf', tier);

  if (tier === 'LOW' || tier === 'MID') {
    var s = document.createElement('style');
    s.id = 'cpx-perf-override';
    s.textContent = [
      '.hero-logo-stack img { animation: none !important; }',
      '.about-logo-float { animation: none !important; }',
      '.marquee-strip { --marquee-dur: 45s; }',
      '.email-fab-ping { animation: none !important; }',
      '[data-perf="LOW"] .cursor-glow, [data-perf="MID"] .cursor-glow { display: none !important; }',
      '[data-perf="LOW"] body { background-image: none !important; }',
      '[data-perf="LOW"] .reveal, [data-perf="LOW"] .reveal-scale, [data-perf="LOW"] .reveal-left, [data-perf="LOW"] .reveal-right { transition-duration: 0.3s !important; }',
      '[data-perf="LOW"] .about-phil-banner { transform: none !important; }',
      '[data-perf="LOW"] .phil-watermark { animation: none !important; }',
    ].join('\n');
    document.head.appendChild(s);
  }

  window.__CPX_TIER = tier;
})();
