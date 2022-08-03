<script setup lang="ts">
import { useStore, useVModel } from 'effector-vue/composition'

import { gamesStore } from '@/stores'

definePageMeta({
  middleware: ['auth'],
  title: 'Игры',
})

onMounted(() => {
  gamesStore.events.getGames()
})

const isLoading = useStore(gamesStore.$isLoading)
const data = useStore(gamesStore.$gamesFiltered)
const isDoneFilter = useStore(gamesStore.$isDoneFilter)

const query = useVModel(gamesStore.$query)

const toggleDoneFilter = () => {
  console.log({ isDoneFilter })
  gamesStore.events.setIsDoneFilter(!isDoneFilter.value)
}
</script>

<template lang="pug">
.loader(v-if="isLoading")
  Loader

.wrapper(v-else)
  .games
    .filters
      .search-bar
        input(type="text", v-model="query")
        Icon.icon(name="SearchIcon")
      Icon.done-filter.w-12.h-12(
        :class="{ off: !isDoneFilter, on: isDoneFilter }",
        @click="toggleDoneFilter()",
        name="BadgeCheckIcon"
      )

    .grid-list
      ItemGame(:game="game", :key="game.id", v-for="game in data")
</template>

<style scoped lang="scss">
.loader {
  @apply w-full flex self-center justify-center col-span-full;
}

.wrapper {
  @apply w-full min-h-full text-center;

  .filters {
    @apply mt-4 relative self-center flex-row flex justify-center items-center;

    .search-bar {
      @apply w-96 relative;

      .icon {
        @apply w-8 h-8 ml-4 absolute left-0 top-1/2 -translate-y-1/2;
      }
    }

    .done-filter {
      @apply ml-4 cursor-pointer transition-opacity;

      &:hover {
        @apply opacity-75 #{!important};
      }

      &.on {
        @apply text-success;
      }
      &.off {
        @apply opacity-40;
      }
    }
  }

  .grid-list {
    @apply w-full grid gap-1 grid-cols-auto justify-center gap-10 p-8 items-center;
    grid-template-columns: repeat(auto-fill, theme('spacing.64'));
  }
}
</style>
