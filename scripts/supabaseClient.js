// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabaseUrl = 'https://fcrzfzpfzuqqcsivwmyo.supabase.co'   // GANTI
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjcnpmenBmenVxcWNzaXZ3bXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNzg5NjQsImV4cCI6MjA2MDk1NDk2NH0.VJ4vYUdcDzpLhyyFFscuM9yzNB8eVP0nEl7-ByJJJHc'                    // GANTI
export const supabase = createClient(supabaseUrl, supabaseKey)
