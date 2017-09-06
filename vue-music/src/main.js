import 'babel-polifll'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from './fastclick'
// 去除移动端300ms延迟
fastclick.attach(document.body);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
