<script setup lang="ts">
import type { Game } from '@/types'

const { game } = defineProps<{ game: Game }>()

const range = (min: number, max: number | null, extraLabel = '') => {
  if (!max) {
    return `${min}+${extraLabel}`
  }

  if (max === min) {
    return `${min}${extraLabel}`
  }

  return `от ${min}${extraLabel} до ${max}${extraLabel}`
}
</script>

<template lang="pug">
a.game(:href="game.stores[0].url", target="_blank")
  img.image(:src="game.images[0]", v-if="game.images.length > 0")
  .content
    h2.title {{ game.titleRu ?? '-' }}
    h3.subtitle {{ game.titleEn ?? '-' }}
    .playtime.row
      Icon.icon(name="ClockIcon")
      | {{ range(game.playtimeMin, game.playtimeMax, ' мин.') }}
    .players.row
      Icon.icon(name="UserGroupIcon")
      | {{ range(game.playersMin, game.playersMax) }}
    .price.row
      Icon.icon(name="ShoppingCartIcon")
      | {{ game.stores[0].price }} ₽
</template>

<style scoped lang="scss">
.game {
  @apply flex flex-col w-64 h-64 justify-end rounded-3xl overflow-hidden relative;

  img {
    @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
  }

  &:hover {
    .content {
      @apply translate-y-0;
    }
  }

  .content {
    @apply w-full items-center text-center bg-page/40 p-2 translate-y-full transition-transform;
    backdrop-filter: blur(32px);

    .row {
      @apply flex flex-row justify-center items-center;
    }

    .icon {
      @apply w-4 h-4 mr-1;
    }

    .title {
      @apply font-black;
    }

    .subtitle {
      @apply font-semibold;
    }
  }

  div {
    @apply line-clamp-1;
  }
}
</style>
