<script setup>
import { computed } from 'vue'

const props = defineProps({
  nom: { type: String, default: 'Animal sense nom' },
  especie: { type: String, default: 'Talent per descobrir' },
  emoji: { type: String, default: '🐾' }
})

const profession = computed(() => {
  const species = props.especie.toLocaleLowerCase('ca')

  if (species.includes('gos') || species.includes('gossa') || species.includes('dog')) {
    return 'Cap de passejades'
  }

  if (species.includes('gat') || species.includes('gato') || species.includes('cat')) {
    return 'Consultor de migdiades'
  }

  if (species.includes('conill') || species.includes('rabbit')) {
    return 'Especialista en salts'
  }

  if (species.includes('ocell') || species.includes('bird') || species.includes('lloro')) {
    return 'Director de comunicació'
  }

  return 'Professional del bon rotllo'
})
</script>

<template>
  <article class="animal-card">
    <div class="animal-cover" aria-hidden="true">
      {{ emoji }}
    </div>

    <div class="animal-card-body">
      <div class="animal-avatar" aria-hidden="true">
        {{ emoji }}
      </div>

      <h2 class="animal-name">
        {{ nom }}
      </h2>

      <p class="animal-species">
        {{ especie }} · Perfil amb potes
      </p>

      <p class="animal-role">
        <strong>Professió:</strong> {{ profession }}
      </p>

      <div class="badge-row">
        <span class="badge">✨ Talent natural</span>
        <span class="badge">🦴 Disponible per jugar</span>
      </div>
    </div>
  </article>
</template>