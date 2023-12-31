import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import store from './vuex/store'
import router from "./router/router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  Hello
}).$mount('#app')
