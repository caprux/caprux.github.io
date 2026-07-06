# CAPRUX — Official Website

![CAPRUX](https://caprux.github.io/logo_text_putih.png)

**Doing the Impossible, with GOD's Help**

Website resmi **CAPRUX**, brand streetwear pria berbasis di Baleendah, Kabupaten Bandung, Jawa Barat. Dibangun dan di-hosting dengan GitHub Pages di [caprux.github.io](https://caprux.github.io).

---

## 🧭 Tentang CAPRUX

CAPRUX lahir dari kamar sempit, kepala penuh ide, dan semangat *urang Bandung resep heureuy*. Nama **CAPRUX** diambil dari kata Sunda *capruk* — kacau, tidak terduga — yang justru dijadikan titik awal, bukan aib.

Tiga nilai inti brand:

- **NEKAT** — meski tanpa skill, percaya semua bisa dipelajari sambil jalan.
- **BERANI** — lawan rasa takut, siap menanggung risiko kalau gagal.
- **YAKIN** — takdir bisa berubah kalau usaha dibarengi doa.

Filosofi produksi: *Meaningful Chaos* — berbeda karena punya arah, bukan asal beda.

---

## 🗂️ Struktur Proyek

```
├── index.html                  # Landing page (hero, about, products, contact)
├── style.css                   # Styling utama (tema neon-cyberpunk dark)
├── script.js                   # Animasi intro, carousel, visitor counter, dsb.
├── caprux.css                  # Stylesheet bersama untuk halaman produk
├── caprux.js                   # Logic bersama untuk halaman produk
├── products/
│   ├── cpx-ko-001.html         # The Tropical Soul — kaos oblong
│   ├── cpx-jk-002.html         # The Wind Blocker — jaket crincle
│   └── cpx-cp-003.html         # The Short Circuit — celana pendek
├── assets/
│   ├── logo_text_putih.png
│   ├── LOGO_TRANSPARAN_HITAM.png
│   └── LOGO_TRANSPARAN_PUTIH.png
└── README.md
```

> Struktur folder dapat menyesuaikan dengan kondisi repo aktual — silakan sesuaikan path di atas jika berbeda.

---

## ✨ Fitur Utama

- **Intro animation** — efek neon lightning saat halaman pertama kali dibuka.
- **Horizontal product carousel** dengan spring easing.
- **Sistem produk modular** — tiap produk memiliki halaman HTML sendiri dengan data JSON tertanam, memudahkan penambahan produk baru tanpa mengubah struktur inti.
- **Real-time visitor counter** menggunakan [CountAPI](https://countapi.mileshilliard.com).
- **Live chat** terintegrasi via Tawk.to.
- **Desain responsif**, mobile-first.
- Tema visual **dark neon-green cyberpunk**, dengan font Orbitron, Rajdhani, Exo 2, dan Share Tech Mono.

---

## 🎨 Design System

| Elemen | Detail |
|---|---|
| Warna utama | `--green` (neon green) di atas latar gelap |
| Font display | Orbitron, Rajdhani |
| Font body/mono | Exo 2, Share Tech Mono |
| Label produk | Woven hem label neon green `#00FF00`, logo dada polyflex putih 3D |
| Gaya komunikasi | Gaul, beriman, gila — youthful namun berakar spiritual |

---

## 🛍️ Produk

Setiap produk menggunakan format kode: `CPX-[TYPE]-[NUMBER]`

| Kode | Nama | Tipe |
|---|---|---|
| CPX-KO-001 | The Tropical Soul | Kaos Oblong |
| CPX-JK-002 | The Wind Blocker | Jaket Crincle |
| CPX-CP-003 | The Short Circuit | Celana Pendek |

Lini nama produk mengikuti tema geografi Indonesia: *Tropical Soul, Volcanic Soul, Archipelago Soul, Summit Soul, Nomadic Soul, Strata Soul, Terrace Soul, Delta Soul.*

---

## 🚀 Menjalankan Secara Lokal

Karena situs ini adalah situs statis (HTML/CSS/JS murni tanpa build step), cukup:

```bash
git clone https://github.com/caprux/caprux.github.io.git
cd caprux.github.io
```

Lalu buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
python3 -m http.server 8000
```

Akses di `http://localhost:8000`.

---

## 🌐 Deployment

Situs ini di-deploy otomatis melalui **GitHub Pages** dari branch utama repository `caprux.github.io`, dengan domain kustom **caprux.id**.

---

## 📇 Kontak & Sosial Media

- Instagram: [@caprux.id](https://instagram.com/caprux.id)
- TikTok: [@caprux.id](https://www.tiktok.com/@caprux.id)
- Shopee: [caprux.id](https://www.shopee.co.id/caprux.id)
- Facebook: [CAPRUX](https://www.facebook.com/profile.php?id=61570786385157)

---

## 📄 Lisensi

© 2024–2026 CAPRUX. Seluruh hak cipta konten, desain, dan aset brand dilindungi. Kode sumber website ini dapat dijadikan referensi pembelajaran non-komersial kecuali dinyatakan lain oleh pemilik brand.

---

*Made in Jawabarat · Powered by ENF*
