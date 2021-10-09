import MainView from './components/MainView.vue'
import RecipeView from './components/RecipeView.vue'

export const routes = [
  { path: '/', component: MainView },
  { path: '/recipe', component: RecipeView },
]
