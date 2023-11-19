import { createI18n } from 'vue-i18n'
import en from './en.json'
import cn from './cn.json'

const messages = {
  en,
  cn
}

export const i18n = createI18n({
  locale: 'en',
  messages
})
