// ================================================================
// CAPRUX — nobody-sound.js  v1.0 FINAL
// Carousel karakter Nobody Sound
// ================================================================
(function () {
  'use strict';

  var ALL_GUESTS = [];
  var FILTERED   = [];
  var activeIdx  = 0;
  var activeCat  = 'semua';

  // ── Load ──
  function load() {
    var track = document.getElementById('nsCarousel');
    if (!track) return;

    if (!window.CAPRUX_DATA) {
      track.innerHTML = '<div class="ns-empty">// caprux-data.js belum dimuat</div>';
      return;
    }

    window.CAPRUX_DATA.loadGuests()
      .then(function (guests) {
        ALL_GUESTS = guests;
        buildFilters(guests);
        applyFilter();
      })
      .catch(function (err) {
        console.error('[CAPRUX NS]', err);
        track.innerHTML = '<div class="ns-empty">// Gagal memuat data. Pastikan nobody-sound.csv sudah diupload.</div>';
      });
  }

  // ── Filter ──
  function buildFilters(guests) {
    var cats = ['semua'];
    guests.forEach(function (g) {
      if (g.kategori && cats.indexOf(g.kategori) === -1) cats.push(g.kategori);
    });

    var wrap = document.getElementById('nsFilters');
    if (!wrap) return;

    wrap.innerHTML = cats.map(function (cat) {
      return '<button class="ns-filter-btn' + (cat === 'semua' ? ' active' : '') +
             '" data-cat="' + cat + '">' +
             cat.charAt(0).toUpperCase() + cat.slice(1) +
             '</button>';
    }).join('');

    wrap.querySelectorAll('.ns-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        wrap.querySelectorAll('.ns-filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        activeCat = btn.dataset.cat;
        applyFilter();
      });
    });
  }

  function applyFilter() {
    FILTERED = ALL_GUESTS.filter(function (g) {
      return activeCat === 'semua' || g.kategori === activeCat;
    });
    activeIdx = 0;
    renderCarousel();
    renderInfo();
  }

  // ── Klasifikasi posisi kartu ──
  function getCardClass(i) {
    var d = i - activeIdx;
    if (d === 0)  return 'active';
    if (d === -1) return 'side-left';
    if (d === 1)  return 'side-right';
    return 'far';
  }

  // ── Render carousel ──
  function renderCarousel() {
    var track = document.getElementById('nsCarousel');
    var dots  = document.getElementById('nsDots');

    if (!track) return;

    if (!FILTERED.length) {
      track.innerHTML = '<div class="ns-empty">// Belum ada tamu.</div>';
      if (dots) dots.innerHTML = '';
      return;
    }

    track.innerHTML = FILTERED.map(function (g, i) {
      var cls = getCardClass(i);
      var initial = (g.nickname || '?').charAt(0).toUpperCase();
      var photoInner = g.foto
        ? '<img src="nobody-sound/' + g.foto + '" alt="' + g.nickname + '" ' +
          'onerror="this.outerHTML=\'<div class=&quot;ns-c-ph&quot;>' + initial + '</div>\'">'
        : '<div class="ns-c-ph">' + initial + '</div>';

      return ''
        + '<div class="ns-c ' + cls + '" data-idx="' + i + '">'
        +   '<div class="ns-c-frame">' + photoInner + '</div>'
        +   '<div class="ns-c-name">' + g.nickname + '</div>'
        +   '<div class="ns-c-cat">' + g.kategori + '</div>'
        + '</div>';
    }).join('');

    if (dots) {
      dots.innerHTML = FILTERED.map(function (_, i) {
        return '<div class="ns-dot' + (i === activeIdx ? ' active' : '') +
               '" data-idx="' + i + '"></div>';
      }).join('');
    }

    bindEvents();
  }

  // ── Events ──
  function bindEvents() {
    var track = document.getElementById('nsCarousel');
    var dots  = document.getElementById('nsDots');
    if (!track) return;

    track.querySelectorAll('.ns-c').forEach(function (card) {
      card.addEventListener('click', function () {
        var i = parseInt(card.dataset.idx, 10);
        if (i !== activeIdx) setActive(i);
      });
    });

    if (dots) {
      dots.querySelectorAll('.ns-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          setActive(parseInt(dot.dataset.idx, 10));
        });
      });
    }

    // Touch swipe
    var tStart = 0;
    track.addEventListener('touchstart', function (e) {
      tStart = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tStart;
      if (Math.abs(dx) > 36) {
        dx < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
      }
    }, { passive: true });

    // Mouse drag
    var mStart = 0, dragging = false;
    track.addEventListener('mousedown', function (e) {
      dragging = true;
      mStart = e.clientX;
    });
    document.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      if (Math.abs(e.clientX - mStart) > 36) {
        dragging = false;
        e.clientX - mStart < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
      }
    });
    document.addEventListener('mouseup', function () { dragging = false; });
  }

  // ── Set aktif ──
  function setActive(idx) {
    idx = Math.max(0, Math.min(FILTERED.length - 1, idx));
    if (idx === activeIdx) return;
    activeIdx = idx;

    document.querySelectorAll('.ns-c').forEach(function (c, i) {
      c.className = 'ns-c ' + getCardClass(i);
    });

    document.querySelectorAll('.ns-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === activeIdx);
    });

    renderInfo();
  }

  // ── Info panel ──
  function renderInfo() {
    var panel = document.getElementById('nsInfoPanel');
    if (!panel) return;

    var g = FILTERED[activeIdx];
    if (!g) { panel.innerHTML = ''; return; }

    var socialHtml = g.socials.map(function (s) {
      var cls = s.platform === 'WhatsApp' ? ' wa' : '';
      var label = s.platform === 'WhatsApp' ? '💬 WhatsApp' : s.platform;
      return '<a href="' + s.url + '" class="ns-social-link' + cls +
             '" target="_blank" rel="noopener">' + label + '</a>';
    }).join('');

    panel.innerHTML = ''
      + '<div class="ns-info-inner">'
      +   '<div class="ns-info-head">'
      +     '<h3 class="ns-info-name">' + g.nickname + '</h3>'
      +     '<span class="ns-info-cat">// ' + g.kategori + '</span>'
      +   '</div>'
      +   (g.jangkauan ? '<p class="ns-info-loc">📍 ' + g.jangkauan + '</p>' : '')
      +   (g.deskripsi ? '<p class="ns-info-desc">' + g.deskripsi + '</p>' : '')
      +   (socialHtml ? '<div class="ns-socials">' + socialHtml + '</div>' : '')
      + '</div>';

    panel.classList.remove('fade-in');
    void panel.offsetWidth;
    panel.classList.add('fade-in');
  }

  document.addEventListener('DOMContentLoaded', load);
})();
