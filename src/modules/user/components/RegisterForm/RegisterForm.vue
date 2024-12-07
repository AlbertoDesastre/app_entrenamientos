<template>
  <!-- En vez de que haga un submit normal le pongo mi propio evento, para la lógica de guardar el usuario el localStorage -->
  <form id="register-form" @submit="handleSubmit">
    <fieldset>
      <legend>Datos atléticos</legend>
      <label for="age"> Edad: <input v-model="age" id="age" type="number" min="0" /> </label>
      <label for="height">
        Altura en cm: <input v-model="height" id="height" type="number" min="0" required />
      </label>
      <label for="weight">
        Peso actual: <input v-model="weight" id="weight" type="number" min="0" required />
      </label>
    </fieldset>

    <fieldset>
      <legend>Acceso</legend>
      <label for="name"> Nombre: <input v-model="name" id="name" type="text" minlength="3" required /> </label>
      <label for="username">
        Nombre de usuario: <input v-model="username" id="username" type="text" minlength="3" required />
      </label>
      <label for="email"> Email: <input v-model="email" id="email" type="email" required /> </label>
      <label for="password">
        Contraseña: <input v-model="password" id="password" type="password" minlength="8" required />
      </label>
    </fieldset>

    <input ref="submit" id="submit" type="submit" />
  </form>
</template>

<script setup lang="ts">
import { saveInStorage } from '@/modules/common/services/localStorageService'
import './RegisterForm.css'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

/* El router se inicializa en el componente. Después de un registro exitoso redirigiremos al Home */
const router = useRouter()

// Inicio todas las referencias reactivas, que luego son las que se utilizan para guardar fácilmente la información del formulario
const age = ref(null)
const height = ref(null)
const weight = ref(null)
const name = ref(null)
const username = ref(null)
const email = ref(null)
const password = ref(null)

// Se guarda la info en local Storage como un string. Para consumirla tendré que parsearla con el método "getItemFromStorage"
const handleSubmit = (event: Event) => {
  event.preventDefault()

  saveInStorage({
    name: 'user-info',
    data: JSON.stringify({
      age: age.value,
      height: height.value,
      weight: weight.value,
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  })

  router.push({ name: 'home' })
}
</script>
