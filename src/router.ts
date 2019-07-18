import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import LoadingBar from './components/loading/LoadingBar.vue'
import Show from './views/show/Show.vue'
import Login from './views/login/Login.vue'
import Link from './views/link/Link.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loading',
      component: LoadingBar
    },
    {
        path: '/show',
        component: Show
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/link',
        component: Link
    }
  ]
})
