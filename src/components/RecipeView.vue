<script lang="ts" setup>
  const product = {
    name: 'Pasta ca sassa',
    time: '15 min',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Ricette', href: '#' },
      { id: 2, name: 'Primi', href: '#' },
    ],
    images: [
      {
        src: 'https://cdn.pngsumo.com/dish-free-vector-icons-designed-by-pause08-food-icon-png-png-food-icon-png-512_512.png',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://cdn.pngsumo.com/dish-free-vector-icons-designed-by-pause08-food-icon-png-png-food-icon-png-512_512.png',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://cdn.pngsumo.com/dish-free-vector-icons-designed-by-pause08-food-icon-png-png-food-icon-png-512_512.png',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://cdn.pngsumo.com/dish-free-vector-icons-designed-by-pause08-food-icon-png-png-food-icon-png-512_512.png',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
  const reviews = { href: '#', average: 4, totalCount: 117 }
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
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a
                :href="breadcrumb.href"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                {{ breadcrumb.name }}
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
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ product.name }}
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
            :src="product.images[0].src"
            :alt="product.images[0].alt"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[1].src"
              :alt="product.images[1].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[2].src"
              :alt="product.images[2].alt"
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
            :src="product.images[3].src"
            :alt="product.images[3].alt"
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
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-md text-gray-600">{{ product.time }}</p>
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
              <p class="text-sm text-gray-600">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Ingredienti</h3>

            <div class="mt-4">
              <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                <li
                  v-for="highlight in product.highlights"
                  :key="highlight"
                  class="text-gray-400"
                >
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Procedimento</h2>

            <div class="mt-4 space-y-6">
              <p class="text-base text-gray-900">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
