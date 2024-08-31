import { createRouter, createWebHistory } from 'vue-router'
import BelongingsView from '../views/BelongingsView.vue'
import LiveView from '../views/LiveView.vue'
import NoteView from '../views/NoteView.vue'

const routes = [
  { path: '/', redirect: '/belongings' },
  { path: '/belongings', component: BelongingsView },
  { path: '/live', component: LiveView },
  { path: '/note', component: NoteView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router