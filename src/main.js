// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueEllipsis from 'vue-ellipsis'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/main.styl'

Vue.use(Vuetify)
Vue.use(VueEllipsis)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
