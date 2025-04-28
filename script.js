// script.js
import { supabase } from './supabaseClient.js'

let selectedSiswaId = null;

async function loadSiswa() {
  const { data, error } = await supabase.from('siswa').select('*')
  const grid = document.getElementById('gridSiswa')
  grid.innerHTML = ''

  data.forEach(siswa => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <h3>${siswa.nama}</h3>
      <div class="overlay"></div>
      <img src="${siswa.foto}" alt="Foto ${siswa.nama}" loading="lazy">
      <button onclick="openFilePicker(${siswa.id})">Ganti Foto</button>
    `
    grid.appendChild(card)
  })
}

window.openFilePicker = function(id) {
  selectedSiswaId = id;
  document.getElementById('filePicker').click();
}

document.getElementById('filePicker').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file || !selectedSiswaId) return;

  const filePath = `siswa/${selectedSiswaId}_${Date.now()}.jpg`;

  const { data, error: uploadError } = await supabase
    .storage
    .from('foto-siswa')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (uploadError) {
    console.error('Upload Error:', uploadError);
    return;
  }

  const { data: publicUrl } = supabase
    .storage
    .from('foto-siswa')
    .getPublicUrl(filePath);

  await supabase
    .from('siswa')
    .update({ foto: publicUrl.publicUrl })
    .eq('id', selectedSiswaId);

  alert('Foto berhasil diganti!');
  loadSiswa();  // Refresh grid
})

function logout() {
  alert('Logout berhasil.');
}

function gotoNilai() {
  window.location.href = 'nilai.html';
}

loadSiswa()
