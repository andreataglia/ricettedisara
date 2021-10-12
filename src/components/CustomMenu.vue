<script setup lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { FilterIcon, XIcon } from '@heroicons/vue/outline'
  import { ref } from 'vue'
  import { Filter, Portata, MaxTimeFilters } from '../types/types'

  const activeFilter = ref<Filter>({})

  const emit = defineEmits<{ (e: 'filterUpdate', filter: Filter): void }>()

  const changeFilter = (filterType: keyof Filter, value: any) => {
    activeFilter.value[filterType] = value
    emit('filterUpdate', activeFilter.value)
  }

  const resetFilters = () => {
    activeFilter.value = {}
    emit('filterUpdate', activeFilter.value)
  }
</script>

<template>
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
          <div class="flex items-center justify-between w-full">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt=""
              />
            </a>
            <div class="-mr-2 flex items-center">
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
                <span class="text-gray-400 font-bold mr-4 hidden md:block">
                  Filtri
                </span>
                <FilterIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
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
                  focus:ring-red-600
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
                  space-x-2
                  px-3
                  py-1
                  rounded-md
                  text-base
                  font-medium
                  text-gray-900
                "
              >
                <div class="text-gray-400 text-sm py-1">Per tempo max</div>
                <span
                  v-for="time in MaxTimeFilters"
                  class="hover:underline cursor-pointer"
                  :class="{
                    underline:
                      activeFilter.maxTime && activeFilter.maxTime === time,
                  }"
                  @click="changeFilter('maxTime', time)"
                  >{{ time }}m</span
                >
              </div>
              <div
                class="
                  block
                  px-3
                  py-1
                  rounded-md
                  text-base
                  font-medium
                  text-gray-900
                  space-x-2
                "
              >
                <div class="text-gray-400 text-sm py-1">Per portata</div>
                <span
                  v-for="portata of Portata"
                  class="hover:underline cursor-pointer"
                  :class="{
                    underline: activeFilter.portata === portata,
                  }"
                  @click="changeFilter('portata', portata)"
                  >{{ portata }}</span
                >
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
                  bg-red-600
                  text-white
                  font-medium
                  hover:bg-red-700
                "
                @click="resetFilters"
                >Azzera filtri</PopoverButton
              >
              <PopoverButton
                class="
                  block
                  text-center
                  w-full
                  py-3
                  px-4
                  mt-3
                  rounded-md
                  shadow
                  bg-gray-100
                  text-gray-700
                  font-medium
                  hover:bg-gray-200
                "
                >Chiudi</PopoverButton
              >
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
