import { defineNuxtConfig } from 'nuxt'
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],
  modules: [
    '@vueuse/nuxt',
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins.push(vuetify())
      })
    },
  ],
  build: {
    transpile: ['vuetify', '@apollo/client'],
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
  components: [
    '~/components',
    { path: '~/components/layouts' },
    { path: '~/components/domains' },
    { path: '~/components/ui', prefix: 'App' },
  ],
})
