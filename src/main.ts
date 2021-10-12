import { createApp } from 'vue'
import { routes } from './router'
import { createRouter, createWebHashHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  collection,
  getFirestore,
  enableIndexedDbPersistence,
} from 'firebase/firestore'
import { key, store } from './store'

const app = createApp(App)

// store
app.use(store, key)

// router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(router)

app.mount('#app')

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
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code == 'failed-precondition') {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//     console.error('db persistance failed-precondition')
//   } else if (err.code == 'unimplemented') {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//     console.error('db persistance unimplemented')
//   }
// })
export const recipesCollection = collection(db, 'recipes')
