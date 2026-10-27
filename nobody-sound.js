// ================================================================
// CAPRUX — nobody-sound.js v2  (halaman podcast / Nobody Sound)
// Data dari nobody-sound.csv lewat caprux-data.js
// Elemen yang dipakai: #nsFilters  #nsCarousel  #nsDots  #nsInfoPanel
// ================================================================
(function () {
  'use strict';

  var ALL = [];        // semua tamu
  var list = [];       // tamu setelah difilter
  var idx = 0;         // posisi aktif
  var currentCat = 'Semua';

  var elFilters, elTrack, elDots, elPanel;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function initial(name) { return esc((name || '?').charAt(0).toUpperCase()); }

  // ── FILTER KATEGORI ───────────────────────────────────────────
  function buildFilters() {
    var cats = ['Semua'];
    ALL.forEach(function (g) {
      if (g.kategori && cats.indexOf(g.kategori) === -1) cats.push(g.kategori);
    });
    elFilters.innerHTML = cats.map(function (c) {
      return '<button type="button" class="ns-filter-btn' + (c === currentCat ? ' active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
    }).join('');
  }

  function applyFilter(cat) {
    currentCat = cat;
    list = cat === 'Semua' ? ALL.slice() : ALL.filter(function (g) { return g.kategori === cat; });
    idx = 0;
    elFilters.querySelectorAll('.ns-filter-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-cat') === cat);
    });
    renderCarousel();
  }

  // ── CAROUSEL ──────────────────────────────────────────────────
  function posClass(i) {
    var d = i - idx;
    if (d === 0) return 'active';
    if (d === -1) return 'side-left';
    if (d === 1) return 'side-right';
    return 'far';
  }

  function renderCarousel() {
    if (!list.length) {
      elTrack.innerHTML = '<div class="ns-empty">Belum ada transmisi di kategori ini.</div>';
      elDots.innerHTML = '';
      elPanel.innerHTML = '';
      return;
    }

    elTrack.innerHTML = list.map(function (g, i) {
      var frame = g.foto
        ? '<img src="' + esc(g.foto) + '" alt="' + esc(g.nickname) + '" loading="lazy">'
        : '<div class="ns-c-ph">' + initial(g.nickname) + '</div>';
      return ''
        + '<div class="ns-c ' + posClass(i) + '" data-i="' + i + '" role="button" tabindex="0" aria-label="' + esc(g.nickname) + '">'
        +   '<div class="ns-c-frame">' + frame + '</div>'
        +   '<div class="ns-c-name">' + esc(g.nickname) + '</div>'
        +   '<div class="ns-c-cat">' + esc(g.kategori) + '</div>'
        + '</div>';
    }).join('');

    // Foto gagal dimuat -> ganti huruf pertama
    elTrack.querySelectorAll('.ns-c-frame img').forEach(function (img, k) {
      img.addEventListener('error', function () {
        var ph = document.createElement('div');
        ph.className = 'ns-c-ph';
        ph.textContent = (list[k].nickname || '?').charAt(0).toUpperCase();
        img.replaceWith(ph);
      });
    });

    elDots.innerHTML = list.map(function (_, i) {
      return '<div class="ns-dot' + (i === idx ? ' active' : '') + '" data-i="' + i + '"></div>';
    }).join('');

    renderInfo(list[idx]);
  }

  function setActive(n) {
    if (n < 0 || n >= list.length || n === idx) return;
    idx = n;
    elTrack.querySelectorAll('.ns-c').forEach(function (c, i) { c.className = 'ns-c ' + posClass(i); });
    elDots.querySelectorAll('.ns-dot').forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    renderInfo(list[idx]);
  }

  // ── PANEL INFO ────────────────────────────────────────────────
  function renderInfo(g) {
    var panel = elPanel;
    if (!g) { panel.innerHTML = ''; return; }

    var socialHtml = (g.socials || []).map(function (s) {
      var cls = 'ns-social-link' + (s.platform === 'WhatsApp' ? ' wa' : '');
      return '<a class="' + cls + '" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.platform) + '</a>';
    }).join('');

    panel.innerHTML = ''
      + '<div class="ns-info-inner">'
      +   '<div class="ns-info-head">'
      +     '<h3 class="ns-info-name">' + esc(g.nickname) + '</h3>'
      +     '<span class="ns-info-cat">// TRANSMISI AKTIF</span>'
      +   '</div>'
      +   (g.jangkauan ? '<p class="ns-info-loc">📍 ' + esc(g.jangkauan) + '</p>' : '')
      +   (g.deskripsi ? '<p class="ns-info-desc">' + esc(g.deskripsi) + '</p>' : '')
      +   (socialHtml ? '<div class="ns-socials">' + socialHtml + '</div>' : '')
      + '</div>';

    panel.classList.remove('fade-in');
    void panel.offsetWidth;
    panel.classList.add('fade-in');
  }

  // ── INIT ──────────────────────────────────────────────────────
  function init() {
    elFilters = document.getElementById('nsFilters');
    elTrack   = document.getElementById('nsCarousel');
    elDots    = document.getElementById('nsDots');
    elPanel   = document.getElementById('nsInfoPanel');
    if (!elFilters || !elTrack || !elDots || !elPanel || !window.CAPRUX_DATA) return;

    elFilters.addEventListener('click', function (e) {
      var b = e.target.closest('.ns-filter-btn');
      if (b) applyFilter(b.getAttribute('data-cat'));
    });
    elTrack.addEventListener('click', function (e) {
      var c = e.target.closest('.ns-c');
      if (c) setActive(+c.getAttribute('data-i'));
    });
    elTrack.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.ns-c')) {
        e.preventDefault();
        setActive(+e.target.closest('.ns-c').getAttribute('data-i'));
      }
    });
    elDots.addEventListener('click', function (e) {
      var d = e.target.closest('.ns-dot');
      if (d) setActive(+d.getAttribute('data-i'));
    });

    var tStart = 0;
    elTrack.addEventListener('touchstart', function (e) { tStart = e.touches[0].clientX; }, { passive: true });
    elTrack.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tStart;
      if (Math.abs(dx) > 36) setActive(dx < 0 ? idx + 1 : idx - 1);
    }, { passive: true });

    document.addEventListener('keydown', function (e) {
      if (/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '')) return;
      if (e.key === 'ArrowRight') setActive(idx + 1);
      if (e.key === 'ArrowLeft') setActive(idx - 1);
    });

    window.CAPRUX_DATA.loadGuests()
      .then(function (guests) {
        ALL = guests;
        buildFilters();
        applyFilter('Semua');
      })
      .catch(function (err) {
        console.warn('[CAPRUX] Gagal load nobody-sound.csv', err);
        elTrack.innerHTML = '<div class="ns-empty">Transmisi belum bisa dimuat.</div>';
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
