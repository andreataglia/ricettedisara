<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { FilterIcon, XIcon } from '@heroicons/vue/outline'
  import { ChevronRightIcon } from '@heroicons/vue/solid'
  import RecipesSection from './RecipesSection.vue'
  import HeroSection from './HeroSection.vue'
  import { ref } from 'vue'
  import { Filter } from '../types/types'

  const activeFilter = ref<Filter>({ maxTime: 20 })

  const searchTextUpdated = (text: string) => {
    activeFilter.value.textual = text
  }
</script>

<template>
  <div class="min-h-screen">
    <div class="relative overflow-hidden">
      <Popover as="header" class="relative">
        <div class="bg-gray-900 pt-6">
          <nav
            class="
              relative
              max-w-7xl
              mx-auto
              flex
              items-center
              justify-between
              px-4
              sm:px-6
            "
            aria-label="Global"
          >
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt=""
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="
                      bg-gray-900
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-gray-800
                      focus:outline-none
                      focus:ring-2
                      focus-ring-inset
                      focus:ring-white
                    "
                  >
                    <span class="sr-only">Open main menu</span>
                    <FilterIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <a
                  v-for="item in [1, 2]"
                  :key="item"
                  class="text-base font-medium text-white hover:text-gray-300"
                  >{{ item }}</a
                >
              </div>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              z-10
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top
              md:hidden
            "
          >
            <div
              class="
                rounded-lg
                shadow-md
                bg-white
                ring-1 ring-black ring-opacity-5
                overflow-hidden
              "
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-600
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <div
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                    "
                  >
                    <span
                      class="hover:underline"
                      @click="activeFilter.maxTime = 15"
                      >15 min</span
                    >,
                    <span
                      class="hover:underline"
                      @click="activeFilter.maxTime = 30"
                      >30 min</span
                    >, 60+ min
                  </div>
                  <div
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                    "
                  >
                    Primo, Secondo, Contorno, Dolce
                  </div>
                </div>
                <div class="mt-6 px-5">
                  <PopoverButton
                    class="
                      block
                      text-center
                      w-full
                      py-3
                      px-4
                      rounded-md
                      shadow
                      bg-indigo-600
                      text-white
                      font-medium
                      hover:bg-indigo-700
                    "
                    >Chiudi</PopoverButton
                  >
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <main>
        <HeroSection @search-text-updated="searchTextUpdated" />
        <RecipesSection :active-filters="activeFilter" />
      </main>
    </div>
  </div>
</template>
