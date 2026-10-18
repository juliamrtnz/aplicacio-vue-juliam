<script setup>
import { computed, onMounted, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import Animal from '../components/animal.vue'
import { db } from '../firebase'

const animals = ref([])
const search = ref('')
const loading = ref(true)
const error = ref(false)

const filteredAnimals = computed(() => {
  const query = search.value.trim().toLocaleLowerCase('ca')
  if (!query) return animals.value

  return animals.value.filter((animal) => {
    const name = String(animal.nom ?? '').toLocaleLowerCase('ca')
    const species = String(animal.especie ?? '').toLocaleLowerCase('ca')
    return name.includes(query) || species.includes(query)
  })
})

async function loadAnimals() {
  loading.value = true
  error.value = false

  try {
    const querySnapshot = await getDocs(collection(db, 'animals'))
    animals.value = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data()
    }))
  } catch (err) {
    console.error('No s’han pogut carregar els perfils d’animals de Firestore.', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(loadAnimals)
</script>

<template>
  <main class="page-wrap">
    <span class="eyebrow"><span class="eyebrow-dot"></span> La comunitat</span>
    <h1 class="page-title">Talent amb potes.</h1>
    <p class="page-lead">
      Coneix els professionals que lideren la manada, dominen l'art de la migdiada
      i mai no rebutgen una oportunitat amb premis.
    </p>

    <div class="animals-toolbar">
      <div>
        <h2 class="section-heading">Directori d'animals</h2>
        <p class="section-kicker">Perfils de la comunitat, carregats directament des de Firestore.</p>
      </div>
      <label class="search-field">
        <span aria-hidden="true">🔎</span>
        <input v-model="search" type="search" placeholder="Cerca per nom o espècie" aria-label="Cerca animals per nom o espècie">
      </label>
    </div>

    <div v-if="loading" class="skeleton-grid" role="status" aria-label="Carregant perfils d'animals">
      <div v-for="item in 6" :key="item" class="skeleton-card"></div>
    </div>

    <section v-else-if="error" class="state-card" role="alert">
      <div class="state-icon" aria-hidden="true">🦴</div>
      <h2>Avui la connexió va una mica lenta</h2>
      <p>No hem pogut carregar els perfils. Torna-ho a provar d'aquí a un moment.</p>
      <button class="button" type="button" @click="loadAnimals">Torna-ho a provar</button>
    </section>

    <section v-else-if="animals.length === 0" class="state-card">
      <div class="state-icon" aria-hidden="true">🐾</div>
      <h2>Encara no hi ha perfils per aquí</h2>
      <p>Quan arribi la primera mascota, la seva aventura professional començarà aquí.</p>
    </section>

    <section v-else-if="filteredAnimals.length === 0" class="state-card">
      <div class="state-icon" aria-hidden="true">🕵️</div>
      <h2>No trobem aquest perfil</h2>
      <p>Prova amb un altre nom o espècie: algú deu estar amagat entre les joguines.</p>
    </section>

    <section v-else class="animal-grid" aria-label="Perfils d'animals">
    
  <Animal
  v-for="animal in filteredAnimals"
  :key="animal.id"
  :nom="animal.nom"
  :especie="animal.especie"
  :emoji="animal.emoji"
/>
    </section>
  </main>
</template>
