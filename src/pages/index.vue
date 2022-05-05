<script setup lang="ts">
definePageMeta({ title: 'Главная' })

const router = useRouter()
</script>

<template lang="pug">
pre.wrapper Main page
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;
}
</style>
