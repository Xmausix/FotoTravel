<script setup lang="ts">
import Hero from '../../components/user/Hero.vue'
import FeaturedPosts from '../../components/user/FeaturedPosts.vue'
</script>

<template>
  <div>
    <Hero />
    <FeaturedPosts />
    
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">About Our Travel Blog</h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              Wanderlust is more than just a travel blog – it's a community of passionate travelers sharing authentic experiences and inspiring others to explore our beautiful planet.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="ml-3 text-base text-gray-500">
                  <span class="font-medium text-gray-900">Authentic Stories</span> - Real adventures from real travelers, not generic tourist guides
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="ml-3 text-base text-gray-500">
                  <span class="font-medium text-gray-900">Stunning Photography</span> - Beautiful images that transport you to destinations around the world
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="ml-3 text-base text-gray-500">
                  <span class="font-medium text-gray-900">Practical Tips</span> - Useful advice to help you plan your own adventures
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="ml-3 text-base text-gray-500">
                  <span class="font-medium text-gray-900">Responsible Travel</span> - Committed to promoting sustainable and ethical tourism
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <div class="relative aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Traveler writing in journal near mountain lake" 
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Popular Destinations</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Santorini, Greece" 
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white">Greece</h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bali, Indonesia" 
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white">Indonesia</h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/161212/rio-de-janeiro-olympics-games-brazil-2016-161212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Rio de Janeiro, Brazil" 
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white">Brazil</h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Kyoto, Japan" 
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white">Japan</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <router-link to="/travels" class="btn-primary">
            Explore All Destinations
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>