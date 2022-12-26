import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/MainView.vue'
      )
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
