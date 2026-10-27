// ================================================================
// CAPRUX — script.js v25 "STRUKTUR BARU"
// Satu script untuk semua halaman. Halaman ditentukan oleh <body data-page="...">
//   home | cerita | baca | podcast | produk | product
// Nav, menu HP, dan footer dibuat dari sini (ubah di SITE di bawah, berlaku di semua halaman).
// ================================================================
(function () {
  'use strict';

  // ── PENGATURAN SITUS ──────────────────────────────────────────
  var SITE = {
    email: 'caprux.official@gmail.com',
    copy: '© 2024–2026 CAPRUX',
    slogan: "Being the Impossible with God's Help",
    cta: { label: 'Mulai Eksplorasi', href: 'index.html#kenapa' },
    nav: [
      { label: 'Lore',          href: 'index.html#kenapa' },
      { label: 'Story of Hero', href: 'cerita.html',        pages: ['cerita', 'baca'] },
      { label: 'Nobody Sound',  href: 'nobody-sound.html',  pages: ['podcast'] },
      { label: 'Artefak',       href: 'produk.html',        pages: ['produk', 'product'] },
      { label: 'Signal',        href: 'index.html#signal' }
    ]
  };

  var STATUS_LABEL = { soon: '◇ UNDISCOVERED', open: '◢ FOUND', sold: '✕ GONE' };
  var PAGE = (document.body && document.body.dataset.page) || 'home';
  var PRODUCTS = [];

  // ── UTIL ──────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // ── NAV, MENU HP, FOOTER, FAB ─────────────────────────────────
  function injectChrome() {
    var body = document.body;
    var links = SITE.nav.map(function (n) {
      var active = n.pages && n.pages.indexOf(PAGE) > -1 ? ' class="active"' : '';
      return { n: n, active: active };
    });

    var html = ''
      + '<div class="scroll-progress" id="scrollProgress"></div>'
      + '<div class="mobile-menu" id="mobileMenu">'
      +   links.map(function (l) { return '<a href="' + l.n.href + '"' + l.active + '>' + esc(l.n.label) + '</a>'; }).join('')
      +   '<a href="' + SITE.cta.href + '" class="m-cta">' + esc(SITE.cta.label) + '</a>'
      + '</div>'
      + '<nav>'
      +   '<a href="index.html" class="nav-logo"><img src="logo_text_putih.png" alt="CAPRUX"></a>'
      +   '<ul class="nav-links">'
      +     links.map(function (l) { return '<li><a href="' + l.n.href + '"' + l.active + '>' + esc(l.n.label) + '</a></li>'; }).join('')
      +   '</ul>'
      +   '<a href="' + SITE.cta.href + '" class="nav-cta">' + esc(SITE.cta.label) + '</a>'
      +   '<button class="hamburger" id="hamburger" aria-label="Menu" aria-controls="mobileMenu"><span></span><span></span><span></span></button>'
      + '</nav>';
    body.insertAdjacentHTML('afterbegin', html);

    var foot = ''
      + '<footer>'
      +   '<div class="f-logo"><a href="index.html"><img src="logo_text_putih.png" alt="CAPRUX"></a></div>'
      +   '<div class="f-copy">' + SITE.copy + '<br><span style="color:#555;font-size:.6rem">' + esc(SITE.slogan) + '</span></div>'
      + '</footer>';
    if (PAGE !== 'baca') {
      foot += '<a href="mailto:' + SITE.email + '?subject=SAPA CAPRUX" class="email-fab" aria-label="Kirim pesan">'
        + '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" stroke-width="1.6"/>'
        + '<path d="M4 6.5L11.2865 12.0433C11.7051 12.3626 12.2949 12.3626 12.7135 12.0433L20 6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
        + '</svg></a>';
    }
    body.insertAdjacentHTML('beforeend', foot);
  }

  function toggleMenu() {
    var m = $('mobileMenu'), h = $('hamburger');
    if (!m || !h) return;
    m.classList.toggle('open');
    h.classList.toggle('open');
    document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
  }
  function closeMenu() {
    var m = $('mobileMenu'), h = $('hamburger');
    if (m) m.classList.remove('open');
    if (h) h.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;

  function initNav() {
    var h = $('hamburger');
    if (h) h.addEventListener('click', toggleMenu);
    var m = $('mobileMenu');
    if (m) m.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  // ── SCROLL PROGRESS + NAV SCROLLED ────────────────────────────
  function updateScrollProgress() {
    var bar = $('scrollProgress');
    if (!bar) return;
    var doc = document.documentElement;
    var max = (doc.scrollHeight - doc.clientHeight) || 1;
    bar.style.width = Math.min(100, Math.max(0, (window.scrollY / max) * 100)) + '%';
  }
  function initScroll() {
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
      updateScrollProgress();
    }, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }

  // ── REVEAL ────────────────────────────────────────────────────
  function initReveal() {
    var targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      targets.forEach(function (el) { io.observe(el); });
    } else {
      targets.forEach(function (el) { el.classList.add('in-view'); });
    }
  }

  // ── PARALLAX HERO (hanya Home) ────────────────────────────────
  function initParallax() {
    var L = [1, 2, 3, 4, 5, 6, 7].map(function (n) { return document.querySelector('.l-' + n); });
    if (!L[0]) return;
    if (window.__CPX_TIER === 'LOW' || reducedMotion()) return;

    var ticking = false;
    function update() {
      var y = window.scrollY;
      if (L[0]) L[0].style.backgroundPosition = 'center calc(0% + ' + (y * 0.1)  + 'px)';
      if (L[1]) L[1].style.backgroundPosition = 'center calc(0% + ' + (y * 0.2)  + 'px)';
      if (L[2]) L[2].style.backgroundPosition = 'center calc(0% + ' + (y * 0.35) + 'px)';
      if (L[3]) L[3].style.backgroundPosition = 'center calc(0% + ' + (y * 0.5)  + 'px)';
      if (L[4]) L[4].style.backgroundPosition = 'center calc(0% + ' + (y * 0.65) + 'px)';
      // Layer tanah tetap menempel di bawah
      if (L[5]) L[5].style.backgroundPosition = 'center calc(100% + ' + (y * 0.8) + 'px)';
      if (L[6]) L[6].style.backgroundPosition = 'center calc(100% + ' + (y * 1.0) + 'px)';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  // ── VISITOR COUNTER (hanya Home) ──────────────────────────────
  function initVisitor() {
    var numEl = $('visitorCount');
    if (!numEl) return;
    var note = $('visitorNote');
    fetch('https://countapi.mileshilliard.com/api/v1/hit/caprux-id_visitor-total-2025')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        numEl.textContent = (data.value || 0).toLocaleString('id-ID');
        if (note) note.textContent = 'Transmisi diterima · real-time';
      })
      .catch(function () {
        numEl.textContent = '—';
        if (note) note.textContent = 'Sinyal terputus';
      });
  }

  // ── DATA ──────────────────────────────────────────────────────
  function loadProducts() {
    if (!window.CAPRUX_DATA) return Promise.reject(new Error('caprux-data.js belum termuat'));
    return window.CAPRUX_DATA.loadProducts().then(function (p) { PRODUCTS = p; return p; });
  }
  function loadStories() {
    if (!window.CAPRUX_DATA) return Promise.reject(new Error('caprux-data.js belum termuat'));
    return window.CAPRUX_DATA.loadStories();
  }
  function getProduct(id) {
    return PRODUCTS.filter(function (p) { return p.id === id; })[0] || null;
  }

  // ── HOME: CAROUSEL PRODUK ─────────────────────────────────────
  function renderCarousel() {
    var outer = $('productCarousel');
    var dotsWrap = $('carouselDots');
    if (!outer || !dotsWrap) return;
    if (!PRODUCTS.length) { outer.innerHTML = '<div class="ns-empty">Belum ada artefak.</div>'; return; }

    var activeIdx = 0;
    function getClass(i) {
      var d = i - activeIdx;
      if (d === 0) return 'active';
      if (d === 1 || d === -1) return 'side';
      return 'far';
    }

    outer.innerHTML = PRODUCTS.map(function (p, i) {
      var locked = p.status !== 'open';
      return ''
        + '<div class="pcard ' + getClass(i) + (locked ? ' locked' : '') + '" data-idx="' + i + '">'
        +   (p.image
              ? '<img class="pcard-img" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">'
              : '<div class="pcard-placeholder">CPX</div>')
        +   (locked ? '<div class="pcard-lock">' + (STATUS_LABEL[p.status] || '◇ UNDISCOVERED') + '</div>' : '')
        +   '<div class="pcard-body">'
        +     '<div class="pcard-badge">// ARTEFAK #' + String(i + 1).padStart(3, '0') + '</div>'
        +     '<div class="pcard-name">' + esc(p.name) + '</div>'
        +     '<div class="pcard-price">' + esc(p.price) + '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    dotsWrap.innerHTML = PRODUCTS.map(function (_, i) {
      return '<div class="carousel-dot' + (i === activeIdx ? ' active' : '') + '" data-idx="' + i + '"></div>';
    }).join('');

    function setActive(idx) {
      if (idx < 0 || idx >= PRODUCTS.length) return;
      activeIdx = idx;
      outer.querySelectorAll('.pcard').forEach(function (c, i) {
        var locked = PRODUCTS[i].status !== 'open';
        c.className = 'pcard ' + getClass(i) + (locked ? ' locked' : '');
      });
      dotsWrap.querySelectorAll('.carousel-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === activeIdx);
      });
    }

    outer.querySelectorAll('.pcard').forEach(function (c, i) {
      c.addEventListener('click', function () {
        if (i !== activeIdx) { setActive(i); return; }
        var p = PRODUCTS[i];
        if (!p || !p.id) return;
        if (p.status !== 'open') {
          c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
          return;
        }
        window.location.href = 'product.html?id=' + encodeURIComponent(p.id);
      });
    });
    dotsWrap.querySelectorAll('.carousel-dot').forEach(function (d, i) {
      d.addEventListener('click', function () { setActive(i); });
    });

    var tStart = 0;
    outer.addEventListener('touchstart', function (e) { tStart = e.touches[0].clientX; }, { passive: true });
    outer.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tStart;
      if (Math.abs(dx) > 36) setActive(dx < 0 ? activeIdx + 1 : activeIdx - 1);
    }, { passive: true });
  }

  // ── PRODUK: GRID SEMUA ARTEFAK ────────────────────────────────
  function productCard(p) {
    var locked = p.status !== 'open';
    var inner = ''
      + '<div class="dc-img">' + (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : '') + '</div>'
      + '<div class="dc-body">'
      +   '<div class="dc-badge">// ' + esc(p.type) + '</div>'
      +   '<div class="dc-name">' + esc(p.name) + '</div>'
      +   '<div class="dc-foot"><span class="dc-price">' + esc(p.price) + '</span>'
      +   (locked ? '<span class="dc-status">' + (STATUS_LABEL[p.status] || '') + '</span>' : '') + '</div>'
      + '</div>';
    return locked
      ? '<div class="drop-card locked">' + inner + '</div>'
      : '<a href="product.html?id=' + encodeURIComponent(p.id) + '" class="drop-card">' + inner + '</a>';
  }
  function renderProductGrid() {
    var grid = $('productGrid');
    if (!grid) return;
    grid.innerHTML = PRODUCTS.length
      ? PRODUCTS.map(productCard).join('')
      : '<div class="ns-empty">Belum ada artefak.</div>';
  }

  // ── PRODUK: DETAIL ────────────────────────────────────────────
  function renderProductDetail() {
    var id = new URLSearchParams(window.location.search).get('id');
    var product = getProduct(id);
    var page = document.querySelector('.product-page');

    if (!product) {
      if (page) page.innerHTML = '<div style="text-align:center;padding:100px 0;"><h1 style="font-size:4rem;color:var(--green);">404</h1><p>Artefak tidak ditemukan.</p><a href="produk.html" style="color:var(--green);">← Kembali</a></div>';
      return;
    }

    document.title = product.name + ' — CAPRUX';
    var bcCur = document.querySelector('.bc-cur');
    if (bcCur) bcCur.textContent = product.name;

    // Galeri + thumbnail
    var images = product.images && product.images.length ? product.images : [product.image];
    var mainImg = $('mainImg');
    var thumbs = document.querySelector('.thumbs');
    if (mainImg) { mainImg.src = images[0]; mainImg.alt = product.name; }
    if (thumbs) {
      if (images.length < 2) {
        thumbs.style.display = 'none';
      } else {
        thumbs.innerHTML = images.map(function (src, i) {
          return '<div class="thumb' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"><img src="' + esc(src) + '" alt="' + esc(product.name) + ' ' + (i + 1) + '"></div>';
        }).join('');
        thumbs.addEventListener('click', function (e) {
          var t = e.target.closest('.thumb');
          if (!t || !mainImg) return;
          mainImg.src = images[+t.dataset.i];
          thumbs.querySelectorAll('.thumb').forEach(function (x) { x.classList.toggle('active', x === t); });
        });
      }
    }

    var nameEl = document.querySelector('.prod-name');
    if (nameEl) nameEl.innerHTML = esc(product.name).replace(/ /g, '<br>');
    var typeEl = document.querySelector('.prod-type');
    if (typeEl) typeEl.textContent = product.type;
    var priceEl = document.querySelector('.price');
    if (priceEl) priceEl.textContent = product.price;

    var statusEl = document.querySelector('.status');
    if (statusEl) {
      statusEl.textContent = STATUS_LABEL[product.status] || product.status;
      statusEl.className = 'status s-' + product.status;
    }

    var ctaBtn = document.querySelector('.cta-block .btn-primary');
    if (ctaBtn) {
      if (product.status === 'open' && product.shopeeUrl) {
        ctaBtn.textContent = '🛒 Beli Sekarang';
        ctaBtn.removeAttribute('disabled');
        ctaBtn.onclick = function () { window.open(product.shopeeUrl, '_blank', 'noopener'); };
      } else if (product.status === 'sold') {
        ctaBtn.textContent = '✕ Sudah Habis';
        ctaBtn.setAttribute('disabled', 'true');
      } else if (product.status === 'open') {
        ctaBtn.textContent = 'Link pembelian belum tersedia';
        ctaBtn.setAttribute('disabled', 'true');
      } else {
        ctaBtn.textContent = '◇ Segera Tiba';
        ctaBtn.setAttribute('disabled', 'true');
      }
    }

    // Form "beritahu saya" hanya relevan kalau produk belum bisa dibeli
    var notify = document.querySelector('.notify-block');
    if (notify && product.status === 'open') notify.style.display = 'none';
    window.handleNotify = function () {
      var input = $('notifyEmail');
      var email = input ? input.value.trim() : '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (input) { input.focus(); input.style.borderColor = '#ff4444'; }
        return;
      }
      if (input) input.style.borderColor = '';
      var subject = encodeURIComponent('KABARI SAYA: ' + product.name);
      var bodyTxt = encodeURIComponent('Tolong kabari saya kalau ' + product.name + ' sudah tersedia.\nEmail saya: ' + email);
      window.location.href = 'mailto:' + SITE.email + '?subject=' + subject + '&body=' + bodyTxt;
    };

    var descEl = document.querySelector('.prod-desc');
    if (descEl) descEl.innerHTML = product.desc;

    var relGrid = document.querySelector('.rel-grid');
    if (relGrid) {
      var related = PRODUCTS.filter(function (p) { return p.id !== id; }).slice(0, 4);
      relGrid.innerHTML = related.map(productCard).join('');
    }
  }

  // ── CERITA: TEASER DI HOME ────────────────────────────────────
  function storyRow(s) {
    return '<li><a class="story-row" href="baca.html?id=' + esc(s.id) + '">'
      + '<span class="story-num">' + esc(s.id) + '</span>'
      + '<span class="story-title">' + esc(s.title) + '</span>'
      + '<span class="story-go" aria-hidden="true">→</span></a></li>';
  }
  function renderStoryTeaser(data) {
    var el = $('storyTeaser');
    if (!el) return;
    var list = data.stories.slice().reverse().slice(0, 3); // 3 terbaru
    el.innerHTML = list.length
      ? list.map(storyRow).join('')
      : '<li class="story-empty">Cerita pertama segera hadir.</li>';
  }

  // ── CERITA: DAFTAR LENGKAP ────────────────────────────────────
  function renderStoryList(data) {
    var el = $('storyList');
    if (!el) return;
    el.innerHTML = data.stories.length
      ? data.stories.map(storyRow).join('')   // urut nomor: 001 di atas, yang baru di bawah
      : '<li class="story-empty">Belum ada cerita. Cerita pertama segera hadir.</li>';
  }

  // ── CERITA: HALAMAN BACA ──────────────────────────────────────
  function initReaderControls() {
    var col = $('readerCol');
    if (!col) return;
    var STEPS = [0.85, 0.95, 1, 1.1, 1.22, 1.38, 1.55];
    var i = STEPS.indexOf(1);
    try {
      var saved = parseFloat(localStorage.getItem('cpx_read_scale'));
      if (STEPS.indexOf(saved) > -1) i = STEPS.indexOf(saved);
    } catch (e) {}
    function apply() {
      col.style.setProperty('--read-scale', STEPS[i]);
      try { localStorage.setItem('cpx_read_scale', String(STEPS[i])); } catch (e) {}
      var minus = $('fsMinus'), plus = $('fsPlus');
      if (minus) minus.disabled = i === 0;
      if (plus) plus.disabled = i === STEPS.length - 1;
      updateScrollProgress();
    }
    var minus = $('fsMinus'), plus = $('fsPlus');
    if (minus) minus.addEventListener('click', function () { if (i > 0) { i--; apply(); } });
    if (plus) plus.addEventListener('click', function () { if (i < STEPS.length - 1) { i++; apply(); } });
    apply();
  }

  function readerMessage(text) {
    var body = $('storyBody');
    if (body) body.innerHTML = '<p class="reader-state">' + text + '</p>';
    var pager = $('readerPager');
    if (pager) pager.innerHTML = '<a class="btn-ghost pager-only" href="cerita.html">← Daftar cerita</a>';
  }

  function renderReader() {
    initReaderControls();
    var titleEl = $('readerTitle');
    var eyebrow = $('readerEyebrow');
    var body = $('storyBody');
    var pager = $('readerPager');
    var raw = new URLSearchParams(window.location.search).get('id');
    var num = parseInt(raw, 10);

    if (isNaN(num)) { if (titleEl) titleEl.textContent = 'Cerita tidak ditemukan'; readerMessage('Alamat cerita tidak lengkap. Pilih cerita dari daftar.'); return; }

    loadStories().then(function (data) {
      var list = data.stories;
      var idx = -1;
      list.forEach(function (s, k) { if (s.num === num) idx = k; });
      if (idx < 0) {
        if (titleEl) titleEl.textContent = 'Cerita tidak ditemukan';
        readerMessage('Cerita nomor ' + esc(raw) + ' belum ada.');
        return;
      }
      var s = list[idx];
      document.title = s.title + ' — Story of Hero — CAPRUX';
      if (eyebrow) eyebrow.textContent = '// STORY OF HERO · ' + s.id;
      if (titleEl) titleEl.textContent = s.title;

      return fetch('stories/html/' + encodeURIComponent(s.file) + '?v=' + encodeURIComponent(data.v))
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.text();
        })
        .then(function (html) {
          body.innerHTML = html;
          body.querySelectorAll('img').forEach(function (im) { im.loading = 'lazy'; });
          var prev = list[idx - 1], next = list[idx + 1];
          var out = '';
          if (prev) out += '<a class="btn-ghost" href="baca.html?id=' + esc(prev.id) + '">← ' + esc(prev.id) + '</a>';
          else out += '<a class="btn-ghost" href="cerita.html">← Daftar</a>';
          if (next) out += '<a class="btn-primary" href="baca.html?id=' + esc(next.id) + '">Berikutnya · ' + esc(next.id) + ' →</a>';
          else out += '<a class="btn-ghost" href="cerita.html">Daftar cerita</a>';
          if (!next) out += '<p class="pager-note">Ini cerita terakhir untuk sekarang. Yang berikutnya masih ditulis.</p>';
          pager.innerHTML = out;
          window.scrollTo(0, 0);
          updateScrollProgress();
        });
    }).catch(function (err) {
      console.warn('[CAPRUX] Gagal memuat cerita.', err);
      if (titleEl) titleEl.textContent = 'Gagal memuat';
      readerMessage('Cerita belum bisa dimuat. Coba muat ulang halaman ini.');
    });
  }

  // ── INIT ──────────────────────────────────────────────────────
  function boot() {
    injectChrome();
    initNav();
    initScroll();
    initReveal();

    function fail(el, msg) {
      return function (err) {
        console.warn('[CAPRUX] ' + msg, err);
        var node = $(el);
        if (node) node.innerHTML = '<div class="ns-empty">' + msg + '</div>';
      };
    }

    if (PAGE === 'home') {
      initParallax();
      initVisitor();
      loadProducts().then(renderCarousel).catch(fail('productCarousel', 'Artefak belum bisa dimuat.'));
      loadStories().then(renderStoryTeaser).catch(function () {
        var el = $('storyTeaser');
        if (el) el.innerHTML = '<li class="story-empty">Cerita pertama segera hadir.</li>';
      });
    } else if (PAGE === 'produk') {
      loadProducts().then(renderProductGrid).catch(fail('productGrid', 'Artefak belum bisa dimuat.'));
    } else if (PAGE === 'product') {
      loadProducts().then(renderProductDetail).catch(function (err) {
        console.warn('[CAPRUX] Gagal load produk.', err);
      });
    } else if (PAGE === 'cerita') {
      loadStories().then(renderStoryList).catch(function (err) {
        console.warn('[CAPRUX] Gagal load cerita.', err);
        var el = $('storyList');
        if (el) el.innerHTML = '<li class="story-empty">Daftar cerita belum bisa dimuat.</li>';
      });
    } else if (PAGE === 'baca') {
      renderReader();
    }
    // PAGE === 'podcast' ditangani nobody-sound.js
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
