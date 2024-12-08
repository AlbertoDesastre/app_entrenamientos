<template>
  <form id="login-form" @submit="handleSubmit">
    <label for="username">
      Nombre de usuario: <input v-model="username" id="username" type="text" minlength="3" required />
    </label>

    <label for="password">
      Contraseña: <input v-model="password" id="password" type="password" minlength="8" required />
    </label>

    <span v-if="!!error" class="error-warning"> {{ error }}</span>

    <input id="submit" type="submit" />
  </form>
</template>

<script setup lang="ts">
import { getItemFromStorage, LOCAL_STORAGE_ERR_MESSAGES } from '@/modules/common/services/localStorageService'
import { isPasswordRight, login, userExists } from '../../services/authentication-services'
import type { User } from '../../types'
import './LoginForm.css'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

/* El router se inicializa en el componente. Después de un login exitoso redirigimos al Home*/
const router = useRouter()

// Inicio todas las referencias reactivas, incluyendo la del posible mensaje de error
const username = ref('')
const password = ref('')
const error = ref('')

// Hago un Enum para los mensajes de error para que, si cambia el mensaje, solo tengo que cambiarlo en un lugar y no varios
// Pensé en separar los mensajes en otro archivo llamado "constants", pero estos mensajes son exclusivos de este componente así que...
enum ERROR_MESSAGES {
  USER_NOT_EXISTS = 'El usuario al que intenta acceder no existe.',
  PASSWORD_DONT_MATCH = 'La password es incorrecta, inténtelo de nuevo.',
  UNEXPECTED_ERROR = 'Ha ocurrido un error inesperado. Espere e intente de nuevo.',
}

const handleSubmit = (event: Event) => {
  event.preventDefault()

  try {
    /* OJO!! Si el código peta por algún sitio lo hará inmediatamente aquí abajo y lo atrapará el catch.*/
    const data = getItemFromStorage({ name: 'user-info' })
    const user: User = JSON.parse(data as string)

    // Primero ataco los errores
    if (!userExists({ user, username: username.value })) {
      throw new Error(ERROR_MESSAGES.USER_NOT_EXISTS)
    }
    if (!isPasswordRight({ user, password: password.value })) {
      throw new Error(ERROR_MESSAGES.PASSWORD_DONT_MATCH)
    }

    // Si todo va bien seguimos con el flujo normal
    login()
    router.push({ name: 'home' })
  } catch (err) {
    handleError(err)
  }
}

const handleError = (err: unknown) => {
  if (err instanceof Error) {
    console.error(`Hubo el siguiente error "${err.message}"`)

    if (err.message !== LOCAL_STORAGE_ERR_MESSAGES.NOT_FOUND) {
      error.value = err.message
      return
    }

    error.value = ERROR_MESSAGES.UNEXPECTED_ERROR
  }
}
</script>
