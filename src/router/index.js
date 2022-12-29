import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Cart from '../views/Cart/index.vue'
import Me from '../views/Me/index.vue'
import goodsDetail from '../views/goodsDetail/index.vue'
import Order from '../views/Order/index.vue'
import addList from '../views/Me/addList/index.vue'
import editaddress from '../views/Me/editaddress/index.vue'
import addaddress from '../views/Me/addaddress/index.vue'
import editMe from '../views/Me/editMe/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Login/Register/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    component: goodsDetail
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Me/addList',
    name: 'addList',
    component: addList
  },
  {
    path: '/Me/editaddress',
    name: 'editaddress',
    component: editaddress
  },
  {
    path: '/Me/addaddress',
    name: 'addaddress',
    component: addaddress
  },
  {
    path: '/Me/editMe',
    name: 'editMe',
    component: editMe
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login/Register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
 if (to.path === '/Login' || to.path === '/Login/Register') {
   next()
 } else if (to.path === '/Me' || to.path === '/Cart' || to.path === '/Me/editaddress' || to.path === '/Me/addList' || to.path === '/Order') {
   const token = localStorage.getItem('userToken')
   if (token === null || token === '') {
     next({
       path: '/Login',
       query: { redirect: to.fullPath }
     })
  } else {
     next()
   }
  } else {
    next()
  }
})

export default router
