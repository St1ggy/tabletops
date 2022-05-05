import { createClient } from '@supabase/supabase-js'

const { supabaseKey, supabaseUrl } = useRuntimeConfig()

const options = {
  schema: 'public',
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
}

export const supabase = createClient(supabaseUrl, supabaseKey, options)
