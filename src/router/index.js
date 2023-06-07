import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [

  {
    path:'/dashboard',
    name:'dashboard',
    component: DashboardView,
  },

  {
    path:'/home',
    name:'home',
    component : HomeView,
  },

  {
    path:'/contact',
    name:'contact',
    component : ContactView,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
