import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [],

  // ssr: false,
  // mode: 'static',

  app: {
    head: {
      script: [
      ],
      link: [
      ]
    }
  },

  runtimeConfig: {
    public: {
    }
  },

  modules: [
    ['@pinia/nuxt', {autoImports: ['defineStore', 'storeToRefs', ['defineStore', 'definePiniaStore']]}],
  ],

  vite: {
    vue: {
      reactivityTransform: true, // Enables $ref sugar
    }
  }
})