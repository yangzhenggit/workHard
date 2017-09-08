// import 'babel-polifll'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
// 去除移动端300ms延迟
fastclick.attach(document.body)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
}).$mount('#app')
