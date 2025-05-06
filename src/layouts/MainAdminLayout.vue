<script setup lang="ts">
import NavigationBar from '../components/common/NavigationBar.vue'
import Footer from '../components/common/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">x
    <NavigationBar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>