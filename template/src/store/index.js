import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import app from '../main'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {},
  mutations: {
    SET_LANG (state, locale) {
      app.$i18n.locale = locale
    }
  },
  actions: {
    async SET_LANG ({ commit }, locale) {
      if (locale in app.$i18n.messages) {
        commit('SET_LANG', locale)
      } else {
        const module = await require(`@/plugins/i18n/locales/${locale}.json`)
        app.$i18n.setLocaleMessage(locale, module.default)
        commit('SET_LANG', locale)
      }
    }
  },
  modules: {}
})
