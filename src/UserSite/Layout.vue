<script setup lang="ts">
import NavBar from '../UserSite/components/Common/Navbar.vue'
import Footer from '../UserSite/components/Common/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

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