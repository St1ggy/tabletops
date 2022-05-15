import { supabase } from '../../supabase'

import type { Game } from '@/types'

export default defineEventHandler(async () => {
  try {
    const { data: games } = await supabase.from<Game>('games').select('*')
    return { games: games ?? [] }
  } catch (error) {
    return { games: [] }
  }
})
