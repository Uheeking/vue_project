import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/HelloView.vue'
import Study from '../views/StudyView.vue'

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
        /* webpackChunkName: "main", webpackPrefetch:true */ '../views/MainView.vue'
      )
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/study',
    name: 'study',
    component: Study
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
