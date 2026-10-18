# 🐾 LinkedIn per Animalets

> Una xarxa social professional pensada exclusivament per a mascotes i animals amb talent.

---

## 🌟 Temàtica i descripció

**LinkedIn per Animalets** és una aplicació desenvolupada amb **Vue 3** que simula una xarxa de perfils professionals per a animals.

Els usuaris poden navegar per diferents seccions de la web i consultar perfils d'animals emmagatzemats a **Firebase Firestore**, mostrats dinàmicament dins de l'aplicació.

---

## 🛠️ Tecnologies utilitzades

- 💚 Vue 3
- 🧭 Vue Router
- 🔥 Firebase
- 📂 Firestore Database
- ☁️ Firebase Hosting

---

## 🚀 Instal·lació i execució

### Instal·lar les dependències

```bash
npm install
```

### Executar el projecte en local

```bash
http-server
```

### Generar la versió de producció

```bash
npm run build
```

### Desplegar a Firebase Hosting

```bash
firebase deploy
```

---

## 🧩 Components propis

### 🧭 navegacio.vue

Menú principal de navegació entre les diferents rutes de l'aplicació.

### 🐾 animal.vue

Mostra la informació individual de cada animal recuperada des de Firestore.

### 📞 contacteInfo.vue

Mostra les dades de contacte.

### 🦴 footer.vue

Mostra el peu de pàgina de l'aplicació.

---

## 🔄 Comunicació entre components (Props)

### Exemple 1

✅ **Component pare:** `AnimalsView.vue`

✅ **Component fill:** `animal.vue`

Dades enviades:

```vue
<Animal
  :nom="animal.nom"
  :especie="animal.especie"
  :emoji="animal.emoji"
/>
```

Props rebudes:

```vue
defineProps({
  nom: String,
  especie: String,
  emoji: String
})
```

---

### Exemple 2

✅ **Component pare:** `ContacteView.vue`

✅ **Component fill:** `contacteInfo.vue`

Dades enviades:

- email
- telefon

---

## 🗺️ Rutes de l'aplicació

| Ruta | Contingut |
|--------|--------|
| `/` | Pàgina principal de benvinguda |
| `/animals` | Mostra els perfils d'animals |
| `/memes` | Secció de memes d'animals |
| `/contacte` | Informació de contacte |
| `/about` | Informació sobre el projecte |

---

## 🔥 Firestore

### Col·lecció utilitzada

```text
animals
```

### Camps principals

```text
nom
especie
emoji
```

### Vista que mostra les dades

```text
AnimalsView.vue
```

Les dades es recuperen des de Firestore i es mostren utilitzant el component `animal.vue` mitjançant props.

---

## ⚡ Gestió d'estats

L'aplicació implementa els tres estats sol·licitats:

✅ Estat de càrrega

✅ Missatge d'error de lectura

✅ Missatge quan no existeixen dades disponibles

---

## 🌍 Web publicada

### Firebase Hosting

 https://linkedin-per-animalets.web.app

---

## 👩‍💻 Autor

**Júlia Martínez García**

Projecte desenvolupat per a l'assignatura de Desenvolupament Web.