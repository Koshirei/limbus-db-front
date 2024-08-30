import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/views/Index.vue'
import Identities from '@/components/views/Identities.vue'
import Identities2 from '@/components/views/Testing.vue'
import Identity from '@/components/views/Identity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/identities',
      name: 'identities',
      component: Identities
    },
    {
      path: '/identity/:id',
      name: 'identity',
      component: Identity
    },
    {
      path: '/identities2',
      name: 'identities2',
      component: Identities2
    }
  ]
})

export default router
