<script setup lang="ts">
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
</script>

<template>
  <nav>
    <button>Cerrar Sesion</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 15px 10px;
  background-color: whitesmoke;
  justify-content: end;
}
</style>
