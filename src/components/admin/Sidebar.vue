<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const isMobileMenuOpen = ref(false)

const currentRoute = computed(() => route.name)
const user = computed(() => authStore.user)

function logout() {
  authStore.logout()
  router.push('/admin/login')
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div>
    <!-- Mobile menu button -->
    <div class="lg:hidden fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center">
          <span class="text-primary-600 font-bold text-lg">FotoTravel Dashboard</span>
        </div>
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          <svg 
            class="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              v-if="!isMobileMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div class="flex flex-col flex-grow bg-gray-800 pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <span class="text-white font-bold text-xl">FotoTravel Dashboard</span>
        </div>
        <nav class="mt-8 flex-1 px-2 space-y-1">
          <router-link 
            to="/admin" 
            exact-active-class="bg-gray-900 text-white" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-dashboard' }"
          >
            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </router-link>

          <router-link 
            to="/admin/add-post" 
            exact-active-class="bg-gray-900 text-white" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-add-post' }"
          >
            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Post
          </router-link>

          <router-link 
            to="/admin/settings" 
            exact-active-class="bg-gray-900 text-white" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-settings' }"
          >
            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </router-link>

          <button 
            @click="logout" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
          >
            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </nav>
      </div>
      
      <div class="flex-shrink-0 flex bg-gray-700 p-4">
        <div class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div v-if="user?.avatar">
              <img 
                :src="user.avatar" 
                alt="User avatar" 
                class="h-9 w-9 rounded-full"
              />
            </div>
            <div v-else class="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
              <svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">{{ user?.name || 'User' }}</p>
              <p class="text-xs font-medium text-gray-300">{{ user?.email || 'user@example.com' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 flex z-40 lg:hidden"
    >
      <div 
        class="fixed inset-0 bg-gray-600 bg-opacity-75" 
        @click="closeMobileMenu"
      ></div>
      
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button 
            @click="closeMobileMenu" 
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Close sidebar</span>
            <svg 
              class="h-6 w-6 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-4">
            <span class="text-white font-bold text-xl">Wanderlust Admin</span>
          </div>
          <nav class="mt-5 px-2 space-y-1">
            <router-link 
              to="/admin" 
              exact-active-class="bg-gray-900 text-white" 
              class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-dashboard' }"
              @click="closeMobileMenu"
            >
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </router-link>

            <router-link 
              to="/admin/add-post" 
              exact-active-class="bg-gray-900 text-white" 
              class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-add-post' }"
              @click="closeMobileMenu"
            >
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Post
            </router-link>

            <router-link 
              to="/admin/settings" 
              exact-active-class="bg-gray-900 text-white" 
              class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              :class="{ 'bg-gray-900 text-white': currentRoute === 'admin-settings' }"
              @click="closeMobileMenu"
            >
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </router-link>

            <button 
              @click="logout" 
              class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
            >
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </nav>
        </div>
        
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
          <div class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div v-if="user?.avatar">
                <img 
                  :src="user.avatar" 
                  alt="User avatar" 
                  class="h-10 w-10 rounded-full"
                />
              </div>
              <div v-else class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-white">{{ user?.name || 'User' }}</p>
                <p class="text-sm font-medium text-gray-300">{{ user?.email || 'user@example.com' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>