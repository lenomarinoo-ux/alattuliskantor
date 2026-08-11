# assets/img

Folder ini berisi aset visual lokal milik brand:

- `logo-atk.svg` — logo/brand mark (motif stempel resmi)
- `favicon.svg` — favicon situs
- `placeholder-produk.svg` — gambar cadangan jika foto produk asli belum tersedia

Catatan: foto-foto produk & suasana kantor pada halaman (hero, tentang kami, kartu produk, blog) saat ini masih memakai URL foto stok eksternal (Unsplash) sebagai contoh tampilan, karena lingkungan build ini tidak memiliki akses jaringan untuk mengunduh foto dari CDN eksternal.

Untuk produksi, disarankan:
1. Siapkan foto asli (gudang, produk ATK, tim, kantor) — idealnya rasio 4:3 atau 16:9, terkompresi ke web (JPG/WebP).
2. Simpan di folder ini, misalnya `assets/img/produk-pulpen.jpg`, `assets/img/gudang-atk.jpg`, dst.
3. Ganti atribut `src` pada file HTML terkait dari URL Unsplash menjadi path lokal, contoh:
   `src="assets/img/produk-pulpen.jpg"`
