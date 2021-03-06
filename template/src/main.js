import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import validator from './plugins/validator'
import config from './config/config'

Vue.prototype.$config = config
Vue.config.productionTip = false
Vue.use(validator)

const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app
