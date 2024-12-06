<template>
  <form id="register-form">
    <fieldset>
      <legend>Datos atléticos</legend>
      <label for="age"> Edad: <input id="age" type="number" required /> </label>
      <label for="height"> Altura: <input id="height" type="number" required /> </label>
      <label for="weight"> Peso actual: <input id="weight" type="number" required /> </label>
    </fieldset>

    <fieldset>
      <legend>Acceso</legend>
      <label for="name"> Nombre: <input id="name" type="text" minlength="3" required /> </label>
      <label for="username"> Nombre de usuario: <input id="username" type="text" minlength="3" required /> </label>
      <label for="email"> Email: <input id="email" type="email" required /> </label>
      <!-- Puedo añadirle más adelante un pattern chulo para que tenga como mínimo una mayúscula y un símbolo -->
      <label for="password"> Contraseña: <input id="password" type="password" minlength="8" required /> </label>
    </fieldset>

    <input id="submit" type="submit" />
  </form>
</template>

<script setup lang="ts">
import './RegisterForm.css'
</script>
