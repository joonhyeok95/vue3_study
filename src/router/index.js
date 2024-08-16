import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'
import UserRegister from '../components/UserRegister.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/users', component: UserList },
  { path: '/register', component: UserRegister },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
