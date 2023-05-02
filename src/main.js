import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;

Vue.config.productionTip = false


Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

