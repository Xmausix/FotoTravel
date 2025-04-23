<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const isOpen = ref(false)
const currentIndex = ref(0)
const loaded = ref<{[key: number]: boolean}>({})

function openGallery(index: number) {
  currentIndex.value = index
  isOpen.value = true
  document.body.classList.add('overflow-hidden')
}

function closeGallery() {
  isOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function previous() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return
  
  if (e.key === 'Escape') {
    closeGallery()
  } else if (e.key === 'ArrowRight') {
    next()
  } else if (e.key === 'ArrowLeft') {
    previous()
  }
}

function imageLoaded(index: number) {
  loaded.value[index] = true
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

watch(
  () => props.images,
  () => {
    loaded.value = {}
  }
)
</script>

<template>
  <div>
    <!-- Thumbnail grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-transform hover:scale-[1.02]"
        @click="openGallery(index)"
      >
        <img 
          :src="image" 
          :alt="`Gallery image ${index + 1}`" 
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Fullscreen gallery -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      @click="closeGallery"
    >
      <button 
        class="absolute top-4 right-4 z-50 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        @click="closeGallery"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button 
        class="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        @click.stop="previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        class="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        @click.stop="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="relative mx-auto max-w-6xl">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          v-show="currentIndex === index"
          class="flex h-full w-full items-center justify-center"
        >
          <div v-if="!loaded[index]" class="flex items-center justify-center">
            <svg class="h-12 w-12 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <img 
            :src="image" 
            :alt="`Gallery image ${index + 1}`" 
            class="max-h-[80vh] max-w-full transition-opacity duration-300 ease-in-out"
            :class="loaded[index] ? 'opacity-100' : 'opacity-0'"
            @click.stop
            @load="imageLoaded(index)"
          />
        </div>

        <div class="absolute bottom-4 left-0 right-0 flex justify-center">
          <div class="flex space-x-2 rounded-full bg-black bg-opacity-50 px-4 py-2">
            <button 
              v-for="(_, index) in images" 
              :key="index"
              class="h-2 w-2 rounded-full"
              :class="currentIndex === index ? 'bg-white' : 'bg-gray-500'"
              @click.stop="currentIndex = index"
            ></button>
          </div>
          <div class="ml-4 rounded-full bg-black bg-opacity-50 px-4 py-1 text-sm text-white">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>