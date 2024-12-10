<template>
  <h1>This is the Training View!</h1>
  <AddTraining :error="error" :save-training="saveTraining" />

  <ul class="trainings-container">
    <li v-for="training in trainings" :key="training.comment">
      <TrainingCard v-bind="training" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import AddTraining from '@/modules/training/components/AddTraining/AddTraining.vue'
import { saveInStorage } from '@/modules/common/services/localStorageService'
import type { Training } from '../types'

import { onMounted, ref } from 'vue'
import TrainingCard from '../components/TrainingCard/TrainingCard.vue'

// Luz, fíjate que llamo igual a la referencia "trainings" y la constante "trainings" dentro de las funciones para guardar y obtener
// ¿Te parece correcto? ¿Hay alternativa mejor? Gracias!
const error = ref('')
const trainings = ref<Training[]>([])

onMounted(() => {
  trainings.value = getTrainings()
})

/* FUNCIONES DEL COMPONENTE */

const saveTraining = ({ training }: { training: Training }) => {
  // TODO: Tengo que guardar los entrenamientos más bien como `trainings-of-${username}
  // para que no se borren los entrenamientos de otros usuarios al iniciar la app.`

  const trainings = getTrainings()
  trainings.push(training)
  saveInStorage({ name: 'trainings', data: JSON.stringify(trainings) })
}

const getTrainings = () => {
  let trainings: Training[]

  const data = localStorage.getItem('trainings')
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
