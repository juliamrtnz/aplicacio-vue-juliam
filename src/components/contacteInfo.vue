<template>
  <div>
    <h2>{{ email }}</h2>
    <p>{{ telefon }}</p>
  </div>
</template>

<script setup>
defineProps({
  email: String,
  telefon: String
})
</script>