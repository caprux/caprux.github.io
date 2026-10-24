// ================================================================
// CAPRUX — script.js v23 "SIMPLE BACKGROUND PARALLAX"
// ================================================================

let PRODUCTS = [];

const STATUS_LABEL = {
  soon: '◇ UNDISCOVERED',
  open: '◢ FOUND',
  sold: '✕ GONE'
};

function loadAndRender() {
  const isProductPage = window.location.pathname.includes('product.html');
  if (window.CAPRUX_DATA) {
    window.CAPRUX_DATA.loadProducts()
      .then(function(products) {
        PRODUCTS = products;
        if (isProductPage) renderProductDetail();
        else renderProducts();
      })
      .catch(function(err) {
        console.warn('[CAPRUX] Gagal load CSV.', err);
      });
  }
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
function getRelatedProducts(id) {
  const product = getProduct(id);
  if (!product) return [];
  return PRODUCTS.filter(p => p.id !== id).slice(0, 4);
}

// ── RENDER PRODUCTS (ARTIFACTS) ──
function renderProducts() {
  const outer = document.getElementById('productCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  if (!outer || !dotsWrap) return;

  let activeIdx = 0;

  function getClass(i) {
    const d = i - activeIdx;
    if (d === 0) return 'active';
    if (d === 1 || d === -1) return 'side';
    return 'far';
  }

  outer.innerHTML = PRODUCTS.map((p, i) => {
    const locked = p.status !== 'open';
    return `
    <div class="pcard ${getClass(i)}${locked ? ' locked' : ''}" data-idx="${i}">
      ${p.image
        ? `<img class="pcard-img" src="${p.image}" alt="${p.name}" loading="lazy">`
        : `<div class="pcard-placeholder">CPX</div>`}
      ${locked ? `<div class="pcard-lock">${STATUS_LABEL[p.status] || '◇ UNDISCOVERED'}</div>` : ''}
      <div class="pcard-body">
        <div class="pcard-badge">// ARTEFAK #${String(i+1).padStart(3, '0')}</div>
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
    if (idx < 0 || idx >= PRODUCTS.length) return;
    activeIdx = idx;
    outer.querySelectorAll('.pcard').forEach((c, i) => {
      const locked = PRODUCTS[i].status !== 'open';
      c.className = 'pcard ' + getClass(i) + (locked ? ' locked' : '');
    });
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  }

  outer.querySelectorAll('.pcard').forEach((c, i) => {
    c.addEventListener('click', () => {
      if (i !== activeIdx) { setActive(i); return; }
      const p = PRODUCTS[i];
      if (!p || !p.id) return;
      if (p.status !== 'open') {
        c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
        return;
      }
      window.location.href = 'product.html?id=' + p.id;
    });
  });

  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.addEventListener('click', () => setActive(i));
  });

  let tStart = 0;
  outer.addEventListener('touchstart', e => { tStart = e.touches[0].clientX; }, { passive: true });
  outer.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tStart;
    if (Math.abs(dx) > 36) dx < 0 ? setActive(activeIdx + 1) : setActive(activeIdx - 1);
  }, { passive: true });
}

// ── RENDER PRODUCT DETAIL ──
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProduct(id);

  if (!product) {
    document.querySelector('.product-page').innerHTML = `<div style="text-align:center;padding:100px 0;"><h1 style="font-size:4rem;color:var(--green);">404</h1><p>Artefak tidak ditemukan.</p><a href="index.html" style="color:var(--green);">← Kembali</a></div>`;
    return;
  }

  document.title = `${product.name} — CAPRUX`;
  const bcCur = document.querySelector('.bc-cur');
  if (bcCur) bcCur.textContent = `ARTEFAK #${product.id}`;

  const images = product.images && product.images.length ? product.images : [product.image];
  const mainImg = document.getElementById('mainImg');
  if (mainImg) { mainImg.src = images[0]; mainImg.alt = product.name; }

  const nameEl = document.querySelector('.prod-name');
  if (nameEl) nameEl.innerHTML = product.name.replace(/ /g, '<br>');
  const priceEl = document.querySelector('.price');
  if (priceEl) priceEl.textContent = product.price;

  const statusEl = document.querySelector('.status');
  if (statusEl) {
    statusEl.textContent = STATUS_LABEL[product.status] || product.status;
    statusEl.className = `status s-${product.status}`;
  }

  const ctaBtn = document.querySelector('.cta-block .btn-primary');
  if (ctaBtn) {
    if (product.status === 'open' && product.shopeeUrl) {
      ctaBtn.textContent = '🛒 Beli Sekarang';
      ctaBtn.removeAttribute('disabled');
      ctaBtn.onclick = () => window.open(product.shopeeUrl, '_blank');
    } else {
      ctaBtn.textContent = `${STATUS_LABEL[product.status]} — Segera Tiba`;
      ctaBtn.setAttribute('disabled', 'true');
    }
  }

  const descEl = document.querySelector('.prod-desc');
  if (descEl) descEl.innerHTML = product.desc;

  const relGrid = document.querySelector('.rel-grid');
  if (relGrid) {
    const related = getRelatedProducts(id);
    relGrid.innerHTML = related.map(p => {
      const locked = p.status !== 'open';
      return `
        <a href="${locked ? '#' : 'product.html?id='+p.id}" class="drop-card ${locked ? 'locked' : ''}">
          <div class="dc-img"><img src="${p.image}" alt="${p.name}"></div>
          <div class="dc-body">
            <div class="dc-badge">// ${p.type}</div>
            <div class="dc-name">${p.name}</div>
            <div class="dc-foot"><span class="dc-price">${p.price}</span></div>
          </div>
        </a>
      `;
    }).join('');
  }
}

// ── UTILS ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', function() {
  loadAndRender();

  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', toggleMenu);

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    updateScrollProgress();
  }, { passive: true });

  // ==============================================================
  // BACKGROUND POSITION PARALLAX (SUPER SIMPLE & COMPATIBLE)
  // ==============================================================
  const parallaxLayers = {
    1: document.querySelector('.l-1'),
    2: document.querySelector('.l-2'),
    3: document.querySelector('.l-3'),
    4: document.querySelector('.l-4'),
    5: document.querySelector('.l-5'),
    6: document.querySelector('.l-6'),
    7: document.querySelector('.l-7')
  };

  let ticking = false;

  function updateParallax() {
    const y = window.scrollY;
    
    // Mengubah posisi background, bukan transform
    // Angka 0.1 sampai 0.8 menentukan kecepatan (semakin besar semakin cepat)
    if (parallaxLayers[1]) parallaxLayers[1].style.backgroundPositionY = `calc(0% + ${y * 0.1}px)`;
    if (parallaxLayers[2]) parallaxLayers[2].style.backgroundPositionY = `calc(0% + ${y * 0.2}px)`;
    if (parallaxLayers[3]) parallaxLayers[3].style.backgroundPositionY = `calc(0% + ${y * 0.35}px)`;
    if (parallaxLayers[4]) parallaxLayers[4].style.backgroundPositionY = `calc(0% + ${y * 0.5}px)`;
    if (parallaxLayers[5]) parallaxLayers[5].style.backgroundPositionY = `calc(0% + ${y * 0.65}px)`;
    
    // Layer 6 dan 7 (Tanah) menggunakan bottom center, jadi kita geser sedikit saja agar tidak naik meninggalkan layar
    if (parallaxLayers[6]) parallaxLayers[6].style.backgroundPositionY = `calc(100% + ${y * 0.8}px)`;
    if (parallaxLayers[7]) parallaxLayers[7].style.backgroundPositionY = `calc(100% + ${y * 1.0}px)`;

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  
  // Panggil sekali saat load
  updateParallax();

  // ── SCROLL PROGRESS ──
  function updateScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    const doc = document.documentElement;
    const max = (doc.scrollHeight - doc.clientHeight) || 1;
    const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    bar.style.width = pct + '%';
  }
  updateScrollProgress();

  // ── REVEAL ANIMATION ──
  const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in-view'));
  }

  // ── VISITOR COUNTER ──
  const numEl = document.getElementById('visitorCount');
  if (numEl) {
    fetch('https://countapi.mileshilliard.com/api/v1/hit/caprux-id_visitor-total-2025')
      .then(r => r.json())
      .then(data => {
        const val = data.value || 0;
        numEl.textContent = val.toLocaleString('id-ID');
        document.getElementById('visitorNote').textContent = 'Transmisi diterima · real-time';
      })
      .catch(() => {
        numEl.textContent = '—';
        document.getElementById('visitorNote').textContent = 'Sinyal terputus';
      });
  }
});
