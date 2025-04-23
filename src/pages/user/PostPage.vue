<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import PhotoGallery from '../../components/common/PhotoGallery.vue'
import { formatDate } from '../../utils/formatters'

const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

const postId = computed(() => route.params.id as string)
const post = computed(() => postsStore.getPost(postId.value))

// Handle not found post
watch(post, (newValue) => {
  if (!newValue && postId.value) {
    router.push('/travels')
  }
})

onMounted(() => {
  if (post.value) {
    postsStore.incrementViews(post.value.id)
  } else {
    router.push('/travels')
  }
})
</script>

<template>
  <div v-if="post" class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero section -->
      <div class="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
        <img 
          :src="post.coverImage" 
          :alt="post.title" 
          class="object-cover w-full h-full"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div class="flex items-center space-x-2 mb-4">
            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
              {{ post.category }}
            </span>
            <span class="text-white text-sm">{{ formatDate(post.date) }}</span>
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{{ post.title }}</h1>
          <div class="flex items-center mt-4">
            <img 
              :src="post.author.avatar" 
              :alt="post.author.name" 
              class="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <p class="text-white font-medium">{{ post.author.name }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content and Gallery -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Content -->
        <div class="lg:col-span-3">
          <div class="prose prose-lg max-w-none mb-8">
            <p class="text-xl text-gray-500 mb-6">{{ post.excerpt }}</p>
            <div v-html="post.content"></div>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-8">
            <span 
              v-for="tag in post.tags" 
              :key="tag" 
              class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
            >
              #{{ tag }}
            </span>
          </div>
          
          <div class="border-t border-gray-200 pt-6 flex justify-between items-center">
            <router-link to="/travels" class="btn-outline">
              Back to All Travels
            </router-link>
            <div class="flex items-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ post.views }} views
            </div>
          </div>
        </div>
        
        <!-- Gallery -->
        <div class="lg:col-span-2 sm:mt-8 lg:mt-0">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <PhotoGallery :images="post.images" />
        </div>
      </div>
    </div>
  </div>
</template>