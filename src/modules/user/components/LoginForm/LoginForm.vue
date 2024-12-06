<template>
  <form id="login-form">
    <label for="username"> Nombre de usuario: <input id="username" type="text" minlength="3" required /> </label>
    <label for="password"> Contraseña: <input id="password" type="password" minlength="8" required /> </label>

    <input id="submit" type="submit" />
  </form>
</template>

<script setup lang="ts">
import './LoginForm.css'
</script>
