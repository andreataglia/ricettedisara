import { Recipe } from './types/types'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  recipes: Recipe[]
}

export const store = createStore<State>({
  state: {
    recipes: [],
  },
  mutations: {
    addRecipe(state, recipe: Recipe) {
      state.recipes.push(recipe)
    },
    resetRecipes(state) {
      state.recipes = []
    },
  },
})

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()
export function useStore() {
  return baseUseStore(key)
}
