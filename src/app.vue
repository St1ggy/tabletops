<script lang="ts" setup>
const route = useRoute()

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {},
})
</script>

<template lang="pug">
#app
  Head
    Title {{ route.meta.title }} | Настолки

  SideBar
  NuxtPage
</template>
