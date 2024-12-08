<template>
  <article class="forum-comment">
    <img :src="props.userAvatar" />
    <!-- Aunque parezca raro ver un footer al principio, es totalmente correcto!
     Fuente: https://html.spec.whatwg.org/multipage/sections.html#the-footer-element -->
    <footer>
      <p>{{ props.username }}</p>
      <p>{{ props.creationDate }}, a las {{ props.creationHour }}</p>
    </footer>
    <p class="comment">
      {{ props.comment }}
    </p>
  </article>
</template>

<script setup lang="ts">
import './ForumComment.css'

interface ForumComment {
  username: string
  userAvatar: string
  comment: string
  creationDate: string
  /* En condiciones normales, la fecha vendría en un formato en el que se incluye el año, mes y día MÁS la hora, minutos y segundos
  Para este proyecto no veo necesario llegar tan lejos en la simulación de datos, así que a mi conveniencia y la de mi tiempo asumo que
  me llegará el formato que yo quiero: por un lado el año mes y día y por otro horas y minutos.*/
  creationHour: string
}

const props = defineProps<ForumComment>()
</script>
