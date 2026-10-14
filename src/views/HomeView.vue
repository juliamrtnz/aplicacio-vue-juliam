<template>
  <main class="page-wrap">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow"><span class="eyebrow-dot"></span> La xarxa professional més peluda</span>
        <h1>El talent no té <span>espècie.</span></h1>
        <p>
          Connectem animals amb grans somnis, competències extraordinàries
          i una quantitat sospitosa de premis en forma de galeta.
        </p>
        <div class="hero-actions">
          <RouterLink class="button" to="/animals">Explora els perfils <span aria-hidden="true">→</span></RouterLink>
          <RouterLink class="button button-secondary" to="/memes">Necessito riure <span aria-hidden="true">☺</span></RouterLink>
        </div>
      </div>

      <article class="hero-profile" aria-label="Animal de la setmana: Bruna">
        <div class="featured-label">
          <span>🏆 Animal de la setmana</span>
          <span>01 / 01</span>
        </div>
        <div class="featured-animal" aria-hidden="true">🐶</div>
        <h2 class="featured-name">Bruna</h2>
        <p class="featured-role">Gossa · Directora de benvingudes i llepades</p>
        <div class="badge-row">
          <span class="badge">💼 Lideratge de manada</span>
          <span class="badge">⭐ 5/5 galetes</span>
        </div>
      </article>
    </section>

    <section class="home-stats" aria-label="Estadístiques de la comunitat">
      <div class="stat-card"><strong>100%</strong><span>Actitud positiva (i cua en moviment)</span></div>
      <div class="stat-card"><strong>∞</strong><span>Contactes que fan bona olor</span></div>
      <div class="stat-card"><strong>0</strong><span>Reunions que no podien ser un passeig</span></div>
    </section>

    <section>
      <div class="home-section">
        <div>
          <h2 class="section-heading">Una xarxa amb molt de talent</h2>
          <p class="section-kicker">Aquí cada animal té una història, una professió i algun secret.</p>
        </div>
        <RouterLink class="button" to="/animals">Veure la comunitat <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="animal-grid">
        <article class="animal-card">
          <div class="animal-cover" aria-hidden="true">🐱</div>
          <div class="animal-card-body">
            <div class="animal-avatar" aria-hidden="true">🐱</div>
            <h3 class="animal-name">Miso</h3>
            <p class="animal-species">Gat · Consultor de migdiades</p>
            <p class="animal-role"><strong>Habilitat destacada:</strong> convertir qualsevol caixa en oficina.</p>
            <div class="badge-row"><span class="badge">🛋️ Expert en confort</span><span class="badge">💤 8 h de reunió</span></div>
          </div>
        </article>
        <article class="animal-card">
          <div class="animal-cover" aria-hidden="true">🐰</div>
          <div class="animal-card-body">
            <div class="animal-avatar" aria-hidden="true">🐰</div>
            <h3 class="animal-name">Coco</h3>
            <p class="animal-species">Conill · Especialista en salts</p>
            <p class="animal-role"><strong>Habilitat destacada:</strong> assolir objectius d'un bot.</p>
            <div class="badge-row"><span class="badge">📈 Creixement ràpid</span><span class="badge">🥕 Green skills</span></div>
          </div>
        </article>
        <article class="animal-card">
          <div class="animal-cover" aria-hidden="true">🦜</div>
          <div class="animal-card-body">
            <div class="animal-avatar" aria-hidden="true">🦜</div>
            <h3 class="animal-name">Kiwi</h3>
            <p class="animal-species">Ocell · Director de comunicació</p>
            <p class="animal-role"><strong>Habilitat destacada:</strong> fer-se sentir a tota la reunió.</p>
            <div class="badge-row"><span class="badge">🎤 Bona oratòria</span><span class="badge">🌴 Treball híbrid</span></div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
