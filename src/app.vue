<script lang="ts" setup>
const route = useRoute()

console.log(route.meta.title) // My home page

const games = [
  'Фиеста',
  'Obscurio',
  'Серп',
  'Покорение Марса',
  'Забытые моря',
  'Лаборатория',
  'Цолькин',
  'Чемпионы Мидгарда',
  'Последний Бастион',
  'Остров Кошек',
  'Крылья',
  'Чёрный ангел',
  'Пуэрто-Рико',
  'Архитекторы западного королевства',
  'Алхимики',
  'Эверделл',
  'Саграда',
  'Runebound',
  'Suburbia',
  'Кланк!',
  'Селестия',
  'Rise of Tribes',
  'Теотиуакан',
  'Mission Red Planet',
  'Рыцарь-Маг',
  'Королевство кроликов',
  'Keyflower',
  'Древний ужас',
  'Сумерки империи',
  'Визуал',
  'Сквозь века',
  'Палео',
  'Робинзон Крузо',
  'Брасс',
  'Плотина',
  'Керо',
  'Shadows over Camelot',
  'Энергосеть',
  'Funkoverse',
  'Остров духов',
  'Этнос',
  'Cosmic Encounter',
  'Киклады',
  'Кровь и ярость',
  'Маленький мир',
  'Звездные империи',
  'Комната 25',
  'Немезида',
  'Five Tribes',
  'Heroes of Land, Air and Sea',
  'Root',
  'Sons of Anarchy',
  'Колонизаторы',
  'Особняки безумия',
  'Inis',
  'Mr. Jack',
  'Кольт Экспресс',
  'Nexus Ops',
  'Оскверненный Грааль',
  'Восход 5',
]

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
