<script setup>
import { RouterView } from 'vue-router'
import Navegacio from './components/navegacio.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Navegacio />
  <RouterView v-slot="{ Component }">
    <Transition name="view" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
</template>