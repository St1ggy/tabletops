<script setup lang="ts">
const props = withDefaults(defineProps<{ test: string }>(), { test: 'TEMPLATE' })
</script>

<template lang="pug">
div {{ props.test }}
</template>
