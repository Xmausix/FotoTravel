<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const isSubmitting = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!form.value.email || !form.value.password) {
    error.value = 'Please enter both email and password'
    return
  }

  isSubmitting.value = true
  error.value = ''

  try {
    await authStore.login(form.value.email, form.value.password)
    
    // Redirect to original destination or dashboard
    const redirectPath = route.query.redirect?.toString() || '/admin'
    router.push(redirectPath)
  } catch (err: any) {
    error.value = err.message || 'Login failed'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
        Admin Login
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Enter your credentials to access the admin area
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                type="email"
                v-model="form.email"
                autocomplete="email"
                required
                class="input"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                type="password"
                v-model="form.password"
                autocomplete="current-password"
                required
                class="input"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div v-if="error" class="text-sm text-red-600">
            {{ error }}
          </div>

          <div>
            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="isSubmitting"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Demo credentials
              </span>
            </div>
          </div>

          <div class="mt-6">
            <div class="rounded-md bg-gray-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                  <p class="text-sm text-gray-700">
                    Email: admin@example.com<br>
                    Password: password
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>