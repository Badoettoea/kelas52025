import { supabase } from './supabaseClient.js';
import { gotoGaleri } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnKembali').addEventListener('click', gotoGaleri);
  document.getElementById('btnCekNilai').addEventListener('click', cekPIN);
});

async function cekPIN() {
  const pin = document.getElementById('pin').value.trim();
  
  if (!pin) {
    alert('Masukkan PIN terlebih dahulu');
    return;
  }

  try {
    showLoading(true);
    
    const { data: siswa, error } = await supabase
      .from('siswa')
      .select('*')
      .eq('pin', pin)
      .single();

    if (error || !siswa) throw error || new Error('Siswa tidak ditemukan');

    tampilkanProfil(siswa);
    await loadNilai(siswa.id);
  } catch (error) {
    console.error('Error:', error);
    alert('PIN salah atau terjadi kesalahan');
  } finally {
    showLoading(false);
  }
}
