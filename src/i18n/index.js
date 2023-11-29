import { getBrowserLang, getStorage } from '@/utils'
import { createI18n } from 'vue-i18n'
import en from './en.json'
import cn from './cn.json'

const lang = getStorage('lang') || getBrowserLang()
console.log(lang)
export const i18n = createI18n({
  legacy: false,
  locale: lang,
  messages: {
    en,
    cn
  }
})
