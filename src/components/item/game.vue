<script setup lang="ts">
import { gamesStore } from '@/stores'

const props = defineProps<{ game: Game }>()

const range = (min: number, max: number | null, extraLabel = '') => {
  if (!max) {
    return `${min}+${extraLabel}`
  }

  if (max === min) {
    return `${min}${extraLabel}`
  }

  return `от ${min}${extraLabel} до ${max}${extraLabel}`
}

const markAsDone = () => {
  const { id, isDone } = props.game
  gamesStore.events.updateGame({ id, isDone: !isDone })
}
</script>

<template lang="pug">
a.game(:href="game.stores[0].url", target="_blank")
  img.image(:src="game.images[0]", v-if="game.images.length > 0")

  .content
    h2.title {{ game.titleRu ?? '-' }}
    h3.subtitle {{ game.titleEn ?? '-' }}
    RowWithIcon.playtime(:text="range(game.playtimeMin, game.playtimeMax, ' мин.')", icon-name="ClockIcon")
    RowWithIcon.players(:text="range(game.playersMin, game.playersMax)", icon-name="UserGroupIcon")
    RowWithIcon.price(:text="`${game.stores[0].price} ₽`", icon-name="ShoppingCartIcon") Test

  button.done-indicator(:class="{ show: game.isDone }", @click.prevent="markAsDone()")
    Icon(name="BadgeCheckIcon")
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

    .done-indicator {
      @apply opacity-40;

      &:hover {
        @apply opacity-75;
      }
    }
  }

  .content {
    @apply w-full flex flex-col items-center text-center bg-page/40 p-2 translate-y-full transition-transform;
    backdrop-filter: blur(32px);

    .title {
      @apply font-black;
    }

    .subtitle {
      @apply font-semibold;
    }
  }

  .done-indicator {
    @apply absolute top-2 right-2 w-8 h-8 text-success opacity-0 transition-opacity;

    &.show {
      @apply opacity-100 #{!important};
    }
  }
}
</style>
