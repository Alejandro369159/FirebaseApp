<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import router from '@/router'

const todos = ref()

async function getTodos() {
  const collectionRef = collection(db, 'todos')
  const todosSnapshot = await getDocs(collectionRef)
  todos.value = todosSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      expires_at: doc.data().expires_at,
      priority: doc.data().priority
    }
  })
}

function goToCreateTodo() {
  router.push('/crear-tarea')
}

function goToTodo(id) {
  router.push(`/tarea/${id}`)
}

async function completeTodo(id) {
  try {
    const docRef = doc(db, 'todos', id)
    await updateDoc(docRef, {
      status: 'completed'
    })
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  getTodos() // Get Todos when the page loads for first time or after refreshing it
})
</script>

<template>
  <Navbar />
  <h2>Mi lista de tareas</h2>
  <div class="todos-container">
    <button @click="goToCreateTodo" type="button" class="create-btn">Crear una nueva tarea</button>
    <div v-for="todo in todos" class="todo-item">
      <div class="complete">
        <button @click="completeTodo(todo.id)">Completar ✔</button>
      </div>
      <div class="info">
        <h3 :class="todo.status === 'pending' ? 'red' : 'green'" @click="goToTodo(todo.id)">
          {{ todo.title }}
        </h3>
        <p>{{ todo.expires_at }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  color: rgb(238, 178, 0);
  text-align: center;
}

.todos-container {
  position: relative;
  margin: 60px auto;
  width: 800px;
  background-color: whitesmoke;
  height: 400px;
  overflow: auto;
  border-radius: 20px;
  border: 0.5px solid rgb(196, 196, 196);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.create-btn {
  position: absolute;
  right: 0;
  padding: 10px 10px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: whitesmoke;
  cursor: pointer;
}

.todo-item {
  margin: 10px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 80%;
  display: flex;
  align-items: center;
}

.complete {
  width: 30%;
}

.complete > button {
  display: block;
  margin: auto;
  border: 1px rgb(194, 194, 194) solid;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.info {
  width: 70%;
}

.info > h3 {
  cursor: pointer;
}

.info > p {
  font-size: 0.9rem;
  text-decoration: underline;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
