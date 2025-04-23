<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { usePostsStore } from '../../stores/posts'

const authStore = useAuthStore()
const postsStore = usePostsStore()

const user = computed(() => authStore.user)
const posts = computed(() => postsStore.posts)

// Profile settings
const profileForm = ref({
  name: user.value?.name || '',
  email: user.value?.email || '',
  avatar: user.value?.avatar || ''
})

const isUpdatingProfile = ref(false)
const profileSuccess = ref(false)

// Password settings
const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const isUpdatingPassword = ref(false)
const passwordError = ref('')
const passwordSuccess = ref(false)

// Post settings
const activeTab = ref('profile')

function updateProfile() {
  isUpdatingProfile.value = true
  
  // Simple validation
  if (!profileForm.value.name || !profileForm.value.email) {
    // Show error
    isUpdatingProfile.value = false
    return
  }
  
  setTimeout(() => {
    authStore.updateProfile({
      name: profileForm.value.name,
      email: profileForm.value.email,
      avatar: profileForm.value.avatar
    })
    
    profileSuccess.value = true
    isUpdatingProfile.value = false
    
    // Reset success message after delay
    setTimeout(() => {
      profileSuccess.value = false
    }, 3000)
  }, 1000)
}

function updatePassword() {
  isUpdatingPassword.value = true
  passwordError.value = ''
  
  // Simple validation
  if (!passwordForm.value.currentPassword || !passwordForm.value.newPassword || !passwordForm.value.confirmPassword) {
    passwordError.value = 'All fields are required'
    isUpdatingPassword.value = false
    return
  }
  
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    passwordError.value = 'New password and confirmation do not match'
    isUpdatingPassword.value = false
    return
  }
  
  if (passwordForm.value.currentPassword !== 'password') {
    passwordError.value = 'Current password is incorrect'
    isUpdatingPassword.value = false
    return
  }
  
  setTimeout(() => {
    // In a real app, this would call an API to update the password
    
    // Reset form and show success
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    
    passwordSuccess.value = true
    isUpdatingPassword.value = false
    
    // Reset success message after delay
    setTimeout(() => {
      passwordSuccess.value = false
    }, 3000)
  }, 1000)
}

function togglePostVisibility(postId: string) {
  const post = postsStore.posts.find(p => p.id === postId)
  if (post) {
    postsStore.updatePost(postId, { featured: !post.featured })
  }
}

function deletePost(postId: string) {
  if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
    postsStore.deletePost(postId)
  }
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
    
    <!-- Tabs -->
    <div class="mt-6 border-b border-gray-200">
      <nav class="-mb-px flex space-x-8">
        <button
          @click="activeTab = 'profile'"
          :class="[
            activeTab === 'profile'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          ]"
        >
          Profile
        </button>
        <button
          @click="activeTab = 'password'"
          :class="[
            activeTab === 'password'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          ]"
        >
          Password
        </button>
        <button
          @click="activeTab = 'posts'"
          :class="[
            activeTab === 'posts'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          ]"
        >
          Posts
        </button>
      </nav>
    </div>
    
    <!-- Profile Settings -->
    <div v-if="activeTab === 'profile'" class="mt-6">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
        
        <form @submit.prevent="updateProfile" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              v-model="profileForm.name"
              class="input mt-1"
              :disabled="isUpdatingProfile"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              v-model="profileForm.email"
              class="input mt-1"
              :disabled="isUpdatingProfile"
            />
          </div>
          
          <div>
            <label for="avatar" class="block text-sm font-medium text-gray-700">Avatar URL</label>
            <input
              id="avatar"
              type="text"
              v-model="profileForm.avatar"
              class="input mt-1"
              :disabled="isUpdatingProfile"
            />
            <p class="mt-2 text-sm text-gray-500">
              Enter a URL to an image (e.g., from Pexels, Unsplash)
            </p>
          </div>
          
          <div v-if="profileSuccess" class="rounded-md bg-green-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">
                  Profile updated successfully
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              class="btn-primary"
              :disabled="isUpdatingProfile"
            >
              <svg v-if="isUpdatingProfile" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isUpdatingProfile ? 'Updating...' : 'Update Profile' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Password Settings -->
    <div v-if="activeTab === 'password'" class="mt-6">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
        
        <form @submit.prevent="updatePassword" class="space-y-6">
          <div>
            <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              id="currentPassword"
              type="password"
              v-model="passwordForm.currentPassword"
              class="input mt-1"
              :disabled="isUpdatingPassword"
            />
          </div>
          
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
            <input
              id="newPassword"
              type="password"
              v-model="passwordForm.newPassword"
              class="input mt-1"
              :disabled="isUpdatingPassword"
            />
          </div>
          
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              v-model="passwordForm.confirmPassword"
              class="input mt-1"
              :disabled="isUpdatingPassword"
            />
          </div>
          
          <div v-if="passwordError" class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">
                  {{ passwordError }}
                </p>
              </div>
            </div>
          </div>
          
          <div v-if="passwordSuccess" class="rounded-md bg-green-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">
                  Password updated successfully
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              class="btn-primary"
              :disabled="isUpdatingPassword"
            >
              <svg v-if="isUpdatingPassword" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isUpdatingPassword ? 'Updating...' : 'Update Password' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Posts Settings -->
    <div v-if="activeTab === 'posts'" class="mt-6">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Manage Posts</h2>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Featured
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="post in posts" :key="post.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ post.title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ post.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ post.category }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button 
                    @click="togglePostVisibility(post.id)"
                    :class="[
                      post.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                    ]"
                  >
                    {{ post.featured ? 'Featured' : 'Not Featured' }}
                  </button>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex space-x-2">
                    <router-link :to="`/post/${post.id}`" class="text-primary-600 hover:text-primary-900">
                      View
                    </router-link>
                    <button 
                      @click="deletePost(post.id)"
                      class="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>