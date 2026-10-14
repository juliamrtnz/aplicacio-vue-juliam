<script setup>
import ContacteInfo from '../components/contacteInfo.vue'
</script>

<template>
  <main class="page-wrap">
    <span class="eyebrow"><span class="eyebrow-dot"></span> La bústia està oberta</span>
    <h1 class="page-title">Parlem?</h1>
    <p class="page-lead">
      Tens una idea, una mascota amb un currículum impressionant o només vols
      enviar-nos una foto adorable? Ens encantarà saber de tu.
    </p>
    <section class="contact-layout" aria-label="Informació de contacte">
      <div class="contact-note">
        <span class="note-icon" aria-hidden="true">🐾</span>
        <h2>La xarxa creix amb tu</h2>
        <p>Escriu-nos quan vulguis. Llegim tots els missatges, fins i tot els que arriben amb marques de potetes.</p>
      </div>
      <ContacteInfo email="info@linkedinanimalets.com" telefon="973123456" />
    </section>
  </main>
</template>