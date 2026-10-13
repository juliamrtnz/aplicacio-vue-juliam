<script setup>
import { ref, onMounted } from 'vue'
import Animal from '../components/animal.vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const animals = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'animals'))

    animals.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h1>Animals</h1>

    <p v-if="loading">Carregant dades...</p>

    <p v-else-if="error">Error carregant dades.</p>

    <p v-else-if="animals.length === 0">
      No hi ha dades disponibles.
    </p>

    <Animal
      v-for="animal in animals"
      :key="animal.id"
      :nom="animal.nom"
      :especie="animal.especie"
    />
  </div>
</template>