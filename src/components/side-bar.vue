<script setup lang="ts">
const { options } = useRouter()

const routes = options.routes.sort(({ name: nameA }, { name: nameB }) => {
  if (nameB && nameA) {
    return String(nameB).localeCompare(String(nameA))
  }
  return 0
})
</script>

<template lang="pug">
.side-bar
  NuxtLink.menu-item(:key="route.name", :to="route.path", v-for="route in routes")
    span.ml-4 {{ route.meta.title }}
</template>

<style lang="scss">
.side-bar {
  @apply sticky top-0 h-screen;
  @apply flex flex-col bg-page-content;
  @apply justify-center w-52 basis-52;
  min-width: theme('spacing.52');

  .menu-item {
    @apply py-2 transition-colors;
    @apply text-lg text-page;

    &:hover {
      @apply bg-page/25;
    }

    &:before {
      @apply absolute w-full h-full top-0 bg-page z-[-1];
      @apply transition-[left] duration-200 content-[''];

      left: calc(-100% + theme('spacing.2'));
    }

    &.router-link-active {
      @apply text-page-content;

      &:before {
        @apply left-0;
      }
    }
  }
}
</style>
