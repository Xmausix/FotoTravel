<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const isMenuOpen = ref(false)

const isAuthenticated = computed(() => authStore.isAuthenticated)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function goToAdmin() {
  router.push('/admin')
  closeMenu()
}

function goToLogin() {
  router.push('/admin/login')
  closeMenu()
}
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0  z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" @click="closeMenu" class="flex items-center">
              <span class="text-primary-600 text-2xl font-bold">FotoTravel</span>
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-primary-500 text-gray-900"
            >
              Home
            </router-link>
            <router-link
              to="/travels"
              class="border-transparent text-gray-500 hover:border-primary-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-primary-500 text-gray-900"
            >
              Travels
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div v-if="isAuthenticated" class="ml-3 relative">
            <button
              @click="goToAdmin"
              class="btn-primary text-sm"
            >
              Admin Dashboard
            </button>
          </div>
          <div v-else class="ml-3 relative">
            <button
              @click="goToLogin"
              class="btn-outline text-sm"
            >
              Admin Login
            </button>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-if="!isMenuOpen"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-else
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="sm:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          @click="closeMenu"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          active-class="bg-primary-50 border-primary-500 text-primary-700"
        >
          Home
        </router-link>
        <router-link
          to="/travels"
          @click="closeMenu"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          active-class="bg-primary-50 border-primary-500 text-primary-700"
        >
          Travels
        </router-link>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div v-if="isAuthenticated" class="mt-3 space-y-1">
            <button
              @click="goToAdmin"
              class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Admin Dashboard
            </button>
          </div>
          <div v-else class="mt-3 space-y-1">
            <button
              @click="goToLogin"
              class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

