import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import globalinfo from './util/globalInfo'
import quill from './util/quill'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.prototype.$user = globalinfo.user

new Vue({
  router,
  store,
  quill,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
