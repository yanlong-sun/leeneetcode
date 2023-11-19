import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n'
import { router } from '@/router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(i18n)
  .use(router)
  .mount('#app')
