import { logout } from './auth.js';
import { gotoNilai } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Setup button event listeners
  document.getElementById('btnLogout')?.addEventListener('click', logout);
  document.getElementById('btnNilai')?.addEventListener('click', gotoNilai);

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  initGaleri();
  setupEventListeners();
});

async function initGaleri() {
  try {
    const { data, error } = await supabase
      .from('siswa')
      .select('*')
      .order('nama', { ascending: true });

    if (error) throw error;

    renderSiswaGrid(data);
  } catch (error) {
    console.error('Error loading siswa:', error);
    alert('Gagal memuat data siswa');
  }
}

function renderSiswaGrid(siswaData) {
  const grid = document.getElementById('gridSiswa');
  grid.innerHTML = siswaData.map(siswa => `
    <div class="card">
      <img src="${siswa.foto || 'default.png'}" alt="${siswa.nama}" loading="lazy">
      <h3>${siswa.nama}</h3>
      <button data-id="${siswa.id}" class="btn-ganti-foto">Ganti Foto</button>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Delegasi event untuk tombol ganti foto
  document.getElementById('gridSiswa').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-ganti-foto')) {
      openFilePicker(e.target.dataset.id);
    }
  });

  // Tombol logout
  document.getElementById('btnLogout').addEventListener('click', logout);
}
