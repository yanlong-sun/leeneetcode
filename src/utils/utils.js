export const setStorage = (key, obj) => {
  let json = JSON.stringify(obj)
  window.localStorage.setItem(key, json)
}

export const getStorage = (key) => {
  const str = window.localStorage.getItem(key)
  if (!str) {
    return null
  }
  return JSON.parse(str)
}

export const removeStorage = (key) => {
  window.localStorage.removeItem(key)
}

export const getBrowserLang = () => {
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage
  browserLang = browserLang.toLowerCase()
  const defaultBrowserLang = browserLang === 'cn' || browserLang === 'zh' || browserLang === 'zh-cn' 
    ? 'cn'
    : 'en'
  return defaultBrowserLang
}