<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePostsStore } from '../../stores/posts'
import PostCard from '../../Components/user/PostCard.vue'

const postsStore = usePostsStore()

const selectedCategory = ref('')
const selectedTag = ref('')
const searchQuery = ref('')

const categories = computed(() => postsStore.getCategories)
const allTags = computed(() => postsStore.getAllTags)

const filteredPosts = computed(() => {
  let filtered = postsStore.posts
  
  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  // Filter by tag
  if (selectedTag.value) {
    filtered = filtered.filter(post => post.tags.includes(selectedTag.value))
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

// Reset tag when category changes
watch(selectedCategory, () => {
  selectedTag.value = ''
})

function clearFilters() {
  selectedCategory.value = ''
  selectedTag.value = ''
  searchQuery.value = ''
}
</script>

<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">All Travel Stories</h1>
        <p class="mt-4 text-xl text-gray-500">Explore our collection of travel adventures from around the world</p>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              v-model="selectedCategory"
              class="input"
            >
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div>
            <label for="tag" class="block text-sm font-medium text-gray-700 mb-1">Tag</label>
            <select
              id="tag"
              v-model="selectedTag"
              class="input"
              :disabled="!allTags.length"
            >
              <option value="">All Tags</option>
              <option v-for="tag in allTags" :key="tag" :value="tag">
                {{ tag }}
              </option>
            </select>
          </div>
          <div>
            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              id="search"
              type="text"
              v-model="searchQuery"
              placeholder="Search posts..."
              class="input"
            />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <button
            @click="clearFilters"
            class="btn-outline text-sm"
          >
            Clear Filters
          </button>
        </div>
      </div>
      
      <!-- Results -->
      <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
      
      <!-- No results -->
      <div v-else class="text-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">No posts found</h3>
        <p class="mt-1 text-gray-500">Try changing your filters or search terms</p>
        <button
          @click="clearFilters"
          class="mt-4 btn-primary"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  </div>
</template>