import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui组件
import './mintui'
import 'mint-ui/lib/style.css';

// 引入字体图标
import './assets/css/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
