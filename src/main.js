import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import BackToTop from 'vue-backtotop'
Vue.config.productionTip = false

Vue.use(BackToTop)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

