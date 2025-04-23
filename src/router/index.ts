import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// User pages
import HomePage from '../pages/user/HomePage.vue'
import TravelsPage from '../pages/user/TravelsPage.vue'
import PostPage from '../pages/user/PostPage.vue'

// Admin pages
import LoginPage from '../pages/admin/LoginPage.vue'
import AdminDashboard from '../pages/admin/DashboardPage.vue'
import AdminSettings from '../pages/admin/SettingsPage.vue'
import AdminAddPost from '../pages/admin/AddPostPage.vue'

// Layouts
import UserLayout from '../layouts/UserLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '', name: 'home', component: HomePage },
      { path: 'travels', name: 'travels', component: TravelsPage },
      { path: 'post/:id', name: 'post', component: PostPage },
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: (to: any, from: any, next: any) => {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        next({ name: 'login', query: { redirect: to.fullPath } })
      } else {
        next()
      }
    },
    children: [
      { path: '', name: 'admin-dashboard', component: AdminDashboard },
      { path: 'settings', name: 'admin-settings', component: AdminSettings },
      { path: 'add-post', name: 'admin-add-post', component: AdminAddPost }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router