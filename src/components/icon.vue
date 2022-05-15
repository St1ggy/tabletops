<script setup lang="ts">
import * as Icon from '@heroicons/vue/solid'

const { name } = defineProps<{ name: keyof typeof Icon }>()
</script>

<template lang="pug">
component(:is="Icon[name]")
</template>
