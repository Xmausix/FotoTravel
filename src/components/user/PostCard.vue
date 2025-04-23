<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '../../utils/formatters'
import type { Post } from '../../stores/posts'

const props = defineProps<{
  post: Post
}>()

const router = useRouter()

function goToPost(id: string) {
  router.push(`/post/${id}`)
}
</script>

<template>
  <div 
    class="card group cursor-pointer h-full flex flex-col"
    @click="goToPost(post.id)"
  >
    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
      <img 
        :src="post.coverImage" 
        :alt="post.title" 
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>{{ formatDate(post.date) }}</span>
        <span class="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
          {{ post.category }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {{ post.title }}
      </h3>
      <p class="text-gray-600 mb-4 flex-grow">{{ post.excerpt }}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in post.tags" 
          :key="tag" 
          class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
        >
          #{{ tag }}
        </span>
      </div>
      
      <div class="flex items-center justify-between mt-auto">
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
</template>