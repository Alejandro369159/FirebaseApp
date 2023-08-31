<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const isLoginShown = ref(true)

const email = ref('')
const password = ref('')

async function login() {
  try {
    const loginRequest = await signInWithEmailAndPassword(auth, email.value, password.value)
  } catch (error) {
    alert(error)
  }
}

async function signUp() {
  try {
    const signUpRequest = await createUserWithEmailAndPassword(auth, email.value, password.value)
    isLoginShown.value = true
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div v-if="isLoginShown">
    <h1>Login</h1>
    <div class="credentials-container">
      <label for="email">Email</label>
      <input v-model="email" type="email" />
      <label for="password">Contraseña</label>
      <input v-model="password" type="password" />
    </div>
    <div class="btn-container">
      <button @click="login" type="button">Iniciar Sesión</button>
      <button @click="isLoginShown = false" type="button">Registrarme</button>
    </div>
  </div>
  <div v-else>
    <h1>Registro</h1>
    <div class="credentials-container">
      <p>Crea una nueva cuenta con correo y contraseña</p>
      <label for="email">Email</label>
      <input v-model="email" type="email" />
      <label for="password">Contraseña</label>
      <input v-model="password" type="password" />
    </div>
    <div class="btn-container">
      <button @click="isLoginShown = true" type="button">Cancelar</button>
      <button @click="signUp" type="button">Registrame</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.credentials-container {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  width: 20%;
  max-width: 1200px;
  background-color: whitesmoke;
  border: 0.5px solid gray;
  border-radius: 10px;
}
label,
input {
  margin-left: 10px;
}
button {
  margin: 20px auto;
  display: block;
  padding: 10px 15px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}
.btn-container {
  margin: auto;
  width: 300px;
  display: flex;
}
p {
  padding-inline: 10px;
}
</style>
