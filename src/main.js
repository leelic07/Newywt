// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Filters from './filters'
import Validate from '../static/js/validate.js'

//声明过滤器
Object.keys(Filters).forEach((key)=>Vue.filter(key,Filters[key]));

//验证
Object.keys(Validate).forEach((key)=>{
  Vue.prototype[key] = Validate[key];
})

Vue.config.productionTip = false;

// axios.defaults.baseURL='http://10.10.10.118:8080/ywt/api';

axios.defaults.baseURL='http://localhost:8080/ywt/api';

axios.defaults.withCredentials=true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
