// nilai.js
import { supabase } from './supabaseClient.js'

async function cekPIN() {
  const pin = document.getElementById('pin').value.trim()
  const { data: siswa, error } = await supabase
    .from('siswa')
    .select('*')
    .eq('pin', pin)
    .single()

  if (error || !siswa) {
    alert('PIN salah atau tidak ditemukan.');
    return;
  }

  document.getElementById('profile').style.display = 'block'
  document.getElementById('nama').innerText = 'Nama: ' + siswa.nama
  document.getElementById('ttl').innerText = 'Tempat/Tgl Lahir: ' + siswa.tempat + ', ' + siswa.ttl
  document.getElementById('nis').innerText = 'NIS: ' + siswa.nis
  document.getElementById('nisn').innerText = 'NISN: ' + siswa.nisn

  // Optional: Tampilkan foto profil
  if (document.getElementById('fotoProfil')) {
    document.getElementById('fotoProfil').src = siswa.foto || 'default.png';
  }

  loadNilai(siswa.id)
}

async function loadNilai(siswa_id) {
  const { data, error } = await supabase
    .from('nilai')
    .select('*')
    .eq('siswa_id', siswa_id)

  const tbody = document.querySelector('#tabelNilai tbody')
  tbody.innerHTML = ''

  if (error || !data) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center">Gagal memuat nilai.</td></tr>';
    return;
  }

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center">Belum ada nilai.</td></tr>';
    document.getElementById('totalNilai').innerText = 0;
    document.getElementById('rataNilai').innerText = 0;
    return;
  }

  let total = 0
  data.forEach((n, idx) => {
    const row = `<tr>
      <td>${idx + 1}</td>
      <td>${n.mata_pelajaran}</td>
      <td>${n.nilai}</td>
    </tr>`
    tbody.innerHTML += row
    total += n.nilai
  })

  document.getElementById('totalNilai').innerText = total
  document.getElementById('rataNilai').innerText = (total / data.length).toFixed(2)
}

window.cekPIN = cekPIN;
