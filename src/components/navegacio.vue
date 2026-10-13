<template>
  <nav>
    <RouterLink to="/">Inici</RouterLink> |
    <RouterLink to="/animals">Animals</RouterLink> |
    <RouterLink to="/memes">Memes</RouterLink> |
    <RouterLink to="/contacte">Contacte</RouterLink> |
    <RouterLink to="/about">Sobre nosaltres</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>