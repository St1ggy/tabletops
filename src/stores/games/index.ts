import { combine, createEffect, createEvent, createStore, sample } from 'effector'

import { fetchGames, updateGame } from './transport'

export const $isLoading = createStore(false)
export const $query = createStore('')
export const $isDoneFilter = createStore<null | boolean>(null)
export const $games = createStore<Game[]>([])

export const events = {
  getGames: createEvent(),
  updateGame: createEvent<Pick<Game, 'id' | 'isDone'>>(),
  clearGames: createEvent(),
  clearQuery: createEvent(),
  setIsDoneFilter: createEvent<null | boolean>(),
}

const fetchGamesFx = createEffect(fetchGames)
const updateGameFx = createEffect(updateGame)

sample({
  source: events.getGames,
  target: fetchGamesFx,
})

sample({
  source: events.updateGame,
  target: updateGameFx,
})

sample({
  source: fetchGamesFx.doneData,
  fn: () => false,
  target: $isLoading,
})

sample({
  source: events.setIsDoneFilter,
  target: $isDoneFilter,
})

$isLoading //
  .on(fetchGamesFx.pending, () => true)
  .reset(fetchGamesFx.doneData)

$query //
  .reset(events.clearQuery)

$games //
  .on(fetchGamesFx.doneData, (_, g) => g)
  .on(updateGameFx.doneData, (prev, [updated]) => prev.map((g) => (g.id === updated.id ? updated : g)))
  .reset(events.clearGames)

export const $gamesFiltered = combine($games, $query, $isDoneFilter, (games, query, isDoneFilter) =>
  games.filter(({ titleRu, titleEn, isDone }) => {
    const matchQuery = query.length === 0 || new RegExp(query, 'i').exec(`${titleEn}${titleRu}`)
    const matchDoneFilter = !isDoneFilter || isDone
    return [matchQuery, matchDoneFilter].every((_) => _)
  }),
)
