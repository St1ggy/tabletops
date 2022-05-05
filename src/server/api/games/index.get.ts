import { supabase } from '../../supabase'

type StoreSlug = 'hobby-games'

type Game = {
  id: number
  titleRu: string | null
  titleEn: string | null
  playtimeMin: number
  playtimeMax: number
  playersMin: number
  playersMax: number
  images: string[]
  urls: { storeSlug: StoreSlug; url: string }[]
}

export default defineEventHandler(async () => {
  const { data: games } = await supabase.from<Game>('games').select('*')
  return { games: games ?? [] }
})
