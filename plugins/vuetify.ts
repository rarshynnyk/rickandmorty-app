import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    // components,
    // directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#ff9800',
          },
        },
      },
    },
    defaults: {
      global: {},
      VAppBar: {
        elevation: 1,
      },
      VProgressCircular: {
        indeterminate: true,
        color: 'primary',
        width: 2,
      },
      VTextField: {
        variant: 'outlined',
      },
      VSelect: {
        variant: 'outlined',
        density: 'compact',
      },
      VPagination: {
        totalVisible: 7,
      },
    },
  })

  app.vueApp.use(vuetify)
})
