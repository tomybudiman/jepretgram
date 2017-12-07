// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'axios'
import store from './vuex'

Vue.config.productionTip = false
Vue.prototype.$axios = http.create({
  baseURL: 'http://54.213.226.247:3032/'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
