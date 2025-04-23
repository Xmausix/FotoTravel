<script setup lang="ts">
import Sidebar from '../components/admin/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Sidebar />
    
    <div class="lg:pl-64 flex flex-col flex-1">
      <main class="flex-1 pb-8">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <router-view v-slot="{ Component }">
              <transition name="page" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>