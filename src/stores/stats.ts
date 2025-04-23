import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  // Mock data for demo purposes
  const pageViews = ref({
    total: 5820,
    today: 234,
    yesterday: 189,
    weekly: 1342,
    monthly: 5820
  })

  const imageViews = ref({
    total: 9450,
    today: 421,
    yesterday: 387,
    weekly: 2245,
    monthly: 9450
  })

  const mostViewedPosts = ref([
    { id: '3', title: 'Hiking the Inca Trail to Machu Picchu', views: 1578 },
    { id: '5', title: 'Culinary Tour of Northern Italy', views: 1342 },
    { id: '1', title: 'Exploring the Hidden Beaches of Thailand', views: 1250 },
    { id: '2', title: 'A Week in the Heart of Tokyo', views: 982 },
    { id: '4', title: 'Safari Adventure in Tanzania', views: 865 }
  ])

  const messageStats = ref({
    total: 78,
    unread: 23,
    thisWeek: 12
  })

  const weeklyViewsData = ref([
    { day: 'Mon', views: 120 },
    { day: 'Tue', views: 145 },
    { day: 'Wed', views: 232 },
    { day: 'Thu', views: 254 },
    { day: 'Fri', views: 265 },
    { day: 'Sat', views: 187 },
    { day: 'Sun', views: 139 }
  ])

  const categoryViewsData = ref([
    { name: 'Beach', views: 1458 },
    { name: 'Mountain', views: 1789 },
    { name: 'City', views: 1254 },
    { name: 'Wildlife', views: 865 },
    { name: 'Food', views: 1342 }
  ])

  // Getters
  const totalViews = computed(() => pageViews.value.total)
  const totalMessages = computed(() => messageStats.value.total)
  const unreadMessages = computed(() => messageStats.value.unread)
  
  // For simulating real-time updates in demo
  function incrementPageViews() {
    pageViews.value.total += 1
    pageViews.value.today += 1
    pageViews.value.weekly += 1
    pageViews.value.monthly += 1
  }

  function incrementImageViews() {
    imageViews.value.total += 1
    imageViews.value.today += 1
    imageViews.value.weekly += 1
    imageViews.value.monthly += 1
  }

  function incrementPostView(postId: string) {
    const post = mostViewedPosts.value.find(p => p.id === postId)
    if (post) {
      post.views += 1
      mostViewedPosts.value.sort((a, b) => b.views - a.views)
    }
  }

  return {
    pageViews,
    imageViews,
    mostViewedPosts,
    messageStats,
    weeklyViewsData,
    categoryViewsData,
    totalViews,
    totalMessages,
    unreadMessages,
    incrementPageViews,
    incrementImageViews,
    incrementPostView
  }
})