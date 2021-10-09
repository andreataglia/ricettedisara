<script setup lang="ts">
  import RecipesSection from '../components/RecipesSection.vue'
  import HeroSection from '../components/HeroSection.vue'
  import { ref } from 'vue'
  import { Filter } from '../types/types'
  import CustomMenu from '../components/CustomMenu.vue'

  const activeFilter = ref<Filter>({ maxTime: 20 })

  const searchTextUpdated = (text: string) => {
    activeFilter.value.textual = text
  }

  const filterUpdatedFromMenu = (newFilter: Filter) => {
    activeFilter.value = { ...newFilter, textual: activeFilter.value.textual }
  }
</script>

<template>
  <div class="min-h-screen">
    <div class="relative overflow-hidden">
      <CustomMenu @filter-update="filterUpdatedFromMenu" />
      <main>
        <HeroSection @search-text-updated="searchTextUpdated" />
        <RecipesSection :active-filters="activeFilter" />
      </main>
    </div>
  </div>
</template>
