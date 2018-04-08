import Vue from 'vue'
import Router from 'vue-router'
import Everest from '@/components/Everest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Everest',
      component: Everest
    }
  ]
})
