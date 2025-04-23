import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)
  
  // For demo purposes, we'll hardcode a user
  const demoUser: User = {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
  }

  function login(email: string, password: string) {
    // In a real app, this would make an API call
    return new Promise<User>((resolve, reject) => {
      if (email === 'admin@example.com' && password === 'password') {
        user.value = demoUser
        resolve(demoUser)
      } else {
        reject(new Error('Invalid credentials'))
      }
    })
  }

  function logout() {
    user.value = null
  }

  function updateProfile(updatedUser: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...updatedUser }
    }
  }

  // Initialize the user from localStorage on page load
  if (typeof window !== 'undefined') {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        user.value = JSON.parse(storedUser)
      } catch (e) {
        localStorage.removeItem('user')
      }
    }
  }

  // Save user to localStorage whenever it changes
  watch(user, (newUser) => {
    if (typeof window !== 'undefined') {
      if (newUser) {
        localStorage.setItem('user', JSON.stringify(newUser))
      } else {
        localStorage.removeItem('user')
      }
    }
  }, { deep: true })

  return {
    user,
    isAuthenticated,
    login,
    logout,
    updateProfile
  }
})