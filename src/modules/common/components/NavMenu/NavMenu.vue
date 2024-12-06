<template>
  <section class="header-menu">
    <nav>
      <article class="important-links-container burger-menu-mobile">
        <ul class="dropdown">
          <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
          <li><RouterLink :to="{ name: 'training' }">Entrenamientos</RouterLink></li>
          <li><RouterLink :to="{ name: 'forum' }">Foro</RouterLink></li>
          <li><RouterLink :to="{ name: 'auth' }">Iniciar sesión</RouterLink></li>
        </ul>
      </article>
      <!--       <RouterLink :to="{ name: 'home' }"><h2>APP!</h2></RouterLink> -->
      <RouterLink :to="{ name: 'auth' }" id="profile-icon"
        ><img :src="placeholder_person" width="40px" height="40px"
      /></RouterLink>
    </nav>
  </section>
</template>

<script setup lang="ts">
import './NavMenu.css'
import placeholder_person from '@/assets/imgs/placeholder-person.jpg'
</script>
