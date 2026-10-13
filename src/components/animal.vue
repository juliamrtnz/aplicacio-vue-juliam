<template>
  <div>
    <h2>{{ nom }}</h2>
    <p>Espècie: {{ especie }}</p>
  </div>
</template>

<script setup>
defineProps({
  nom: String,
  especie: String
})
</script>