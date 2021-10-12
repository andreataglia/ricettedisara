<script setup lang="ts">
  import { getDocs, query } from 'firebase/firestore'
  import { computed, onMounted, reactive, ref } from 'vue'
  import { recipesCollection } from '../main'
  import { useStore } from '../store'
  import { Recipe, Filter } from '../types/types'

  const store = useStore()

  const props = defineProps<{
    activeFilters?: Filter
  }>()

  onMounted(async () => {
    const q = query(recipesCollection)
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
      store.commit('addRecipe', { ...doc.data(), id: doc.id } as Recipe)
    })
    recipesStillLoading.value = false
  })

  const filteredRecipes = computed<Recipe[]>(() => {
    let ret = store.state.recipes
    if (!props.activeFilters) return ret
    if (props.activeFilters.textual) {
      const searchChunks = props
        .activeFilters!.textual!.toLowerCase()
        .split(' ')
      ret = ret.filter((r) =>
        searchChunks.every((chunk) => r.name.toLowerCase().includes(chunk))
      )
    }
    if (
      props.activeFilters.maxTime &&
      parseInt(props.activeFilters.maxTime) > 0
    ) {
      ret = ret.filter((r) => r.time <= parseInt(props.activeFilters!.maxTime!))
    }
    if (props.activeFilters.portata) {
      ret = ret.filter((r) => r.portata === props.activeFilters?.portata)
    }
    return ret
  })

  const areFiltersEmpty = computed<boolean>(() => {
    return (
      !props.activeFilters?.maxTime &&
      !props.activeFilters?.portata &&
      !props.activeFilters?.textual
    )
  })

  const recipesStillLoading = ref(true)
</script>

<template>
  <div class="block bg-white py-8 sm:py-16 lg:py-16">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl sm:px-6
        lg:px-8 lg:max-w-7xl
      "
    >
      <p
        class="
          mt-2
          text-3xl
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl
        "
      >
        Ricette
      </p>
      <p
        class="
          mt-5
          max-w-prose
          mx-auto
          text-xl text-gray-500
          flex
          justify-center
          space-x-2
        "
      >
        <span class="text-sm" v-show="areFiltersEmpty"
          >Nessun filtro attivo</span
        >
        <span
          v-show="props.activeFilters?.maxTime"
          class="
            inline-flex
            items-center
            px-3
            py-0.5
            rounded-full
            text-sm
            font-medium
            bg-gray-100
            text-gray-800
          "
        >
          max {{ props.activeFilters?.maxTime }}m
        </span>
        <span
          v-show="props.activeFilters?.textual"
          class="
            inline-flex
            items-center
            px-3
            py-0.5
            rounded-full
            text-sm
            font-medium
            bg-gray-100
            text-gray-800
          "
        >
          contiene "{{ props.activeFilters?.textual }}"
        </span>
        <span
          v-show="props.activeFilters?.portata"
          class="
            inline-flex
            items-center
            px-3
            py-0.5
            rounded-full
            text-sm
            font-medium
            bg-gray-100
            text-gray-800
          "
        >
          è un {{ props.activeFilters?.portata?.toLowerCase() }}
        </span>
      </p>
      <div class="mt-12">
        <div
          v-if="recipesStillLoading"
          class="
            border border-red-300
            shadow
            rounded-md
            p-4
            max-w-sm
            w-full
            mx-auto
          "
        >
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-red-400 h-12 w-12"></div>
            <div class="flex-1 space-y-4 py-1">
              <div class="h-4 bg-red-400 rounded w-3/4"></div>
              <div class="space-y-2">
                <div class="h-4 bg-red-400 rounded"></div>
                <div class="h-4 bg-red-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(recipe, i) in filteredRecipes"
            :key="i"
            class="pt-4 cursor-pointer"
            @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
          >
            <div class="flow-root bg-red-50 rounded-lg px-4 pb-6">
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-start
                      text-left
                      rounded-md
                      shadow-lg
                    "
                  >
                    <img
                      class="w-16 h-16 rounded-md lg:w-20 lg:h-20"
                      src="https://cdn.pngsumo.com/dish-free-vector-icons-designed-by-pause08-food-icon-png-png-food-icon-png-512_512.png"
                      alt=""
                    />
                  </span>
                </div>
                <h3
                  class="mt-3 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ recipe.name }}
                </h3>
                <p class="mt-2 text-base text-gray-500">
                  {{ recipe.time }} min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
