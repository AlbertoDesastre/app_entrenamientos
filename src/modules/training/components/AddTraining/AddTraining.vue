<template>
  <!-- En vez de que haga un submit normal le pongo mi propio evento, para la lógica de guardar el usuario el localStorage -->
  <form id="add-training-form" @submit="handleSubmit">
    <label for="training-type"> Tipo de entrenamiento: </label>
    <input v-model="trainingType" id="training-type" type="select" placeholder="Tipo de entrenamiento..." />

    <label for="distance"> Distancia recorrida: </label>
    <input v-model="distance" id="timing" type="number" required />

    <label for="timing"> Duración de entreno: </label>
    <input v-model="timing" id="timing" type="number" required />

    <label for="date"> Completado el día: </label>
    <input v-model="date" id="date" type="date" required />

    <label for="comment"> Comentarios: </label>
    <textarea v-model="comment" id="comment" type="text"></textarea>

    <input class="call-to-action" ref="submit" id="submit" type="submit" value="¡Añadir entreno!" />
  </form>
</template>

<script setup lang="ts">
import type { Training, TrainingType } from '../../types'
import './AddTraining.css'

import { ref } from 'vue'

interface Props {
  error: string
  saveTraining: ({ training }: { training: Training }) => void
}
const props = defineProps<Props>()

// Inicio todas las referencias reactivas, que luego son las que se utilizan para guardar fácilmente la información del formulario
/* Luz, como puedo hacer para inicializar todas las referencias con valor "null" y que luego no sea un cristo trabajar con tipos?
Lo pregunto en el caso de armar un objeto de tipo Training, que al inicializar como null, me dice que el atributo x de Training no puede ser null... */
const trainingType = ref('')
const distance = ref<null | number>(null)
const timing = ref<null | number>(null)
const date = ref('')
const comment = ref('')

const handleSubmit = (event: Event) => {
  event.preventDefault()

  /* Luz, de nuevo, ¿esta asignación forzada de tipos "as number"... ¿hay mejor solución? */
  const training: Training = {
    trainingType: trainingType.value as TrainingType,
    distance: distance.value as number,
    timing: timing.value as number,
    date: date.value,
    comment: comment.value,
  }
  props.saveTraining({ training })
}
</script>
