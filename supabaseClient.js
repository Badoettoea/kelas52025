// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabaseUrl = 'https://your-project.supabase.co'   // GANTI
export const supabaseKey = 'public-anon-key'                    // GANTI
export const supabase = createClient(supabaseUrl, supabaseKey)
