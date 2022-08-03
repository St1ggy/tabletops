import { supabase } from '../../supabase'

export default defineEventHandler(async () => {
  try {
    const { data: games } = await supabase.from<Game>('games').select('*')
    return { games: games ?? [] }
  } catch (error) {
    return { games: [] }
  }
})
