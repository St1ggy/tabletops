export const fetchGames = async () => {
  const { games } = await $fetch('/api/games')
  return games
}

export const updateGame = async ({ id, isDone }: Pick<Game, 'id' | 'isDone'>) => {
  const { games } = await $fetch('/api/games/update', { method: 'PUT', body: { id, isDone } })
  return games
}
