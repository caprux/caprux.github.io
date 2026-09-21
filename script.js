// ================================================================
// CAPRUX — script.js
// SATU SUMBER DATA untuk semua produk
// TAMBAH PRODUK BARU di array PRODUCTS di bawah ini SAJA
// ================================================================

// ================================================================
// DATA PRODUK — ✨ TAMBAH PRODUK BARU DI SINI ✨
// ================================================================
// ================================================================
// DATA PRODUK — Sekarang dibaca dari data/products.csv
// Edit produk cukup di Excel → export CSV → upload ke GitHub
// Jangan edit bagian ini secara manual
// ================================================================

// Variabel global — diisi setelah CSV selesai diload
let PRODUCTS = [];

// ── Fungsi load produk dari CSV (dipanggil di DOMContentLoaded) ──
function loadAndRender() {
  const isProductPage = window.location.pathname.includes('product.html');

  if (window.CAPRUX_DATA) {
    window.CAPRUX_DATA.loadProducts()
      .then(function(products) {
        PRODUCTS = products;
        if (isProductPage) {
          renderProductDetail();
        } else {
          renderProducts();
        }
      })
      .catch(function(err) {
        console.warn('[CAPRUX] Gagal load products.csv, pakai data fallback kosong.', err);
        PRODUCTS = [];
        if (!isProductPage) renderProducts();
      });
  } else {
    console.warn('[CAPRUX] caprux-data.js belum dimuat');
  }
}

// ================================================================
// FUNGSI UTILITY
// ================================================================
const STATUS_LABEL = {
  soon: 'Coming Soon',
  open: '✓ Tersedia',
  sold: 'Habis'
};

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getRelatedProducts(id) {
  const product = getProduct(id);
  if (!product) return [];
  return product.related.map(relId => getProduct(relId)).filter(Boolean);
}

function renderProducts() {
  // ── Legacy grid untuk product.html ──
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.style.display = 'none'; // sembunyikan grid lama, carousel yang tampil
  }

  // ── Carousel untuk index.html ──
  const outer    = document.getElementById('productCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  if (!outer || !dotsWrap) return;

  // Tampilkan wrapper carousel
  const carouselWrap = outer.closest('.carousel-wrap');
  if (carouselWrap) carouselWrap.style.display = 'flex';

  let activeIdx = 0;

  function getClass(i) {
    const d = i - activeIdx;
    if (d === 0) return 'active';
    if (d === 1 || d === -1) return 'side';
    return 'far';
  }

  // Build HTML
  outer.innerHTML = PRODUCTS.map((p, i) => {
    const locked = p.status !== 'open';
    return `
    <div class="pcard ${getClass(i)}${locked ? ' locked' : ''}" data-idx="${i}">
      ${p.image
        ? `<img class="pcard-img" src="${p.image}" alt="${p.name}" loading="lazy">`
        : `<div class="pcard-placeholder"><span>CPX</span></div>`}
      ${locked ? `<div class="pcard-lock">🔒 ${STATUS_LABEL[p.status] || 'Segera Hadir'}</div>` : ''}
      <div class="pcard-body">
        <div class="pcard-badge">${p.badge}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-price">${p.price}</div>
      </div>
    </div>
  `;
  }).join('');

  dotsWrap.innerHTML = PRODUCTS.map((_, i) =>
    `<div class="carousel-dot${i === activeIdx ? ' active' : ''}" data-idx="${i}"></div>`
  ).join('');

  function setActive(idx) {
    const prev = activeIdx;
    activeIdx = Math.max(0, Math.min(PRODUCTS.length - 1, idx));
    if (prev === activeIdx) return;

    outer.querySelectorAll('.pcard').forEach((c, i) => {
      const locked = PRODUCTS[i].status !== 'open';
      c.className = 'pcard ' + getClass(i) + (locked ? ' locked' : '');
    });
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  }

  // Click cards
  outer.querySelectorAll('.pcard').forEach((c, i) => {
    c.addEventListener('click', () => {
      if (i !== activeIdx) {
        setActive(i);
        return;
      }
      const p = PRODUCTS[i];
      if (!p || !p.id) return;
      if (p.status !== 'open') {
        c.classList.remove('shake');
        void c.offsetWidth;
        c.classList.add('shake');
        return;
      }
      window.location.href = 'product.html?id=' + p.id;
    });
  });

  // Click dots
  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.addEventListener('click', () => setActive(i));
  });

  // Touch swipe
  let tStart = 0;
  outer.addEventListener('touchstart', e => { tStart = e.touches[0].clientX; }, { passive: true });
  outer.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tStart;
    if (Math.abs(dx) > 36) dx < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
  }, { passive: true });

  // Mouse drag
  let mStart = 0, dragging = false;
  outer.addEventListener('mousedown', e => { dragging = true; mStart = e.clientX; });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    if (Math.abs(e.clientX - mStart) > 36) {
      dragging = false;
      e.clientX - mStart < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
    }
  });
  document.addEventListener('mouseup', () => { dragging = false; });
}


