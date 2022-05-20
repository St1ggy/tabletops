<script setup lang="ts">
import * as Icon from '@heroicons/vue/solid'

import type { IconName } from '@/types'

const { name } = defineProps<{ name: IconName }>()
</script>

<template lang="pug">
component(:is="Icon[name]")
</template>
