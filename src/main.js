import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false


Vue.use(VueGtag, {
  config: { id: 'UA-160939788-1' }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

