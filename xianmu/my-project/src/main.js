import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/vuex'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
import router from './routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  // 记得安装npm install vue-router
  router,
  store,
  render: h => h(App),
}).$mount('#app')