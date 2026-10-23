# HireLoop React — source lengkap

Ekspor desain HireLoop B2C terbaru tanggal 23 Oktober 2026. React + Vite, JSX per section, CSS responsif, seluruh gambar WebP, logo, font lokal, QR ilustrasi, serta animasi/transisi disertakan. Tidak membutuhkan akun Sites, koneksi ChatGPT, API key, atau layanan gambar eksternal untuk menjalankan frontend.

## Jalankan lokal

Gunakan Node.js 22.12+ atau Node.js 24 dan npm.

```bash
npm ci
npm run dev
```

Buka URL yang muncul di terminal. Jangan membuka index.html melalui file://.

## Build dan upload ke server

```bash
npm ci
npm run build
npm run preview
```

Upload **isi folder dist/** ke document root domain/subdomain, misalnya public_html/. File ZIP ini juga menyertakan dist/ hasil build yang sudah diuji sehingga dapat langsung diunggah. Node.js hanya diperlukan pada saat development/build; server produksi cukup melayani file statis melalui HTTPS.

Paket menggunakan path dari root domain (/assets/, /interactions.js, dan /untuk-perusahaan/). Pasang pada root domain/subdomain. Pemasangan di subfolder memerlukan perubahan seluruh URL absolut, konfigurasi base Vite, serta tautan aset dan script; mengubah base saja belum cukup.

## Struktur dan titik edit

- src/App.jsx: susunan section dan inisialisasi interaksi setelah React mount.
- src/components/: komponen JSX untuk navbar, hero, fokus/USP, manfaat, industri, lowongan, langkah, aplikasi, FAQ, footer, dan overlay.
- src/styles/base.css: styling awal dari desain.
- src/styles/refinement.css: tampilan terbaru; termasuk parallax, teks highlight, sticky stacked cards, serta background lima profesional.
- public/animations.js: pengendali animasi scroll/IntersectionObserver/rAF. Dimuat setelah DOM React selesai dibuat.
- public/interactions.js: data lowongan contoh, pencarian/filter, modal detail, share, modal daftar/masuk dan panduan.
- public/assets/: semua foto, logo, font WOFF2, dan credits.json.
- public/untuk-perusahaan/index.html: halaman B2B bawaan dalam HTML yang dipertahankan apa adanya agar tautan tetap berjalan. B2C sudah berupa JSX React.
- dist/: hasil build siap upload.
- deploy/: contoh konfigurasi server.

Animasi dan interaksi lama dipertahankan sebagai pengendali DOM agar gerakan identik dengan desain yang sudah disetujui. Layout B2C berupa komponen React, bukan iframe atau HTML satu halaman yang disisipkan. Jangan menambahkan React StrictMode tanpa terlebih dahulu memberi cleanup/unmount pada seluruh listener, observer, dan loop animasi. Hindari merender ulang DOM anak yang dikelola pengendali interaksi (jobs, tabs, modalbody, teks animasi) sampai logikanya dipindahkan ke state React.

## Animasi yang dibawa

- Entrance hero, masked heading, zoom foto, dan navbar glass.
- Highlight teks mengikuti arah scroll.
- Background foto handshake dengan damped parallax.
- Section cara kerja sticky: empat kartu menumpuk lalu melepas ke section berikutnya.
- Background lima profesional full width di belakang judul dan kartu.
- Footer foto meeting, parallax, masked title, rolling label tombol.
- Fallback prefers-reduced-motion dan layar pendek tetap tersedia.

## Backend dan status fitur

Ini frontend desain, bukan sistem rekrutmen production. Data lowongan masih contoh. Form daftar/masuk, OTP, pengiriman lamaran, generate CV, kontrak, notifikasi, dan data kandidat belum dihubungkan ke backend. Modal menjelaskan status demo tersebut. Ganti data/aksi pada public/interactions.js atau pindahkan ke service dan state React saat integrasi API. Jangan menaruh secret/service-role key di browser.

QR dan panduan PWA masih placeholder dari preview; ganti dengan QR menuju URL aplikasi resmi milikmu. Teks preview, dokumen legal placeholder, copyright, serta kontak B2B perlu disesuaikan sebelum rilis publik. Ini bukan implementasi service worker/PWA siap instal.

Foto yang dibuat AI bersifat ilustratif dan tidak menampilkan karyawan/pelanggan HireLoop yang sebenarnya. Lihat public/assets/credits.json. Font Rethink Sans dan DM Sans disertakan lokal; keduanya berlisensi SIL Open Font License (lihat tautan sumber pada ASSETS.md).

## Validasi

npm ci dan npm run build berhasil. Hasil build diperiksa di browser: aset/font dimuat, enam lowongan tampil, section sticky aktif, background profesional terpasang, modal daftar terbuka. Hosting asal tidak diubah oleh proses ekspor ini.
