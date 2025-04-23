<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStatsStore } from '../../stores/stats'
import { usePostsStore } from '../../stores/posts'
import StatsCard from '../../components/admin/StatsCard.vue'
import { numberWithCommas } from '../../utils/formatters'

const statsStore = useStatsStore()
const postsStore = usePostsStore()

// Mock chart data
const weeklyViewsLabels = ref([])
const weeklyViewsData = ref([])
const categoryLabels = ref([])
const categoryData = ref([])

onMounted(() => {
  // Initialize chart data from store
  weeklyViewsLabels.value = statsStore.weeklyViewsData.map(item => item.day)
  weeklyViewsData.value = statsStore.weeklyViewsData.map(item => item.views)
  
  categoryLabels.value = statsStore.categoryViewsData.map(item => item.name)
  categoryData.value = statsStore.categoryViewsData.map(item => item.views)
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    
    <!-- Stats cards -->
    <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard 
        title="Total Page Views" 
        :value="numberWithCommas(statsStore.pageViews.total)"
        icon="chart"
        color="primary"
        :change="{
          value: 12,
          type: 'increase'
        }"
      />
      
      <StatsCard 
        title="Photo Views" 
        :value="numberWithCommas(statsStore.imageViews.total)"
        icon="image"
        color="secondary"
        :change="{
          value: 8,
          type: 'increase'
        }"
      />
      
      <StatsCard 
        title="Blog Posts" 
        :value="postsStore.posts.length"
        icon="post"
        color="accent"
      />
      
      <StatsCard 
        title="Messages" 
        :value="`${statsStore.messageStats.unread} / ${statsStore.messageStats.total}`"
        icon="message"
        color="warning"
        :change="{
          value: 5,
          type: 'increase'
        }"
      />
    </div>
    
    <!-- Charts -->
    <div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Weekly Views</h2>
        <div class="h-60">
          <!-- Simplified chart representation -->
          <div class="h-full flex items-end justify-between">
            <div 
              v-for="(views, index) in weeklyViewsData" 
              :key="index" 
              class="w-full flex flex-col items-center justify-end"
            >
              <div 
                class="bg-primary-500 rounded-t-md w-8" 
                :style="`height: ${(views / Math.max(...weeklyViewsData)) * 80}%`"
              ></div>
              <div class="mt-2 text-xs text-gray-500">{{ weeklyViewsLabels[index] }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Category Views</h2>
        <div class="h-60">
          <!-- Simplified chart representation -->
          <div class="h-full flex flex-col justify-between">
            <div 
              v-for="(category, index) in categoryLabels" 
              :key="index" 
              class="flex items-center mb-4"
            >
              <div class="w-24 text-sm text-gray-700">{{ category }}</div>
              <div class="flex-1 ml-2">
                <div 
                  class="bg-secondary-500 h-6 rounded"
                  :style="`width: ${(categoryData[index] / Math.max(...categoryData)) * 100}%`"
                ></div>
              </div>
              <div class="ml-2 text-sm text-gray-500">{{ categoryData[index] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Top posts -->
    <div class="mt-8">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Most Viewed Posts</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post Title
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="post in statsStore.mostViewedPosts" :key="post.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ post.title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ numberWithCommas(post.views) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <router-link :to="`/post/${post.id}`" class="text-primary-600 hover:text-primary-900">
                    View
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- Recent messages -->
    <div class="mt-8">
      <div class="card p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Recent Messages</h2>
        <div class="overflow-hidden">
          <ul class="divide-y divide-gray-200">
            <li v-for="message in postsStore.messages" :key="message.id" class="py-4">
              <div class="flex space-x-3">
                <div class="flex-1 space-y-1">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium">{{ message.name }}</h3>
                    <p class="text-sm text-gray-500">{{ message.date }}</p>
                  </div>
                  <p class="text-sm text-gray-500">{{ message.email }}</p>
                  <p class="text-sm text-gray-700">{{ message.message }}</p>
                </div>
                <div class="flex-shrink-0">
                  <span 
                    class="inline-flex h-2 w-2 rounded-full"
                    :class="message.read ? 'bg-gray-300' : 'bg-green-400'"
                  ></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>