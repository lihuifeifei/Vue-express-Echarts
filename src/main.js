import Vue from 'vue';
import axios from 'axios';
import echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

//引入axios以及echarts

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

Vue.use(VueResource);

// 设置全局的 axios 默认值
axios.defaults.baseURL = 'http://127.0.0.1:8081';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
