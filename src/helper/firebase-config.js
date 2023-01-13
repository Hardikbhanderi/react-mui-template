import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAz_dTjQeQQVxFiLw5u0cAzKkzs0AvaJM8',
  authDomain: 'materio-login.firebaseapp.com',
  projectId: 'materio-login',
  storageBucket: 'materio-login.appspot.com',
  messagingSenderId: '608877957397',
  appId: '1:608877957397:web:55221ea3baf4f11158991c',
  measurementId: 'G-9K5H8Y76H8'
}

export const app = initializeApp(firebaseConfig)
