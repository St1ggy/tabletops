export type StoreSlug = 'hobby-games'

export type Game = {
  id: number
  titleRu: string | null
  titleEn: string | null
  playtimeMin: number
  playtimeMax: number | null
  playersMin: number
  playersMax: number | null
  images: string[]
  stores: { storeSlug: StoreSlug; url: string; price: number }[]
  isDone?: boolean
}
