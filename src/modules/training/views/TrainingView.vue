<template>
  <div class="training-view">
    <section v-if="activeSession" class="training-wrapper">
      <AddTraining :error="error" :save-training="saveTraining" />

      <ul v-if="activeSession" class="trainings-container">
        <li v-for="training in trainings" :key="training.comment">
          <TrainingCard v-bind="training" />
        </li>
      </ul>
    </section>

    <!-- Si el usuario no tiene una sesión activa no le permito guardar más entrenos. El resto del layout no le funciona. -->
    <section v-else class="training-wrapper">
      <AddTraining class="disabled" :error="error" :save-training="() => {}" />

      <article class="trainings-container">
        <div class="login-reminder">
          <h2>
            Para guardar entrenamientos primero debes
            <RouterLink :to="{ name: 'login' }">iniciar sesión. </RouterLink>
          </h2>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import AddTraining from '@/modules/training/components/AddTraining/AddTraining.vue'
import TrainingCard from '@/modules/training/components//TrainingCard/TrainingCard.vue'
import { saveInStorage } from '@/modules/common/services/localStorageService'
import { isSessionActive } from '@/modules/user/services/authentication-services'
import { type Training } from '../types'
import './TrainingView.css'

import { onMounted, ref } from 'vue'
import { getUsername } from '@/modules/user/services/authentication-services'

// Luz, fíjate que llamo igual a la referencia "trainings" y la constante "trainings" dentro de las funciones para guardar y obtener
// ¿Te parece correcto? ¿Hay alternativa mejor? Gracias!
const error = ref('')
const trainings = ref<Training[]>([])
const username = ref<string | null>(getUsername())
const activeSession = ref<boolean>(false)

onMounted(() => {
  trainings.value = getTrainingSavedInLocal()
  activeSession.value = isSessionActive()
})

/* FUNCIONES DEL COMPONENTE */

const saveTraining = ({ training }: { training: Training }) => {
  // TODO: Tengo que guardar los entrenamientos más bien como `trainings-of-${username}
  // para que no se borren los entrenamientos de otros usuarios al iniciar la app.`

  const localTrainings = getTrainingSavedInLocal()
  localTrainings.push(training)
  saveInStorage({ name: ('trainings-' + username.value) as string, data: JSON.stringify(localTrainings) })
  // ¡Importante! Aquí es donde se guarda el estado para el componente, después de haber guardado los datos en localStorage
  trainings.value = localTrainings
}

const getTrainingSavedInLocal = () => {
  let trainings: Training[]

  const data = localStorage.getItem(('trainings-' + username.value) as string)
  // Si está en null es que "trainings" no existe, así que lo creamos nosotros y luego gestionamos su guardado
  if (data === null) {
    trainings = []
  } else {
    // Si ya existe la data en el localStorage la parseamos para trabajar con ella
    trainings = JSON.parse(data)
  }

  // Con independencia de lo que haya ocurrido ya podemos actualizar el estado
  return trainings
}
</script>
