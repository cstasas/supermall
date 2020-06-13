import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import VueLazyload from "vue-lazyload";

// 引入mint-ui组件
import './mintui'
import 'mint-ui/lib/style.css';

// 引入字体图标
import './assets/css/iconfont.css'

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/image/placeholder.png')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
