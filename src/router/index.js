import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AnimalsView from '../views/AnimalsView.vue'
import MemesView from '../views/MemesView.vue'
import ContacteView from '../views/ContacteView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/animals',
      name: 'animals',
      component: AnimalsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/memes',
      name: 'memes',
      component: MemesView,
    },
    {
      path: '/contacte',
      name: 'contacte',
      component: ContacteView,
    }
  ]
})

export default router