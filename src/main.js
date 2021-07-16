import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// import qs from 'qs'
// Vue.prototype.$qs = qs

// import apiurl from "@/http/apiurl";
// Vue.prototype.$url = apiurl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
