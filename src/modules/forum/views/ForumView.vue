<template>
  <h2>Foro</h2>
  <h3>Comparte tus comentarios sobre la aplicación en este foro. ¡Todo el mundo tiene acceso!</h3>
  <section class="forum-wrapper">
    <ul class="comments-container">
      <li v-for="comment in forumComments" :key="comment.id">
        <!--
        Este "v-bind" es exactamente lo mismo que la opción comentada que hay abajo.
        Esto es porque los nombres de las prop del componente y los atributos del objeto "comment" son exactamente iguales.
        -->
        <ForumComment v-bind="comment" />

        <!--
        <ForumComment
          :username="comment.username"
          :user-avatar="comment.userAvatar"
          :creation-date="comment.creationDate"
          :creation-hour="comment.creationHour"
          :comment="comment.comment"
        /> -->
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import ForumComment from '../components/ForumComment/ForumComment.vue'
import './ForumView.css'

const forumComments = [
  {
    id: 'cmt-001',
    username: 'Albertito',
    userAvatar: 'https://via.placeholder.com/80',
    comment: '¡Este es un comentario muy interesante! Muchas gracias por compartirlo.',
    creationDate: '2024-12-06',
    creationHour: '14:35',
  },
  {
    id: 'cmt-002',
    username: 'MariaGomez',
    userAvatar: 'https://via.placeholder.com/80/ff7f7f',
    comment: 'No estoy del todo de acuerdo, pero me encantaría saber más sobre tu opinión.',
    creationDate: '2024-12-05',
    creationHour: '18:45',
  },
  {
    id: 'cmt-003',
    username: 'JuanPerez',
    userAvatar: 'https://via.placeholder.com/80/87CEEB',
    comment: 'Gran aporte. Esto resuelve muchas dudas que tenía.',
    creationDate: '2024-12-06',
    creationHour: '10:15',
  },
  {
    id: 'cmt-004',
    username: 'TechGuru',
    userAvatar: 'https://via.placeholder.com/80/FFD700',
    comment: 'Revisé los datos que mencionaste y todo parece estar en orden. ¡Buen trabajo!',
    creationDate: '2024-12-04',
    creationHour: '22:00',
  },
  {
    id: 'cmt-005',
    username: 'AnaLopez',
    userAvatar: 'https://via.placeholder.com/80/90EE90',
    comment: 'Gracias por la información, me ha servido muchísimo. ¿Tienes alguna fuente adicional?',
    creationDate: '2024-12-03',
    creationHour: '16:20',
  },
]
</script>
