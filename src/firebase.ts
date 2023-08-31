// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBw8m-CaUL2cr5Qbh2joHAf-U3AhKDoSQ',
  authDomain: 'cursodefirebase-e1c2d.firebaseapp.com',
  projectId: 'cursodefirebase-e1c2d',
  storageBucket: 'cursodefirebase-e1c2d.appspot.com',
  messagingSenderId: '990793969518',
  appId: '1:990793969518:web:d14edf0b7b37045a851b7f'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
