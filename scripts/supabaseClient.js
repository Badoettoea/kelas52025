// Gunakan environment variables untuk production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fcrzfzpfzuqqcsivwmyo.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjcnpmenBmenVxcWNzaXZ3bXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNzg5NjQsImV4cCI6MjA2MDk1NDk2NH0.VJ4vYUdcDzpLhyyFFscuM9yzNB8eVP0nEl7-ByJJJHc';

export const supabase = createClient(supabaseUrl, supabaseKey);
