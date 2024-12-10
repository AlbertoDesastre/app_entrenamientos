<template>
  <section>
    <hgroup class="upper-info">
      <h4>{{ props.trainingType }}</h4>
      <p>{{ props.date }}</p>
    </hgroup>
    <article class="main-info">
      <p>{{ props.distance }}</p>
      <p>{{ props.timing }}</p>
    </article>
    <p class="training-comment">{{ props.comment }}</p>
  </section>
</template>

<script setup lang="ts">
import type { Training } from '../../types'
import './TrainingCard.css'

const props = defineProps<Training>()
</script>
