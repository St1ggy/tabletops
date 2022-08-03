import { supabase } from '../../supabase'

export default defineEventHandler(async (event) => {
  const { id, isDone } = await useBody<{ id: number; isDone: boolean }>(event)
  try {
    const { data } = await supabase.from<Game>('games').update({ isDone }).eq('id', id)
    return { games: data ?? [] }
  } catch (error) {
    return { games: [] }
  }
})
