<script setup lang="ts">
definePageMeta({ title: 'Игры' })

const { pending, data } = useFetch('/api/games')

const range = (min: number, max: number | null) => {
  if (!max) {
    return `${min}+`
  }

  if (max === min) {
    return min
  }

  return `${min}-${max}`
}
</script>

<template lang="pug">
.wrapper
  .loader(v-if="pending") Загрузка...
  .data(v-else)
    .game(
      :key="id",
      v-for="{ titleRu, titleEn, playtimeMin, playtimeMax, playersMin, playersMax, id, images, urls } in data.games"
    )
      img.image(:src="images[0]", v-if="images.length > 0")
      .content
        .title {{ titleRu ?? '-' }}
        .title {{ titleEn ?? '-' }}
        .playtime {{ range(playtimeMin, playtimeMax) }}
        .players {{ range(playersMin, playersMax) }}
        .urls {{ urls }}
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;

  .data {
    @apply flex flex-row flex-wrap justify-around;

    .game {
      @apply flex flex-col w-96 h-96 justify-end rounded-3xl overflow-hidden;

      img {
        @apply absolute;
      }

      .content {
        @apply w-full items-center;
        @apply bg-page/40;
        backdrop-filter: blur(32px);
      }

      div {
        @apply line-clamp-1;
      }
    }
  }
}
</style>
