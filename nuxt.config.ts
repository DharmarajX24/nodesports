import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
          tailwindcss: {}
        }
      }
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@pinia/nuxt'
  ]
})
