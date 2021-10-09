import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './index.css'
import { routes } from './router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUmE_19zscLDnjVTkkd9maghsbzFWf4j4',
  authDomain: 'ricettedisara-c5323.firebaseapp.com',
  projectId: 'ricettedisara-c5323',
  storageBucket: 'ricettedisara-c5323.appspot.com',
  messagingSenderId: '1001955189623',
  appId: '1:1001955189623:web:806275a479b50b0ebbf772',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const recipesCollection = collection(db, 'recipes')
