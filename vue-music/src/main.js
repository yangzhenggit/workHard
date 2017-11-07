// import 'babel-polifll'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import store from './store'
import VueLazyload from 'vue-lazyload'
// 去除移动端300ms延迟
fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (createElement) => createElement(App)
}).$mount('#app')
