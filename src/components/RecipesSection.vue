<script setup lang="ts">
import { computed } from 'vue';
import { Recipe, PORTATA, Filter } from '../types/types';

const props = defineProps<{
  activeFilters?: Filter
}>()

const filteredRecipes = computed<Recipe[]>(() => {
  let ret = recipes;
  if(!props.activeFilters) return ret;
  if(props.activeFilters.textual){
    ret = ret.filter(r => r.name.includes(props.activeFilters!.textual!));
  }
  if(props.activeFilters.maxTime && props.activeFilters.maxTime > 0){
    ret = ret.filter(r => r.time <= props.activeFilters!.maxTime!);
  }
  return ret; 
})

const recipes: Recipe[] = [
  { name: 'Carbonara alla Lele', time: 15, description: 'buona', ingredients: 'uova, pasta', portata: PORTATA.PRIMO},
  { name: 'Pasta ca sassa', time: 30, description: 'semplice', ingredients: 'sassa, pasta', portata: PORTATA.PRIMO},
]
</script>

<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-base font-semibold tracking-wider text-indigo-600 uppercase">Apri filtri</h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Ricette
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Stai filtrando per: {{props.activeFilters}}
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(recipe, i) in filteredRecipes" :key="i" class="pt-4">
            <div class="flow-root bg-red-50 rounded-lg px-4 pb-6">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-start text-left rounded-md shadow-lg">
                    <!-- <img class="w-16 h-16 rounded-md lg:w-20 lg:h-20" src="https://simply-delicious-food.com/wp-content/uploads/2020/09/Spaghetti-Carbonara-1.jpg" alt="" /> -->
                  </span>
                </div>
                <h3 class="mt-3 text-lg font-medium text-gray-900 tracking-tight">{{recipe.name}}</h3>
                <p class="mt-2 text-base text-gray-500">
                  {{recipe.time}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>