// ================================================================
// RENDER PRODUCT DETAIL (product.html) — DENGAN MULTIPLE IMAGES
// ================================================================
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProduct(id);

  if (!product) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:20px;background:#000;color:#fff;font-family:monospace;">
        <h1 style="font-size:3rem;color:#00ff00;">404</h1>
        <p>Jejak ini belum ditemukan. Mungkin masih dalam perjalanan.</p>
        <a href="index.html" style="color:#00ff00;text-decoration:underline;">← Balik ke Home</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} — CAPRUX`;

  // Breadcrumb
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = product.name;

  // ============================================================
  // GALLERY — support multiple images
  // ============================================================
  const images = product.images || [product.image];

  // Main image
  const mainImg = document.getElementById('mainImg');
  if (mainImg) {
    mainImg.src = images[0] || product.image;
    mainImg.alt = product.name;
  }

  const gTag = document.querySelector('.g-tag');
  if (gTag) gTag.textContent = `// CAPRUX · ${product.tag.replace('//', '').trim()}`;

  // Thumbs
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb, i) => {
    const img = thumb.querySelector('img');
    const imgSrc = images[i % images.length] || images[0] || product.image;
    if (img) {
      img.src = imgSrc;
      img.alt = product.name;
    }
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.onclick = function() { switchImg(this, imgSrc); };
  });

  // ============================================================
  // INFO
  // ============================================================
  const eyebrow = document.querySelector('.prod-eyebrow');
  if (eyebrow) eyebrow.textContent = product.tag;

  const nameEl = document.querySelector('.prod-name');
  if (nameEl) nameEl.innerHTML = product.name.replace(/ /g, '<br>');

  const typeEl = document.querySelector('.prod-type');
  if (typeEl) typeEl.textContent = product.type;

  const priceEl = document.querySelector('.price');
  if (priceEl) priceEl.textContent = product.price;

  const statusEl = document.querySelector('.status');
  if (statusEl) {
    statusEl.textContent = STATUS_LABEL[product.status] || product.status;
    statusEl.className = `status s-${product.status}`;
  }

  // CTA
  const ctaBtn = document.querySelector('.cta-block .btn-primary');
  if (ctaBtn) {
    if (product.status === 'open' && product.shopeeUrl) {
      ctaBtn.textContent = '🛒 Beli Sekarang di Shopee';
      ctaBtn.removeAttribute('disabled');
      ctaBtn.style.cursor = 'pointer';
      ctaBtn.onclick = function() { window.open(product.shopeeUrl, '_blank'); };
    } else if (product.status === 'sold') {
      ctaBtn.textContent = '— Stok Habis';
      ctaBtn.setAttribute('disabled', 'true');
    } else {
      ctaBtn.textContent = '🌿 Beritahu Saya — Segera Tiba';
      ctaBtn.setAttribute('disabled', 'true');
    }
  }

  // Sembunyikan notify block kalau produk sudah open
  const notifyBlock = document.querySelector('.notify-block');
  if (notifyBlock && product.status === 'open') {
    notifyBlock.style.display = 'none';
  }

  const descEl = document.querySelector('.prod-desc');
  if (descEl) descEl.innerHTML = product.fullDesc;

  // Specs
  const specsTbl = document.querySelector('.specs-tbl');
  if (specsTbl) {
    specsTbl.innerHTML = product.specs.map(s => `
      <tr><td>${s.label}</td><td>${s.value}</td></tr>
    `).join('');
  }

  // Details tabs
  const detailGrid = document.querySelector('#t1 .detail-grid');
  if (detailGrid) {
    detailGrid.innerHTML = product.details.map(d => `
      <div class="d-block">
        <div class="d-label">${d.title}</div>
        <ul>${d.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('');
  }

  // Size Guide
  const sgTbl = document.querySelector('.sg-tbl');
  if (sgTbl) {
    sgTbl.innerHTML = `
      <thead><tr>${product.sizeGuide.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${product.sizeGuide.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    `;
  }

  // Care
  const careGrid = document.querySelector('.care-grid');
  if (careGrid) {
    careGrid.innerHTML = product.care.map(c => `
      <div class="care">
        <div class="care-ico">${c.icon}</div>
        <div class="care-lbl">${c.label}</div>
        <div class="care-txt">${c.text}</div>
      </div>
    `).join('');
  }

  // Tags
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = product.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  // Related products
  const relatedProducts = getRelatedProducts(id);
  const relGrid = document.querySelector('.rel-grid');
  if (relGrid) {
    if (relatedProducts.length > 0) {
      relGrid.innerHTML = relatedProducts.map(p => {
        const locked = p.status !== 'open';
        const tag = locked ? 'div' : 'a';
        const hrefAttr = locked ? '' : `href="product.html?id=${p.id}"`;
        return `
        <${tag} ${hrefAttr} class="drop-card${locked ? ' locked' : ''}">
          <div class="dc-img"><img src="${p.image}" alt="${p.name}"></div>
          ${locked ? `<div class="pcard-lock">🔒 ${STATUS_LABEL[p.status] || 'Segera Hadir'}</div>` : ''}
          <div class="dc-body">
            <div class="dc-badge">${p.badge}</div>
            <div class="dc-name">${p.name}</div>
            <div class="dc-desc">${p.desc}</div>
            <div class="dc-foot">
              <span class="dc-price">${p.price}</span>
              <span class="status s-${p.status}">${STATUS_LABEL[p.status] || p.status}</span>
            </div>
          </div>
        </${tag}>
      `;
      }).join('');
    } else {
      relGrid.innerHTML = `<p style="color:var(--grey);padding:20px;">Tidak ada produk terkait.</p>`;
    }
  }
}

// ================================================================
// NAV MOBILE
// ================================================================
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (!m || !h) return;
  m.classList.toggle('open');
  h.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (m) m.classList.remove('open');
  if (h) h.classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// GALLERY — Switch gambar
// ================================================================
function switchImg(thumb, src) {
  const mainImg = document.getElementById('mainImg');
  if (!mainImg) return;
  mainImg.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ================================================================
// SIZE PICKER
// ================================================================
function pickSize(btn) {
  document.querySelectorAll('.sz').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ================================================================
// TAB SWITCHER
// ================================================================
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');
}

// ================================================================
// NOTIFY
// ================================================================
function handleNotify() {
  const input = document.getElementById('notifyEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    alert('Emailnya yang bener dulu ya 🙏');
    return;
  }
  const nameEl = document.querySelector('.prod-name');
  const productName = nameEl ? nameEl.textContent.trim() : 'produk';
  alert('Siap, ' + productName + ' — akan kami kabarkan saat tiba. Makasih sudah setia menunggu.');
  input.value = '';
}

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  // Load produk dari CSV dulu, lalu render
  loadAndRender();

  // Nav hamburger
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Nav scroll effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ==============================================================
  // HERO PARALLAX
  // ==============================================================
  (function heroParallax() {
    const hero = document.getElementById('home');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tier = window.__CPX_TIER || 'HIGH';
    if (!hero || reduceMotion || tier === 'LOW') return;

    const grid = hero.querySelector('.hero-grid');
    const scan = hero.querySelector('.hero-scan');
    const logo = hero.querySelector('.main-logo');
    const sub = hero.querySelector('.hero-sub');
    const actions = hero.querySelector('.hero-actions');
    const root = document.documentElement;

    let ticking = false;
    function updateScrollParallax() {
      const y = window.scrollY;
      const heroH = hero.offsetHeight || 1;
      const progress = Math.min(y / heroH, 1.4);
      if (grid) grid.style.setProperty('--px-grid', (progress * 40) + 'px');
      if (scan) scan.style.setProperty('--px-scan', (progress * 70) + 'px');
      if (logo) root.style.setProperty('--px-logo', (progress * 26) + 'px');
      if (sub) sub.style.setProperty('--px-sub', (progress * 14) + 'px');
      if (actions) actions.style.setProperty('--px-actions', (progress * 8) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateScrollParallax);
        ticking = true;
      }
    }, { passive: true });
    updateScrollParallax();

    if (logo && tier === 'HIGH' && window.matchMedia('(pointer: fine)').matches) {
      let rafId = null;
      hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          root.style.setProperty('--tilt-x', (relX * 8).toFixed(2) + 'deg');
          root.style.setProperty('--tilt-y', (-relY * 6).toFixed(2) + 'deg');
          rafId = null;
        });
      });
      hero.addEventListener('mouseleave', function() {
        root.style.setProperty('--tilt-x', '0deg');
        root.style.setProperty('--tilt-y', '0deg');
      });
    }
  })();

  // ==============================================================
  // SCROLL PROGRESS BAR
  // ==============================================================
  (function scrollProgressBar() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      bar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  // ==============================================================
  // CURSOR GLOW
  // ==============================================================
  (function cursorGlow() {
    const glow = document.getElementById('cursorGlow');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tier = window.__CPX_TIER || 'HIGH';
    if (!glow || reduceMotion || !window.matchMedia('(pointer: fine)').matches || tier !== 'HIGH') return;

    let targetX = -420, targetY = -420;
    let curX = -420, curY = -420;
    let active = false;

    window.addEventListener('mousemove', function(e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) { active = true; glow.classList.add('active'); }
    }, { passive: true });

    document.addEventListener('mouseleave', function() {
      active = false;
      glow.classList.remove('active');
    });

    function loop() {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      glow.style.setProperty('--cx', curX + 'px');
      glow.style.setProperty('--cy', curY + 'px');
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  })();

  // ==============================================================
  // SCROLL REVEAL
  // ==============================================================
  (function scrollReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    if (!targets.length) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function(el) { el.classList.add('in-view'); });
      return;
    }
    const io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function(el) { io.observe(el); });
  })();

  // ==============================================================
  // MAGNETIC TILT
  // ==============================================================
  (function tiltCards() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tier = window.__CPX_TIER || 'HIGH';
    if (reduceMotion || tier !== 'HIGH') return;

    function attachTilt(el, maxDeg, scaleVar) {
      let rafId = null;
      el.addEventListener('mousemove', function(e) {
        const rect = el.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          el.style.setProperty('--tilt-rx', (relX * maxDeg).toFixed(2) + 'deg');
          el.style.setProperty('--tilt-ry', (-relY * maxDeg).toFixed(2) + 'deg');
          if (scaleVar) el.style.setProperty(scaleVar, '1.025');
          rafId = null;
        });
      });
      el.addEventListener('mouseleave', function() {
        el.style.setProperty('--tilt-rx', '0deg');
        el.style.setProperty('--tilt-ry', '0deg');
        if (scaleVar) el.style.setProperty(scaleVar, '1');
      });
    }

    function initDropCardTilt() {
      document.querySelectorAll('.drop-card').forEach(function(card) {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = '1';
        attachTilt(card, 6, '--tilt-scale');
      });
    }
    initDropCardTilt();
    const relGrid = document.querySelector('.rel-grid');
    if (relGrid) {
      new MutationObserver(initDropCardTilt).observe(relGrid, { childList: true });
    }

    const aboutVisual = document.querySelector('.about-visual');
    if (aboutVisual) {
      let rafId = null;
      aboutVisual.addEventListener('mousemove', function(e) {
        const rect = aboutVisual.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        if (rafId) return;
        rafId = requestAnimationFrame(function() {
          aboutVisual.style.setProperty('--about-rx', (relX * 10).toFixed(2) + 'deg');
          aboutVisual.style.setProperty('--about-ry', (-relY * 8).toFixed(2) + 'deg');
          rafId = null;
        });
      });
      aboutVisual.addEventListener('mouseleave', function() {
        aboutVisual.style.setProperty('--about-rx', '0deg');
        aboutVisual.style.setProperty('--about-ry', '0deg');
      });
    }
  })();

  // ==============================================================
  // ABOUT LOGO TOUCH-GLOW
  // ==============================================================
  (function aboutLogoTouchGlow() {
    const aboutLogo = document.querySelector('.about-logo-float');
    if (!aboutLogo) return;
    aboutLogo.addEventListener('touchstart', function() {
      aboutLogo.classList.add('touched');
    }, { passive: true });
    aboutLogo.addEventListener('touchend', function() {
      aboutLogo.classList.remove('touched');
    }, { passive: true });
    aboutLogo.addEventListener('touchcancel', function() {
      aboutLogo.classList.remove('touched');
    }, { passive: true });
  })();

  // ==============================================================
  // PHILOSOPHY PARALLAX
  // ==============================================================
  (function philosophyParallax() {
    const phil = document.querySelector('.about-phil-banner');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tier = window.__CPX_TIER || 'HIGH';
    if (!phil || reduceMotion || tier === 'LOW') return;
    let ticking = false;
    function update() {
      const rect = phil.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centered = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = Math.max(-1, Math.min(1, -centered)) * 44;
      phil.style.setProperty('--phil-px', offset.toFixed(1) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  // ==============================================================
  // MARQUEE SKEW
  // ==============================================================
  (function marqueeSkew() {
    const strip = document.querySelector('.marquee-strip');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tier = window.__CPX_TIER || 'HIGH';
    if (!strip || reduceMotion || tier !== 'HIGH') return;
    let lastY = window.scrollY;
    let ticking = false;
    let resetTimer = null;
    window.addEventListener('scroll', function() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        const y = window.scrollY;
        const delta = y - lastY;
        lastY = y;
        const skew = Math.max(-3.5, Math.min(3.5, delta * 0.25));
        strip.style.setProperty('--marquee-skew', skew.toFixed(2) + 'deg');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function() {
          strip.style.setProperty('--marquee-skew', '0deg');
        }, 180);
        ticking = false;
      });
    }, { passive: true });
  })();

  // Close mobile menu on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeMenu();
  });

  // ==============================================================
  // VISITOR COUNTER
  // ==============================================================
  (function() {
    var numEl  = document.getElementById('visitorCount');
    var noteEl = document.getElementById('visitorNote');
    if (!numEl) return;

    var KEY = 'caprux-id_visitor-total-2025';

    numEl.classList.add('loading');

    fetch('https://countapi.mileshilliard.com/api/v1/hit/' + KEY)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var raw = data && (data.value !== undefined ? data.value : null);
        var val = (raw !== null) ? parseInt(raw, 10) : NaN;

        if (!isNaN(val)) {
          numEl.classList.remove('loading');

          var start = Math.max(0, val - Math.min(val, 60));
          var step  = 16;
          var steps = Math.ceil(900 / step);
          var inc   = (val - start) / steps;
          var cur   = start;
          var timer = setInterval(function() {
            cur += inc;
            if (cur >= val) { cur = val; clearInterval(timer); }
            numEl.textContent = Math.floor(cur).toLocaleString('id-ID');
          }, step);

          if (noteEl) noteEl.textContent = 'Terhitung sejak website diluncurkan · real-time';
        } else {
          numEl.classList.remove('loading');
          numEl.textContent = '—';
          if (noteEl) noteEl.textContent = 'Data tidak tersedia saat ini';
        }
      })
      .catch(function() {
        numEl.classList.remove('loading');
        numEl.textContent = '—';
        if (noteEl) noteEl.textContent = 'Gagal memuat data pengunjung';
      });
  })();

  // ==============================================================
  // FOREST INTRO
  // ==============================================================
  (function() {
    var overlay = document.getElementById('introOverlay');
    var skipBtn = document.getElementById('introSkip');
    var tier = window.__CPX_TIER || 'HIGH';
    var seen = false;
    try { seen = !!sessionStorage.getItem('cpx_intro_seen'); } catch(e) {}
    if (seen || tier === 'LOW' || tier === 'MID') {
      if (overlay) { overlay.style.display = 'none'; overlay.remove(); }
      return;
    }
    try { sessionStorage.setItem('cpx_intro_seen', '1'); } catch(e) {}

    var cnv = document.getElementById('introCanvas');
    if (!overlay || !cnv) return;
    var ctx = cnv.getContext('2d');
    var dismissed = false;
    var startTime = Date.now();
    var totalDur = 3600; // Lebih panjang — beri waktu hutan bernafas

    function resize() { cnv.width = overlay.offsetWidth; cnv.height = overlay.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    var particles = [];
    var W, H;
    function initParticles() {
      W = cnv.width; H = cnv.height;
      particles = [];
      // Lebih sedikit partikel, lebih lambat — seperti spora/kunang-kunang di hutan
      var count = Math.min(40, Math.floor(W * H / 18000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: H * 0.3 + Math.random() * H * 0.7,
          r: 0.6 + Math.random() * 1.8,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -(0.1 + Math.random() * 0.35),
          alpha: 0.15 + Math.random() * 0.45,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.015, // lebih lambat
          hue: 108 + Math.floor(Math.random() * 30)  // hijau ke kuning-hijau
        });
      }
    }
    initParticles();
    window.addEventListener('resize', initParticles);

    function drawForestSilhouette(w, h) {
      ctx.save();
      ctx.globalAlpha = 0.12;
      var drawTree = function(x, baseY, trunkH, trunkW, layerCount, spread) {
        ctx.fillStyle = '#0d2e14';
        ctx.fillRect(x - trunkW/2, baseY - trunkH, trunkW, trunkH);
        for (var l = 0; l < layerCount; l++) {
          var ly = baseY - trunkH * 0.4 - l * (trunkH * 0.22);
          var lw = spread * (1 - l * 0.18);
          ctx.beginPath();
          ctx.moveTo(x, ly - lw * 0.9);
          ctx.lineTo(x + lw, ly + lw * 0.4);
          ctx.lineTo(x - lw, ly + lw * 0.4);
          ctx.closePath();
          ctx.fillStyle = l % 2 === 0 ? '#0f3416' : '#0d2a12';
          ctx.fill();
        }
      };
      drawTree(w * 0.06, h, h * 0.7, 14, 4, w * 0.09);
      drawTree(w * 0.15, h, h * 0.55, 10, 3, w * 0.07);
      drawTree(w * 0.94, h, h * 0.65, 12, 4, w * 0.085);
      drawTree(w * 0.86, h, h * 0.5, 9, 3, w * 0.065);
      ctx.restore();
    }

    var rafId = null;
    // Partikel cahaya hutan — lebih lambat, lebih organik
    function loop() {
      if (dismissed) return;
      W = cnv.width; H = cnv.height;
      ctx.clearRect(0, 0, W, H);

      // Latar: gradien tanah ke cahaya
      var grad = ctx.createRadialGradient(W/2, H * 0.85, 0, W/2, H * 0.3, H * 0.75);
      grad.addColorStop(0, 'rgba(8,38,14,.18)');
      grad.addColorStop(0.5, 'rgba(5,22,9,.08)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      drawForestSilhouette(W, H);

      var elapsed = Date.now() - startTime;
      var progress = Math.min(elapsed / totalDur, 1);
      particles.forEach(function(p) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        var glow = Math.sin(p.pulse) * 0.3;
        if (p.y < -10) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 5;
        if (p.x > W + 10) p.x = -5;

        var finalAlpha = p.alpha * (0.5 + glow) * progress;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(' + p.hue + ',80%,65%,' + finalAlpha + ')';
        ctx.fill();

        if (p.r > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'hsla(' + p.hue + ',70%,55%,' + (finalAlpha * 0.15) + ')';
          ctx.fill();
        }
      });

      rafId = requestAnimationFrame(loop);
    }
    loop();

    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      if (rafId) cancelAnimationFrame(rafId);
      overlay.classList.add('fade-out');
      setTimeout(function() { overlay.remove(); }, 800);
    }

    setTimeout(dismiss, totalDur);
    if (skipBtn) skipBtn.addEventListener('click', dismiss);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) dismiss();
    });
  })();
});

// ==============================================================
// AMBIENT FOREST AUDIO (Kesunyian Hutan — Suara Bumi)
// Berlaku di semua halaman (index.html & product.html)
// Layered: hutan + burung + angin
// ==============================================================
(function initForestAudio() {
  var tier = window.__CPX_TIER || 'HIGH';

  // Sumber suara — file lokal
  var FOREST_SOURCES = [
    'hutan.mp3'
  ];

  function createLayer(src, vol) {
    var a = document.createElement('audio');
    a.loop = true;
    a.src = src;
    a.volume = vol;
    a.style.display = 'none';
    a.preload = 'none';
    document.body.appendChild(a);
    return a;
  }

  // Layer utama: suara hutan (burung + serangga + air)
  var mainAudio = document.getElementById('forestAmbientGlobal');
  if (!mainAudio) {
    mainAudio = createLayer(FOREST_SOURCES[0], 0);
    mainAudio.id = 'forestAmbientGlobal';
  }

  // Wind layer dinonaktifkan — cukup 1 layer dari hutan.mp3
  var windAudio = null;

  var isPlaying = false;

  function fadeIn(audio, targetVol, dur) {
    if (!audio) return;
    var step = targetVol / (dur / 80);
    var cur = 0;
    var iv = setInterval(function() {
      cur = Math.min(targetVol, cur + step);
      audio.volume = cur;
      if (cur >= targetVol) clearInterval(iv);
    }, 80);
  }

  function playAll() {
    if (isPlaying) return;
    isPlaying = true;
    document.removeEventListener('click', playAll);
    document.removeEventListener('touchstart', playAll);

    // Play main forest audio — fade ke 0.28 dalam 3 detik
    mainAudio.play().then(function() {
      fadeIn(mainAudio, 0.28, 3000);
    }).catch(function() {
      isPlaying = false;
    });

    // Play wind layer (lebih pelan, delay 1s)
    if (windAudio) {
      setTimeout(function() {
        windAudio.play().then(function() {
          fadeIn(windAudio, 0.12, 4000);
        }).catch(function() {});
      }, 1200);
    }
  }

  // Tunggu interaksi pertama (aturan browser)
  document.addEventListener('click', playAll, { passive: true });
  document.addEventListener('touchstart', playAll, { passive: true });

  // Pause semua saat tab tersembunyi, resume saat kembali
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (mainAudio) mainAudio.pause();
      if (windAudio) windAudio.pause();
    } else if (isPlaying) {
      if (mainAudio) mainAudio.play().catch(function(){});
      if (windAudio) windAudio.play().catch(function(){});
    }
  });
})();