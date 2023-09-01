<script setup lang="ts">
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted, ref } from 'vue'

const todos = ref()

async function signOutUser() {
  await signOut(auth)
}

async function getTodos() {
  const collectionRef = collection(db, 'todos')
  const todosSnapshot = await getDocs(collectionRef)
  todos.value = todosSnapshot.docs.map((doc) => {
    return {
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      expires_at: doc.data().expires_at,
      priority: doc.data().priority
    }
  })
}

onMounted(() => {
  getTodos() // Get Todos when the page loads for first time or after refreshing it
})
</script>

<template>
  <nav>
    <h3>MyTodos</h3>
    <button @click="signOutUser">Cerrar Sesion</button>
  </nav>
  {{ todos }}
</template>

<style scoped>
nav {
  display: flex;
  padding: 15px 10px;
  background-color: whitesmoke;
  justify-content: space-between;
}
h3 {
  margin: 0;
}
</style>
