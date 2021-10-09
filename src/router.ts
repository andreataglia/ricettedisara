import MainView from './views/MainView.vue'
import RecipeView from './views/RecipeView.vue'

export const routes = [
  { path: '/', name: 'home', component: MainView },
  { path: '/recipe/:id', name: 'recipe', component: RecipeView },
]
