import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// User pages
import UserHomePage from '../UserSite/userPage/UserHomePage.vue'
import UserTravelsPage from '../UserSite/userPage/UserTravelsPage.vue'
import UserPostPage from '../UserSite/userPage/UserPostPage.vue'

// Admin pages
import LoginPage from '../Pages/admin/LoginPage.vue'
import AdminDashboard from '../Pages/admin/DashboardPage.vue'
import AdminSettings from '../Pages/admin/SettingsPage.vue'
import AdminAddPost from '../Pages/admin/AddPostPage.vue'

// Public Admin Site
import HomePage from '../Pages/user/HomePage.vue'
import TravelsPage from '../Pages/user/TravelsPage.vue'
import PostPage from '../Pages/user/PostPage.vue'

// Layouts
import MainAdminLayout from '../layouts/MainAdminLayout.vue'
import Layout from '../UserSite/Layout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const routes = [
  // 1. User site
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'user-home', component: UserHomePage },
      { path: 'travels', name: 'user-travels', component: UserTravelsPage },
      { path: 'post/:id', name: 'user-post', component: UserPostPage },
    ]
  },

  // 2. Public-facing admin content
  {
    path: '/main-admin',
    component: MainAdminLayout,
    children: [
      { path: '', name: 'main-admin-home', component: HomePage },
      { path: 'travels', name: 'main-admin-travels', component: TravelsPage },
      { path: 'post/:id', name: 'main-admin-post', component: PostPage },
    ]
  },

  // 3. Admin login
  {
    path: '/admin/login',
    name: 'admin-login',
    component: LoginPage
  },

  // 4. Protected admin dashboard
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        next({ name: 'admin-login', query: { redirect: to.fullPath } })
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
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
