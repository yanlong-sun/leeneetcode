import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      curTheme: null
    }
  },
  mutations: {
    setCurTheme(state, data) {
      state.curTheme = data
    }
  },
  actions: {
    getCurThemeAndSet({ commit }, theme) {
      commit('setCurTheme', theme)
    }
  }
})