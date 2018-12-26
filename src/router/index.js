import Vue from 'vue'
import Router from 'vue-router'
import Carousel from '@/components/Carousel'

// Global components
Vue.component('carousel', Carousel)

const routerOptions = [
  { path: '/', components: { default: 'Landing', carousel: 'carousel' }, name: 'Landing' },
  { path: '/home', component: 'Home', name: 'Home' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.name}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
