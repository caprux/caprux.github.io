/* ══════════════════════════════════════════
   CAPRUX — product.js
   Dipakai oleh SEMUA halaman produk.
══════════════════════════════════════════ */

// Nav mobile
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  const h=document.getElementById('hamburger');
  m.classList.toggle('open');
  h.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow='';
}
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu()});

// Gallery thumbnail switcher
function switchImg(thumb, src){
  document.getElementById('mainImg').src=src;
  document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));
  thumb.classList.add('active');
}

// Size picker
function pickSize(btn){
  document.querySelectorAll('.sz').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// Tab switcher
function switchTab(btn, tabId){
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Notify email
function handleNotify(productName){
  const input=document.getElementById('notifyEmail');
  const email=input.value.trim();
  if(!email||!email.includes('@')){
    alert('Masukkan email yang valid ya 🙏');
    return;
  }
  // TODO: sambungkan ke Mailchimp / Google Form / backend
  alert('Siap! Kamu akan dapat notif saat "'+productName+'" tersedia.\nبسم الله — terima kasih sudah menunggu.');
  input.value='';
}
