import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  buildModules: ['@pinia/nuxt', ['nuxt-storm', { nested: true }]],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  css: ['@/styles/index'],
  ssr: false,
  runtimeConfig: {
    public: {
      supabaseDbUrl: '',
      supabaseDbKey: '',
    },
  },
  srcDir: 'src',
})
