<template>
  <section class="nav-menu">
    <nav>
      <RouterLink :to="{ name: 'training' }">Entrenamientos</RouterLink>
      <RouterLink :to="{ name: 'forum' }">Foro</RouterLink>
      <RouterLink :to="{ name: 'auth' }">Iniciar sesión</RouterLink>
    </nav>

    <RouterLink :to="{ name: 'home' }">APP!</RouterLink>

    <RouterLink :to="{ name: 'auth' }"
      ><img :src="placeholder_person" width="40px" height="40px"
    /></RouterLink>
  </section>
</template>

<script setup lang="ts">
import placeholder_person from '@/assets/imgs/placeholder-person.jpg'
</script>
