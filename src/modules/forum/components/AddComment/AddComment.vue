<template>
  <section class="add-comment-wrapper">
    <!-- Formulario para añadir comentario, en caso de que haya un sesión activa -->
    <form v-if="activeSession" id="add-comment-form" @submit="handleSubmit">
      <article class="user-preview">
        <p>{{ props.username }}</p>
        <img :src="userAvatar" />
      </article>
      <label for="comment">
        <textarea id="comment" type="text" minlength="20" v-model="commentText"></textarea>
      </label>
      <input class="call-to-action" ref="submit" id="submit" type="submit" value="Añadir tu comentario" />
    </form>

    <!-- Si el usuario no inicia sesión se le avisa de que no puede escribir un comentario -->
    <article v-else class="disallowed-commentary">
      <h2>
        Para comentar en el foro primero tienes que <RouterLink :to="{ name: 'login' }">iniciar sesión</RouterLink>
      </h2>
      <div class="interface-blocker"></div>
      <form id="add-comment-form" @submit="(e) => e.preventDefault()">
        <article class="user-preview">
          <p>¡Tú!</p>
          <img :src="userAvatar" />
        </article>
        <label for="comment">
          <textarea
            id="comment"
            type="text"
            placeholder="Me encanta esta app, pero yo añadiría más opciones..."
          ></textarea>
        </label>
        <input class="call-to-action" ref="submit" id="submit" type="submit" value="Añadir tu comentario" />
      </form>
    </article>
  </section>
</template>

<script setup lang="ts">
import type { UserComment } from '../../types'
import './AddComment.css'

import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import { ref } from 'vue'

/* Describo las props */
interface Props {
  activeSession: boolean
  username: string
  userAvatar: string
  addNewComment: ({ comment }: { comment: UserComment }) => void
}
const props = defineProps<Props>()

/* Inicio las referencias con las que trabajaré */
const commentText = ref('')

/* Cuando se haga submit al form... */
const handleSubmit = (event: Event) => {
  event.preventDefault()

  const comment: UserComment = {
    /* Creo aquí mismo todo el objeto de comentario a conveniencia.
    Después de todo la responsabilidad de este componente es CREAR el comentario, no actualizar
    el estado con toda la lista de comentarios.
    ¿Te parece bien este enfoque, Luz, o habría otra forma más chula y escalable de hacerlo?   */
    id: uuidv4(),
    username: props.username,
    userAvatar: props.userAvatar,
    comment: commentText.value,
    creationDate: getFullDate(),
  }

  props.addNewComment({ comment })
  clearTextarea()
}

const getFullDate = () => {
  const now = new Date()
  const creationDate = format(now, 'Pp')

  return creationDate
}

const clearTextarea = () => {
  commentText.value = ''
}
</script>
