<script setup lang="ts">
import type { IconName } from '@/types'

const props = defineProps<{ iconName: IconName; text: string }>()
</script>

<template lang="pug">
.row
  Icon.icon(:name="props.iconName")
  | {{ props.text }}
</template>

<style scoped lang="scss" module>
.row {
  @apply flex flex-row justify-center items-center;

  .icon {
    @apply w-4 h-4 mr-1;
  }
}
</style>
