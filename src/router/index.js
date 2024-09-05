import { createRouter, createWebHistory } from 'vue-router'
import BelongingsView from '../views/BelongingsView.vue'
import LiveView from '../views/LiveView.vue'
import NoteView from '../views/NoteView.vue'
import NoteDetailView from '../views/NoteDetailView.vue'

const routes = [
  { path: '/', component: BelongingsView },
  { path: '/live', component: LiveView },
  { path: '/note', component: NoteView },
  { path: '/note/:id', component: NoteDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router