<template>
  <article class="forum-comment">
    <img :src="props.userAvatar" />
    <!-- Aunque parezca raro ver un footer al principio, es totalmente correcto!
     Fuente: https://html.spec.whatwg.org/multipage/sections.html#the-footer-element -->
    <footer>
      <p>{{ props.username }}</p>
      <p>{{ props.creationDate }}</p>
    </footer>
    <p class="comment">
      {{ props.comment }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { UserComment } from '../../types'
import './ForumComment.css'

const props = defineProps<UserComment>()
</script>
