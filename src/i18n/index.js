import { getBrowserLang, getStorage } from '@/utils/utils'
import { createI18n } from 'vue-i18n'
import en from './en.json'
import cn from './cn.json'

const lang = getStorage('lang') || getBrowserLang()

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  messages: {
    en,
    cn
  }
})
