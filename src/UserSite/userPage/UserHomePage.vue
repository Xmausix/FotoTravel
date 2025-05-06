<script setup lang="ts">
import Hero from '../../Components/user/Hero.vue'
import FeaturedPosts from '../../Components/user/FeaturedPosts.vue'
</script>

<template>
  <div>
    <Hero />
    <FeaturedPosts />
    
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">O mnie</h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              Pomimo tego że na co dzień zajmuję się zawodowo czymś zgoła odmiennym niż fotografia jednak od zawsze „ pstrykanie” fotek było i wciąż jest moją wielką pasją, którą staram się rozwijać w ramach dostępnego czasu.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start">

                <p class="ml-3 text-base text-gray-500">
                  Z tego właśnie powodu zapraszam Cię na fascynującą podróż do miejsc które miałem okazję odwiedzić i do których chętnie wracam.

                  Będzie to foto opowieść o miejscach i ludziach których spotkałem podczas tych wypraw.

                  Będzie to foto-story o tym jak piękny jest nasz kraj i byś dał/a namówić się by te miejsca odwiedzić.

                  To nie będzie typowy przewodnik turystyczny bo takich jest wiele…

                  Chcę Ci te miejsca pokazać ze swojego punktu obiektywu oraz dodać do tego swój lakoniczny komentarz.

                  Były to często zorganizowane wyprawy z zaplanowaną każdą minutą lecz nie brakowało takich gdzie decyzję o wyjeździe podejmowałem w przeciągu paru sekund.

                  Bywało też że w ciągu jednego dnia jechałem gdzieś kilkaset kilometrów tylko po to by wykonać parę fotek przy jakiejś starej cerkwi.

                  Będę zaszczycony mogąc razem z Tobą przeżyć to jeszcze raz…
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <div class="relative aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://fototravel.com.pl/wp-content/uploads/2022/01/6A506E5B-67E6-4912-A8E1-CC2FE2E96FE0-scaled.jpeg"
                alt="Kapliczka w górcecku kościelnym"
                class="object-cover h-[75vh] w-[40vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Ostatnie podróże</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0096-52-scaled.jpg"
                alt="susiec"
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white"></h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://fototravel.com.pl/wp-content/uploads/2023/12/DSC_0003-3-scaled.jpg"
                alt="wzgórze polak"
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white"></h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0053-53-scaled.jpg"
                alt="halicz"
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white"></h3>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://fototravel.com.pl/wp-content/uploads/2023/11/DSC_0095-51-scaled.jpg"
                alt="cos"
                class="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
              <div class="absolute inset-0 flex items-end p-4">
                <h3 class="text-xl font-bold text-white"></h3>
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