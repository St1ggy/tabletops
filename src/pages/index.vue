<script setup lang="ts">
definePageMeta({ title: 'Главная' })

const router = useRouter()
</script>

<template lang="pug">
pre.wrapper {{ JSON.stringify(router.options.routes, null, 2) }}
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;
}
</style>
