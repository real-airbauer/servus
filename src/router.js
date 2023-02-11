import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Download from './views/download'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'download',
      path: '/download',
      component: Download,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
