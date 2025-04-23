<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const postsStore = usePostsStore()
const authStore = useAuthStore()

const categories = computed(() => postsStore.getCategories)
const allTags = computed(() => postsStore.getAllTags)

const form = ref({
  title: '',
  excerpt: '',
  content: '',
  coverImage: '',
  images: ['', '', ''],
  category: '',
  tags: [] as string[],
  newTag: '',
  featured: false
})

const isSubmitting = ref(false)
const error = ref('')

// For image file inputs (would handle file uploads in a real app)
const imageFiles = ref([] as File[])

function addNewTag() {
  if (form.value.newTag && !form.value.tags.includes(form.value.newTag)) {
    form.value.tags.push(form.value.newTag)
    form.value.newTag = ''
  }
}

function removeTag(tag: string) {
  form.value.tags = form.value.tags.filter(t => t !== tag)
}

function addImageField() {
  if (form.value.images.length < 15) {
    form.value.images.push('')
  }
}

function removeImageField(index: number) {
  form.value.images.splice(index, 1)
}

function submitForm() {
  // Basic validation
  if (!form.value.title || !form.value.excerpt || !form.value.content || !form.value.coverImage || !form.value.category) {
    error.value = 'Please fill all required fields'
    return
  }
  
  isSubmitting.value = true
  error.value = ''
  
  // Remove empty image URLs
  const images = form.value.images.filter(img => img)
  
  // In a real app, we would upload images first
  
  setTimeout(() => {
    try {
      // Add post to store
      const newPost = postsStore.addPost({
        title: form.value.title,
        excerpt: form.value.excerpt,
        content: form.value.content,
        coverImage: form.value.coverImage,
        images: images,
        category: form.value.category,
        tags: form.value.tags,
        date: new Date().toISOString().split('T')[0],
        author: {
          name: authStore.user?.name || 'Admin',
          avatar: authStore.user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
        },
        featured: form.value.featured
      })
      
      // Redirect to new post
      router.push(`/post/${newPost.id}`)
    } catch (err: any) {
      error.value = err.message || 'Failed to create post'
      isSubmitting.value = false
    }
  }, 1000)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Add New Post</h1>
    
    <div class="mt-6">
      <div class="card p-6">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Basic Info -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title *</label>
            <input
              id="title"
              type="text"
              v-model="form.title"
              class="input mt-1"
              :disabled="isSubmitting"
              required
            />
          </div>
          
          <div>
            <label for="excerpt" class="block text-sm font-medium text-gray-700">Excerpt *</label>
            <textarea
              id="excerpt"
              v-model="form.excerpt"
              rows="2"
              class="input mt-1"
              :disabled="isSubmitting"
              required
            ></textarea>
            <p class="mt-1 text-sm text-gray-500">
              A short summary that appears in cards and previews
            </p>
          </div>
          
          <div>
            <label for="content" class="block text-sm font-medium text-gray-700">Content *</label>
            <textarea
              id="content"
              v-model="form.content"
              rows="10"
              class="input mt-1"
              :disabled="isSubmitting"
              required
            ></textarea>
            <p class="mt-1 text-sm text-gray-500">
              You can use HTML tags for formatting
            </p>
          </div>
          
          <!-- Category and Tags -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700">Category *</label>
              <div class="mt-1">
                <select
                  id="category"
                  v-model="form.category"
                  class="input"
                  :disabled="isSubmitting"
                  required
                >
                  <option value="">Select Category</option>
                  <option 
                    v-for="category in categories" 
                    :key="category" 
                    :value="category"
                  >
                    {{ category }}
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label for="newTag" class="block text-sm font-medium text-gray-700">Tags</label>
              <div class="mt-1 flex">
                <input
                  id="newTag"
                  type="text"
                  v-model="form.newTag"
                  class="input flex-1"
                  :disabled="isSubmitting"
                  placeholder="Add a tag"
                  @keydown.enter.prevent="addNewTag"
                />
                <button
                  type="button"
                  class="btn-outline ml-2"
                  :disabled="isSubmitting || !form.newTag"
                  @click="addNewTag"
                >
                  Add
                </button>
              </div>
              
              <div class="mt-2 flex flex-wrap gap-2">
                <div
                  v-for="tag in form.tags"
                  :key="tag"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {{ tag }}
                  <button
                    type="button"
                    class="ml-1.5 flex-shrink-0 text-primary-600 hover:text-primary-900"
                    @click="removeTag(tag)"
                    :disabled="isSubmitting"
                  >
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Images -->
          <div>
            <label for="coverImage" class="block text-sm font-medium text-gray-700">Cover Image URL *</label>
            <input
              id="coverImage"
              type="text"
              v-model="form.coverImage"
              class="input mt-1"
              :disabled="isSubmitting"
              required
            />
            <p class="mt-1 text-sm text-gray-500">
              Enter a URL to an image (e.g., from Pexels, Unsplash)
            </p>
          </div>
          
          <div>
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">Gallery Images (up to 15)</label>
              <button
                type="button"
                class="btn-outline text-sm py-1"
                :disabled="isSubmitting || form.images.length >= 15"
                @click="addImageField"
              >
                Add Image
              </button>
            </div>
            
            <div class="mt-2 space-y-3">
              <div
                v-for="(image, index) in form.images"
                :key="index"
                class="flex items-center"
              >
                <input
                  type="text"
                  v-model="form.images[index]"
                  class="input flex-1"
                  :disabled="isSubmitting"
                  :placeholder="`Image URL ${index + 1}`"
                />
                <button
                  type="button"
                  class="ml-2 text-red-600 hover:text-red-900"
                  :disabled="isSubmitting || form.images.length <= 1"
                  @click="removeImageField(index)"
                >
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <p class="mt-1 text-sm text-gray-500">
              Enter URLs to additional images for the gallery
            </p>
          </div>
          
          <!-- Featured Toggle -->
          <div class="flex items-center">
            <input
              id="featured"
              type="checkbox"
              v-model="form.featured"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              :disabled="isSubmitting"
            />
            <label for="featured" class="ml-2 block text-sm text-gray-900">
              Feature this post on homepage
            </label>
          </div>
          
          <!-- Error Message -->
          <div v-if="error" class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">
                  {{ error }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="btn-primary"
              :disabled="isSubmitting"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Creating Post...' : 'Publish Post' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>