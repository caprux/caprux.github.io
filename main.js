/* ═══════════════════════════════════════════════════════════
   CAPRUX — main.js
   ✏️ Tambah produk baru di array PRODUCTS di bawah
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   ✏️ DATA PRODUK — Edit / tambah produk di sini
   ───────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id:     'kaos-oblong',
    name:   'THE TROPICAL SOUL',
    badge:  '// Micro Cotton Danbowl',
    desc:   'Polyflex 3D logo silicon 1mm.',
    price:  'Rp 189.000',
    status: 'soon',                        // 'soon' | 'open' | 'sold'
    image:  'Kaos_Oblong_CAPRUX.png'
  },
  {
    id:     'jaket-crincle',
    name:   'THE WIND BLOCKER',
    badge:  '// Parasut Crincle',
    desc:   'Model Gunung. Bahan Sporty.',
    price:  'Rp 289.750',
    status: 'soon',
    image:  'Jaket_Crincle_CAPRUX.png'
  },
  {
    id:     'celana-pendek',
    name:   'NILON RIPSTOP',
    badge:  '// The Short Circuit',
    desc:   'For men only. No Boti.',
    price:  'Rp 239.750',
    status: 'soon',
    image:  'Celana_Pendek_CAPRUX.png'
  }
  /* ✏️ TAMBAH PRODUK BARU DI SINI — copy blok di bawah:
  ,{
    id:     'nama-file-html',
    name:   'NAMA PRODUK',
    badge:  '// Bahan',
    desc:   'Deskripsi singkat.',
    price:  'Rp 000.000',
    status: 'soon',
    image:  'nama_gambar.png'
  }
  */
];

/* ─────────────────────────────────────────────────────────
   STATUS MAP — terjemahan status ke label
   ───────────────────────────────────────────────────────── */
const STATUS_LABEL = {
  soon: 'Coming Soon',
  open: 'Tersedia',
  sold: 'Habis'
};

/* ─────────────────────────────────────────────────────────
   RENDER PRODUCT GRID
   ───────────────────────────────────────────────────────── */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <a href="${p.id}.html" class="drop-card reveal">
      <div class="drop-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      </div>
      <div class="drop-body">
        <div class="drop-badge">${p.badge}</div>
        <div class="drop-name">${p.name}</div>
        <div class="drop-desc">${p.desc}</div>
        <div class="drop-foot">
          <span class="drop-price">${p.price}</span>
          <span class="drop-status s-${p.status}">${STATUS_LABEL[p.status] || p.status}</span>
        </div>
      </div>
    </a>
  `).join('');
}

/* ─────────────────────────────────────────────────────────
   NAV MOBILE
   ───────────────────────────────────────────────────────── */
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
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

/* ─────────────────────────────────────────────────────────
   NAV SCROLL STATE
   ───────────────────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   CURSOR GLOW EFFECT
   ───────────────────────────────────────────────────────── */
function initCursorGlow() {
  // Only on desktop
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const el = document.createElement('div');
  el.className = 'cursor-glow';
  document.body.appendChild(el);
  window.addEventListener('mousemove', e => {
    el.style.left = e.clientX + 'px';
    el.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver
   ───────────────────────────────────────────────────────── */
function initReveal() {
  // Mark static elements for reveal
  const targets = document.querySelectorAll(
    '.ep-card, .val, .about-body, .c-link, .drops-header, .sec-title'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 4 === 1) el.classList.add('reveal-delay-1');
    if (i % 4 === 2) el.classList.add('reveal-delay-2');
    if (i % 4 === 3) el.classList.add('reveal-delay-3');
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────────────────────
   GLITCH TEXT — random glitch pada hero sub
   ───────────────────────────────────────────────────────── */
function initGlitchText() {
  const el = document.querySelector('.hero-mantra');
  if (!el) return;
  const original = el.textContent;
  const chars = '!<>-_\\/[]{}—=+*^?#XILOGY01';
  let timeoutId;

  function glitch() {
    let iteration = 0;
    clearInterval(el._glitchInterval);
    el._glitchInterval = setInterval(() => {
      el.textContent = original
        .split('')
        .map((ch, i) => {
          if (i < iteration) return original[i];
          if (ch === ' ' || ch === '/') return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if (iteration >= original.length) {
        clearInterval(el._glitchInterval);
        el.textContent = original;
      }
      iteration += 2;
    }, 28);
  }

  // Trigger every 6 seconds
  glitch();
  timeoutId = setInterval(glitch, 6000);
}

/* ─────────────────────────────────────────────────────────
   COUNTER — angka teks bertambah saat terlihat (untuk stats)
   ───────────────────────────────────────────────────────── */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        let current = 0;
        const step = Math.ceil(target / 40);
        const t = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current >= target) clearInterval(t);
        }, 30);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────────────────────
   INIT — jalankan semua saat DOM siap
   ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initNavScroll();
  initCursorGlow();
  initReveal();
  initGlitchText();
  initCounters();
});
