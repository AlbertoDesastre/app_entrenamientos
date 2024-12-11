<template>
  <h1>This is the Training View!</h1>
  <div class="training-view">
    <section class="training-wrapper">
      <AddTraining :error="error" :save-training="saveTraining" />

      <ul class="trainings-container">
        <li v-for="training in trainings" :key="training.comment">
          <TrainingCard v-bind="training" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import AddTraining from '@/modules/training/components/AddTraining/AddTraining.vue'
import TrainingCard from '@/modules/training/components//TrainingCard/TrainingCard.vue'
import { saveInStorage } from '@/modules/common/services/localStorageService'
import { TrainingType, type Training } from '../types'
import './TrainingView.css'

import { onMounted, ref } from 'vue'

// Luz, fíjate que llamo igual a la referencia "trainings" y la constante "trainings" dentro de las funciones para guardar y obtener
// ¿Te parece correcto? ¿Hay alternativa mejor? Gracias!
const error = ref('')
const trainings = ref<Training[]>([
  {
    trainingType: TrainingType.ENDURANCE,
    distance: 10,
    timing: 60,
    date: '2023-12-01',
    comment: 'Buen entrenamiento de larga distancia. Manteniendo un ritmo constante.',
  },
  {
    trainingType: TrainingType.SPEED_TRAINING,
    distance: 5,
    timing: 25,
    date: '2023-12-03',
    comment: 'Entrenamiento rápido, trabajando en mejorar mi velocidad máxima.',
  },
  {
    trainingType: TrainingType.ENDURANCE,
    distance: 15,
    timing: 90,
    date: '2023-12-05',
    comment:
      'Gran progreso en la resistencia, aunque terminé muy cansado. Gran progreso en la resistencia, aunque terminé muy cansado. Gran progreso en la resistencia.',
  },
  {
    trainingType: TrainingType.SPEED_TRAINING,
    distance: 3,
    timing: 12,
    date: '2023-12-07',
    comment: 'Excelente sesión contrarreloj. Logré superar mi marca anterior.',
  },
])

onMounted(() => {
  /*
  ACTVIAR CUANDO TERMINE LAS PRUEBAS DEL MODO RESPONSIVE
  trainings.value = getTrainingSavedInLocal() */
})

/* FUNCIONES DEL COMPONENTE */

const saveTraining = ({ training }: { training: Training }) => {
  // TODO: Tengo que guardar los entrenamientos más bien como `trainings-of-${username}
  // para que no se borren los entrenamientos de otros usuarios al iniciar la app.`

  const localTrainings = getTrainingSavedInLocal()
  localTrainings.push(training)
  saveInStorage({ name: 'trainings', data: JSON.stringify(localTrainings) })
  // ¡Importante! Aquí es donde se guarda el estado para el componente, después de haber guardado los datos en localStorage
  trainings.value = localTrainings
}

const getTrainingSavedInLocal = () => {
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
