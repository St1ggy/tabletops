import { createClient } from '@supabase/supabase-js'

const { supabaseDbKey, supabaseDbUrl } = useRuntimeConfig()

const options = {
  schema: 'public',
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
}

export const supabase = createClient(supabaseDbUrl, supabaseDbKey, options)
