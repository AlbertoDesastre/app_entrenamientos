<template>
  <section class="training-card">
    <hgroup class="upper-info">
      <h4
        :class="[
          {
            resistance: props.trainingType === TrainingType.ENDURANCE,
            speed: props.trainingType === TrainingType.SPEED_TRAINING,
          },
          'colorful-tag',
        ]"
      >
        {{ props.trainingType }}
      </h4>
      <p style="color: gray">{{ props.date }}</p>
    </hgroup>
    <article class="main-info">
      <p><strong>Distancia total:</strong> {{ props.distance }} km.</p>
      <p><strong>Tiempo: </strong> {{ props.timing }} min.</p>
    </article>
    <p class="training-comment">{{ props.comment }}</p>
  </section>
</template>

<script setup lang="ts">
import { TrainingType, type Training } from '../../types'
import './TrainingCard.css'

const props = defineProps<Training>()
</script>
