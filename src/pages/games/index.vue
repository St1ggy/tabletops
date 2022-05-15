<script setup lang="ts">
import Game from '@/components/item/game.vue'

definePageMeta({ title: 'Игры' })

const { pending, data } = useFetch('/api/games')
</script>

<template lang="pug">
.wrapper
  Loader.loader(v-if="pending")
  ItemGame(:game="game", :key="game.id", v-else, v-for="game in data.games")
</template>

<style scoped lang="scss">
.wrapper {
  @apply w-full grid gap-1 grid-cols-auto justify-center gap-10 p-8 items-center;
  grid-template-columns: repeat(auto-fill, theme('spacing.64'));

  .loader {
    @apply flex self-center justify-center col-span-full;
  }
}
</style>
