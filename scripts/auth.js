import { supabase } from './supabaseClient.js';

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.href = '/login.html'; // Arahkan ke halaman login
  } else {
    console.error('Logout error:', error);
    alert('Gagal logout. Silakan coba lagi.');
  }
}
