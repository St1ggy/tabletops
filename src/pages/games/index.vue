<script setup lang="ts">
definePageMeta({ title: 'Игры' })

const { pending, data } = useFetch('/api/games')

const range = (min: number, max: number) => `${min}${max > min ? `-${max}` : ''}`
</script>

<template lang="pug">
.wrapper
  .loader(v-if="pending") Загрузка...
  .data(v-else)
    .game(
      :key="id",
      v-for="{ titleRu, titleEn, playtimeMin, playtimeMax, playersMin, playersMax, id, images, urls } in data.games"
    )
      .title(v-if="titleRu != null") {{ titleRu }}
      .title(v-if="titleEn != null") {{ titleEn }}
      .playtime {{ range(playtimeMin, playtimeMax) }}
      .players {{ range(playersMin, playersMax) }}
      .urls {{ urls }}
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;
}
</style>
