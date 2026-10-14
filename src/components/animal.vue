<script setup>
import { computed } from 'vue'

const props = defineProps({
  nom: { type: String, default: 'Animal sense nom' },
  especie: { type: String, default: 'Talent per descobrir' }
})

const speciesDetails = computed(() => {
  const species = props.especie.toLocaleLowerCase('ca')
  if (species.includes('gos') || species.includes('gossa') || species.includes('dog')) {
    return { emoji: '🐶', profession: 'Cap de passejades' }
  }
  if (species.includes('gat') || species.includes('gato') || species.includes('cat')) {
    return { emoji: '🐱', profession: 'Consultor de migdiades' }
  }
  if (species.includes('conill') || species.includes('rabbit')) {
    return { emoji: '🐰', profession: 'Especialista en salts' }
  }
  if (species.includes('ocell') || species.includes('bird') || species.includes('lloro')) {
    return { emoji: '🦜', profession: 'Director de comunicació' }
  }
  return { emoji: '🐾', profession: 'Professional del bon rotllo' }
})
</script>

<template>
  <article class="animal-card">
    <div class="animal-cover" aria-hidden="true">{{ speciesDetails.emoji }}</div>
    <div class="animal-card-body">
      <div class="animal-avatar" aria-hidden="true">{{ speciesDetails.emoji }}</div>
      <h2 class="animal-name">{{ nom }}</h2>
      <p class="animal-species">{{ especie }} · Perfil amb potes</p>
      <p class="animal-role"><strong>Professió:</strong> {{ speciesDetails.profession }}</p>
      <div class="badge-row">
        <span class="badge">✨ Talent natural</span>
        <span class="badge">🦴 Disponible per jugar</span>
      </div>
    </div>
  </article>
</template>