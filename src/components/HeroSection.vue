<script setup lang="ts">
  import { InputHTMLAttributes } from '@vue/runtime-dom'

  const emit = defineEmits<{ (e: 'searchTextUpdated', text: string): void }>()

  // TODO: how do I cast that event into a InputEvent? the html input will complain
  const newSearchText = (event: Event) => {
    emit('searchTextUpdated', (event.target as InputHTMLAttributes).value)
  }
</script>

<template>
  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="
            mx-auto
            max-w-md
            px-4
            sm:max-w-2xl sm:px-6 sm:text-center
            lg:px-0 lg:text-left lg:flex lg:items-center
          "
        >
          <div class="lg:py-24">
            <h1
              class="
                mt-4
                text-4xl
                tracking-tight
                font-extrabold
                text-white
                sm:mt-5 sm:text-6xl
                lg:mt-6
                xl:text-6xl
              "
            >
              <span class="block">A better way to</span>
              <span class="block text-indigo-400">browse recipes</span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-300
                sm:mt-5 sm:text-xl
                lg:text-lg
                xl:text-xl
              "
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
            <div class="mt-10 sm:mt-12">
              <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="email" class="sr-only">Cerca ricetta...</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Cerca ricetta..."
                      class="
                        block
                        w-full
                        px-4
                        py-3
                        rounded-md
                        border-0
                        text-base text-gray-900
                        placeholder-gray-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-300
                        focus:ring-offset-gray-900
                      "
                      @input="newSearchText"
                    />
                  </div>
                  <!-- <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">Cerca ricetta</button>
                        </div> -->
                </div>
                <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                  Cerca tra le mille fighissime e curatissime ricette di Sara
                </p>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div
            class="
              mx-auto
              max-w-md
              px-4
              sm:max-w-2xl sm:px-6
              lg:max-w-none lg:px-0
            "
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              class="
                w-full
                lg:absolute
                lg:inset-y-0
                lg:left-0
                lg:h-full
                lg:w-auto
                lg:max-w-none
              "
              src="https://vgirlnatural.files.wordpress.com/2014/10/johnny_automatic_soup_tureen.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
