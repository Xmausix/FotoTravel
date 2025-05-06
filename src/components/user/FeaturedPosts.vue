<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import { formatDate } from '../../utils/formatters'

const router = useRouter()
const postsStore = usePostsStore()

const featuredPosts = computed(() => postsStore.getFeaturedPosts)

function goToPost(id: string) {
  router.push(`/post/${id}`)
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Interesujące podróże</h2>
        <p class="mt-4 text-xl text-gray-500">Zobacz moje najciekawsze podróże!</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="post in featuredPosts"
          :key="post.id"
          class="card group cursor-pointer"
          @click="goToPost(post.id)"
        >
          <div class="aspect-w-16 aspect-h-9 overflow-hidden">
            <img
              :src="post.coverImage"
              :alt="post.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>{{ formatDate(post.date) }}</span>
              <span class="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                {{ post.category }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  class="h-8 w-8 rounded-full mr-2"
                />
                <span class="text-sm text-gray-700">{{ post.author.name }}</span>
              </div>
              <div class="text-sm text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ post.views }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <router-link to="/travels" class="btn-primary">
          Odwiedź wszystkie Posty
        </router-link>
      </div>
    </div>
  </section>
</template>