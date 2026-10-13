<script setup>
import { RouterView } from 'vue-router'
import Navegacio from './components/navegacio.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Navegacio />

  <RouterView />

  <Footer />
</template>