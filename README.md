# kelas52025
# Kelas 5 Gallery App

Aplikasi web mobile-first untuk galeri foto siswa dan melihat nilai berbasis Supabase.

## Fitur
- Responsive photo grid (2x2 mobile, 4x desktop).
- Upload dan ganti foto siswa.
- Lihat nilai siswa setelah input PIN.

## Stack
- HTML, CSS, JavaScript (Vanilla)
- Supabase Database dan Storage
- Hosting: GitHub Pages

## Struktur
- `index.html`: Galeri siswa
- `nilai.html`: Form dan tampilan nilai siswa
- `supabaseClient.js`: Setup Supabase connection
- `script.js`: Logic galeri
- `nilai.js`: Logic cek nilai

## Cara Jalan
1. Clone repo ini
2. Edit `supabaseClient.js` dengan URL dan API key proyek kamu.
3. Pastikan bucket storage `foto-siswa` dibuat di Supabase.
4. Deploy ke GitHub Pages 🚀
