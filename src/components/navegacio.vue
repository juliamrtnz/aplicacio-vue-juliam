<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="site-header">
    <div class="nav-shell">
      <RouterLink class="brand" to="/" aria-label="LinkedIn per Animalets, inici">
        <span class="brand-paw" aria-hidden="true">🐾</span>
        <span>LinkedIn <strong>per Animalets</strong></span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? 'Tanca el menú' : 'Obre el menú'"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? '✕' : '☰' }}
      </button>

      <nav id="main-navigation" class="nav-links" :class="{ 'is-open': menuOpen }" aria-label="Navegació principal">
        <RouterLink class="nav-link" to="/">Inici</RouterLink>
        <RouterLink class="nav-link" to="/animals">Animals</RouterLink>
        <RouterLink class="nav-link" to="/memes">Memes</RouterLink>
        <RouterLink class="nav-link" to="/contacte">Contacte</RouterLink>
        <RouterLink class="nav-link" to="/about">El projecte</RouterLink>
      </nav>

      <RouterLink class="nav-cta" to="/animals">Descobreix perfils <span aria-hidden="true">→</span></RouterLink>
    </div>
  </header>
</template>