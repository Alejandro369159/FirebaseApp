<script setup lang="ts">
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
async function signOutUser() {
  await signOut(auth)
}
</script>

<template>
  <nav>
    <h2>My Todos ✍</h2>
    <button @click="signOutUser">Cerrar Sesion</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 15px 10px;
  background-color: white;
  justify-content: space-between;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
h2 {
  margin: 0;
}
button {
  background-color: rgb(204, 0, 0);
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
