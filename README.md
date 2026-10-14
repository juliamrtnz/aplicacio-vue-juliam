# LinkedIn per Animalets

## Temàtica i descripció

LinkedIn per Animalets és una aplicació desenvolupada amb Vue.js que simula una xarxa de perfils per a animals. L'aplicació permet consultar informació dels diferents animals emmagatzemats a Firebase Firestore i navegar per diverses seccions de la web.

## Tecnologies utilitzades

- Vue 3
- Vue Router
- Firebase
- Firestore
- Firebase Hosting

## Instal·lació de dependències

```bash
npm install
```

## Execució local

```bash
npm run dev
```

## Generació de la versió de producció

```bash
npm run build
```

## Desplegament a Firebase

```bash
firebase deploy
```

## Components propis

### navegacio.vue

Component encarregat de mostrar el menú principal de navegació i els enllaços entre les diferents rutes.

### animal.vue

Component encarregat de mostrar les dades d'un animal.

### footer.vue

Component que mostra el peu de pàgina de l'aplicació.

### contacteInfo.vue

Component que mostra la informació de contacte.

## Exemple de comunicació amb props

### Comunicació 1

Component pare:

`AnimalsView.vue`

Component fill:

`animal.vue`

Dades enviades:

```vue
<Animal
  :nom="animal.nom"
  :especie="animal.especie"
/>
```

Props rebudes al component fill:

```vue
defineProps({
  nom: String,
  especie: String
})
```

### Comunicació 2

Component pare:

`ContacteView.vue`

Component fill:

`contacteInfo.vue`

Dades enviades:

- email
- telefon

## Rutes de l'aplicació

### /

Pàgina principal de benvinguda de LinkedIn per Animalets.

### /animals

Mostra els animals emmagatzemats a Firestore.

### /memes

Mostra una secció amb memes relacionats amb animals.

### /contacte

Mostra la informació de contacte.

### /about

Mostra informació general sobre el projecte.

## Firestore

### Col·lecció utilitzada

```text
animals
```

### Camps principals

```text
nom
especie
```

### Vista que mostra les dades

```text
AnimalsView.vue
```

Les dades es recuperen de Firestore i es mostren mitjançant el component `animal.vue` utilitzant props.

## Gestió d'estats

L'aplicació incorpora:

- Missatge de càrrega de dades.
- Missatge d'error en cas de problemes de connexió.
- Missatge quan no hi ha dades disponibles.

## Enllaç a la web publicada

URL de Firebase Hosting:

PASTA AQUÍ LA URL DE LINKEDIN PER ANIMALETS

## Autor

Júlia Martínez García