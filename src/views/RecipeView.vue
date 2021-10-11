<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '../store'
  import { Recipe } from '../types/types'
  import { getDocs, query, where } from 'firebase/firestore'
  import { recipesCollection } from '../main'

  const store = useStore()
  const recipe = ref<Recipe>()
  const route = useRoute()

  onMounted(async () => {
    const q = query(recipesCollection, where('__name__', '==', route.params.id))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
      recipe.value = {
        id: doc.id,
        ...doc.data(),
        images: ['', '', '', ''],
      } as Recipe
    })
  })
</script>

<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="
            max-w-2xl
            mx-auto
            px-4
            flex
            items-center
            space-x-2
            sm:px-6
            lg:max-w-7xl lg:px-8
          "
        >
          <div class="flex items-center">
            <a href="/" class="mr-2 text-sm font-medium text-gray-900">
              Ricette
            </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-5 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
          <li class="text-sm">
            <a
              href="/"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ recipe?.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="
          mt-6
          max-w-2xl
          mx-auto
          sm:px-6
          lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8
        "
      >
        <div
          class="
            hidden
            aspect-w-3 aspect-h-4
            rounded-lg
            overflow-hidden
            lg:block
          "
        >
          <img
            :src="recipe?.images[0]"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="recipe?.images[1]"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="recipe?.images[2]"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div
          class="
            aspect-w-4 aspect-h-5
            sm:rounded-lg sm:overflow-hidden
            lg:aspect-w-3 lg:aspect-h-4
          "
        >
          <img
            :src="recipe?.images[3]"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="
          max-w-2xl
          mx-auto
          pt-10
          pb-16
          px-4
          sm:px-6
          lg:max-w-7xl
          lg:pt-16
          lg:pb-24
          lg:px-8
          lg:grid
          lg:grid-cols-3
          lg:grid-rows-[auto,auto,1fr]
          lg:gap-x-8
        "
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="
              text-2xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
          >
            {{ recipe?.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-md text-gray-600">{{ recipe?.time }} min</p>
        </div>

        <div
          class="
            py-10
            lg:pt-6
            lg:pb-16
            lg:col-start-1
            lg:col-span-2
            lg:border-r
            lg:border-gray-200
            lg:pr-8
          "
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Descrizione</h3>

            <div class="space-y-6">
              <p class="text-sm text-gray-600">{{ recipe?.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Ingredienti</h3>

            <div class="mt-4">
              <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                <li
                  v-for="ingredient in recipe?.ingredients"
                  :key="ingredient"
                  class="text-gray-400"
                >
                  <span class="text-gray-600">{{ ingredient }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Procedimento</h2>

            <div class="mt-4 space-y-6">
              <p class="text-base text-gray-900">{{ recipe?.instructions }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
