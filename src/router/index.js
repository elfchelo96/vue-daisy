import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'

import Dashboard from '@/pages/MainDashboard.vue'
import Users from '@/pages/Security/ListUsers.vue'

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', component: Dashboard },
      { path: 'usuarios', component: Users },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
