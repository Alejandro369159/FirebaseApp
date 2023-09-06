<script setup lang="ts">
import { db } from '@/firebase'
import router from '@/router'
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const todo = ref({
  title: '',
  description: '',
  priority: 0,
  status: '',
  expires_at: ''
})

async function getTodo() {
  // Traer una sola tarea
  const docRef = doc(db, 'todos', route.params.id as string)
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    // Asignar esa tarea a una variable
    todo.value = docSnapshot.data()
  }
}

function goToMenu() {
  router.push('/tareas')
}

async function completeTodo() {
  //Status => 'completed'
  try {
    const docRef = doc(db, 'todos', route.params.id as string)
    await updateDoc(docRef, {
      status: 'completed'
    })
  } catch (error) {
    alert(error)
  }
}

async function deleteTodo() {
  //Eliminar la tarea de firebase
  try {
    await deleteDoc(doc(db, 'todos', route.params.id as string))
    router.push('/tareas')
  } catch (error) {
    alert(error)
  }
}
onMounted(() => {
  getTodo()
})
</script>

<template>
  <div>
    <h3><strong>Título:</strong> {{ todo.title }}</h3>
    <p><strong>Descripción:</strong> {{ todo.description }}</p>
    <p><strong>Fecha de vencimiento:</strong> {{ todo.expires_at }}</p>
    <p><strong>Prioridad:</strong> {{ todo.priority }}</p>
    <p>
      <strong>Estado de la tarea: </strong>
      {{ todo.status }}
    </p>
  </div>
  <div>
    <button @click="completeTodo">Completar</button>
    <button @click="goToMenu">Salir al menu</button>
    <button @click="deleteTodo">Borrar</button>
  </div>
</template>

<style scoped></style>
