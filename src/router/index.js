import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 理由懒加载
const Home = () => import('../views/home/Home')
const CateGory = () => import('../views/category/CateGory')
const Cart = () => import('../views/cart/Cart')
const ProFile = () => import('../views/profile/ProFile')
const Detail = () => import('../views/detail/Detail')

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: CateGory },
    { path: '/cart', component: Cart },
    { path: '/profile', component: ProFile },
    { path: '/detail/:id', component: Detail }
  ],
  mode: 'history'
})
