<script setup>
const memes = [
  {
    emoji: '🐱',
    label: 'La reunió',
    title: 'Aquesta reunió podia ser un coixí',
    caption: 'En Miso ha activat el mode avió. Literalment: s’ha adormit a sobre del portàtil.'
  },
  {
    emoji: '🐶',
    label: 'Networking',
    title: 'Connexions de primer nivell',
    caption: 'La Bruna acaba de connectar amb tres humans i un repartidor. Quin matí més productiu.'
  },
  {
    emoji: '🐰',
    label: 'Objectius',
    title: 'Objectius del trimestre: salta’ls tots',
    caption: 'El Coco no coneix la paraula “obstacle”. Tampoc no coneix la paraula “pressupost”.'
  },
  {
    emoji: '🦜',
    label: 'Comunicació',
    title: 'Tens el micro obert, Kiwi',
    caption: 'El director de comunicació té una opinió sobre cada tema. Totes les opinions són fortes.'
  },
  {
    emoji: '🐹',
    label: 'Productivitat',
    title: 'Treballar en cercles també compta',
    caption: 'La Pipa porta dues hores corrent a la roda. La seva passió per les mètriques és admirable.'
  },
  {
    emoji: '🐢',
    label: 'Carrera',
    title: 'No és lentitud, és sostenibilitat',
    caption: 'En Tòfol no arriba tard: practica una gestió del temps amb perspectiva a llarg termini.'
  }
]
</script>

<template>
  <main class="page-wrap">
    <span class="eyebrow"><span class="eyebrow-dot"></span> Pausa per fer el ximple</span>
    <h1 class="page-title">Massa talent. Poc seny.</h1>
    <p class="page-lead">
      Les carreres professionals també necessiten una bona pausa.
      Benvingut al mur de memes més tendre de tota la xarxa.
    </p>

    <section class="meme-grid" aria-label="Memes de la comunitat">
      <article v-for="meme in memes" :key="meme.title" class="meme-card">
        <div class="meme-art" aria-hidden="true">{{ meme.emoji }}</div>
        <div class="meme-card-body">
          <span class="meme-tag">{{ meme.label }}</span>
          <h2>{{ meme.title }}</h2>
          <p>{{ meme.caption }}</p>
        </div>
      </article>
    </section>
  </main>
</template>
