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
  NuxtLink.menu-item(:key="route.name", :to="route.path", v-for="route in routes") {{ route.meta.title }}
</template>

<style lang="scss">
.side-bar {
  @apply sticky top-0 h-screen;
  @apply flex flex-col bg-page-content;
  @apply justify-center w-52;

  .menu-item {
    @apply py-0.5 px-4 my-0.5 transition-colors;
    @apply text-lg text-page;

    &:hover {
      @apply bg-page/25;
    }

    &::before {
      content: '';
      position: absolute;
      width: theme('spacing.4');
      height: 100%;
      left: calc(-1 * theme('spacing.3'));
      top: 0;
      background: theme('colors.page');
      border-radius: theme('spacing.1');

      @apply transition-[left] duration-200;
    }

    &.router-link-active {
      &::before {
        left: calc(-1 * theme('spacing.2'));
      }
    }
  }
}
</style>
