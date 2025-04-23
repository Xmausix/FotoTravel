<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from './stores/auth'

// Initialize auth store
const authStore = useAuthStore()
const route = useRoute()

// Update page title based on route
watch(
  () => route.name,
  (newRouteName) => {
    document.title = `Travel Blog | ${String(newRouteName).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
  },
  { immediate: true }
)
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>