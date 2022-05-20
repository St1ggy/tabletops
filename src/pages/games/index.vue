<script setup lang="ts">
definePageMeta({ title: 'Игры' })

const { pending, data: dataRaw } = useFetch('/api/games')

const searchQuery = ref('')

const data = computed(() =>
  dataRaw.value.games.filter(
    ({ titleRu, titleEn }) =>
      searchQuery.value.length === 0 || new RegExp(searchQuery.value, 'i').exec(`${titleEn}${titleRu}`),
  ),
)
</script>

<template lang="pug">
.loader(v-if="pending")
  Loader
.wrapper(v-else)
  .games
    .search-bar
      input(type="text", v-model="searchQuery")
      Icon.icon(name="SearchIcon")
    .grid-list
      ItemGame(:game="game", :key="game.id", v-for="game in data")
</template>

<style scoped lang="scss">
.loader {
  @apply w-full flex self-center justify-center col-span-full;
}

.wrapper {
  @apply w-full min-h-full text-center;

  .search-bar {
    @apply mt-4 w-96 mx-auto relative self-center;

    .icon {
      @apply w-8 h-8 ml-4 absolute left-0 top-1/2 -translate-y-1/2;
    }
  }

  .grid-list {
    @apply w-full grid gap-1 grid-cols-auto justify-center gap-10 p-8 items-center;
    grid-template-columns: repeat(auto-fill, theme('spacing.64'));
  }
}
</style>
