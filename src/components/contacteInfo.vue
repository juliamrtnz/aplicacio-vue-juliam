<template>
  <div class="contact-info">
    <a class="contact-item" :href="`mailto:${email}`">
      <span class="contact-item-icon" aria-hidden="true">✉️</span>
      <span>
        <span class="contact-item-label">Escriu-nos un correu</span>
        <strong>{{ email }}</strong>
      </span>
      <span class="contact-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="contact-item" :href="`tel:${telefon}`">
      <span class="contact-item-icon" aria-hidden="true">📞</span>
      <span>
        <span class="contact-item-label">Truca'ns (si no estem passejant)</span>
        <strong>{{ telefon }}</strong>
      </span>
      <span class="contact-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  email: String,
  telefon: String
})
</script>