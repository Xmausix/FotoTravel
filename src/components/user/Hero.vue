<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentBg = ref(0)
const isTransitioning = ref(false)

const backgrounds = [
  {
    image: 'https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0086-42-scaled.jpg',
    title: 'Odkrywaj',
    subtitle: 'Niesamowite miejsca nie wychodząc z domu!'
  },
  {
    image: 'https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0028-28-scaled.jpg',
    title: 'Odkrywaj',
    subtitle: 'Niesamowite miejsca nie wychodząc z domu'
  },
  {
    image: 'https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0025-25-scaled.jpg',
    title: 'Odkrywaj',
    subtitle: 'Niesamowite miejsca nie wychodząc z domu'
  }
]

function goToTravels() {
  router.push('/travels')
}

function nextBackground() {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  setTimeout(() => {
    currentBg.value = (currentBg.value + 1) % backgrounds.length
    isTransitioning.value = false
  }, 500)
}

onMounted(() => {
  // Auto-rotate backgrounds
  const interval = setInterval(nextBackground, 5000)
  return () => clearInterval(interval)
})
</script>

<template>
  <div class="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
    <!-- Background images with transitions -->
    <div 
      v-for="(bg, index) in backgrounds" 
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bg.image})`, opacity: index === currentBg ? 1 : 0 }"
    ></div>
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <!-- Content -->
    <div class="relative z-10 flex h-full items-center justify-center text-center text-white">
      <div class="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 
          class="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl transition-all duration-500"
          :class="isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'"
        >
          {{ backgrounds[currentBg].title }}
        </h1>
        <p 
          class="mb-8 text-xl sm:text-2xl transition-all duration-500 delay-100"
          :class="isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'"
        >
          {{ backgrounds[currentBg].subtitle }}
        </p>
        <button 
          @click="goToTravels" 
          class="btn-primary text-lg transition-all duration-500 delay-200 hover:scale-105"
          :class="isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'"
        >
          Wszystkie podróże
        </button>
      </div>
    </div>
    
    <!-- Navigation dots -->
    <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
      <button
        v-for="(_, index) in backgrounds"
        :key="index"
        @click="currentBg = index"
        class="h-3 w-3 rounded-full transition-all duration-300"
        :class="currentBg === index ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-50 hover:bg-opacity-75'"
      ></button>
    </div>
  </div>
</template>