# CAPRUX — Official Website

![CAPRUX](https://caprux.github.io/logo_text_putih.png)

**Doing the Impossible, with GOD's Help**

Website resmi **CAPRUX**, entitas dari seorang pria yang tinggal di Baleendah, Kabupaten Bandung, Jawa Barat.


## 🧭 Tentang CAPRUX

CAPRUX bukan nama sebuah brand, bukan kata ganti dari bahas sunda capruk  yang biar keren di ganti caprux, bukan juga symbol kekacauan, carpux adalah jiwa yang harus dimiliki semua orang saat mereka merasa hidup tapi tidak hidup.
CAPRUX singkatan dari kata yang terdengar aneh namun bisa mengubah dari lumpur, tumbuh, berakar kuat, memberi manfaat dan terbang.

Nilai inti brand:

C - Consciousness / Kesadaran
A - Abundance / Berkelimpahan
P - Power / Kekuatan
R - Resonance / Memancar
U - Unlimited / Melimpah
X - X / XXX

Dan mempunyai arti "sadar diri bahwa kita aslinya dari tuhan sudah di beri kelimpahan, dan mempunyai kekuatan untuk memancarkan kebahagiaan, keuangan, cinta dan semua hal baik yang tidak terbatas dengan cara yang tidak perlu ada yang tau karena yang terjadi semua mau tuhan"


## 🗂 Struktur Website

| Urutan di Home | Halaman penuh |
|---|---|
| 01 Hero | - |
| 02 Lore (kenapa CAPRUX) | - |
| 03 Story of Hero | `cerita.html` (daftar) → `baca.html?id=001` (baca) |
| 04 Podcast · Nobody Sound | `nobody-sound.html` |
| 05 Artefak (produk) | `produk.html` (semua) → `product.html?id=...` (detail) |
| 06 Signal (sosmed) | hanya di Home |

Nav, menu HP, dan footer dibuat dari satu tempat: bagian `SITE` di paling atas `script.js`.

## ✍️ Menambah cerita (Story of Hero)

1. Tulis di Word, **Save As → .docx** (bukan .doc).
2. Beri nama: `story_001_judul cerita.docx` (angka = urutan, sisanya = judul yang tampil).
3. Upload ke folder `stories/` di GitHub → tunggu ± 1 menit → tayang.

Menghapus atau mengganti file Word juga otomatis memperbarui website.
Aturan tulis di Word: Heading 1/2/3 jadi judul bab, `***` di baris sendiri jadi pemisah adegan, tebal/miring ikut terbawa.
Jangan edit isi `stories/html`, `stories/img`, dan `stories/stories.json` — itu dibuat otomatis.

## 🎙 Menambah produk / tamu podcast

Isi `products.csv` dan `nobody-sound.csv` (pemisah titik koma `;`).

## 📄 Lisensi

© 2024–2026 CAPRUX. Seluruh hak cipta konten, desain, dan aset brand dilindungi. Kode sumber website ini dapat dijadikan referensi pembelajaran non-komersial kecuali dinyatakan lain oleh pemilik brand.

---

*Powered by ENF*
