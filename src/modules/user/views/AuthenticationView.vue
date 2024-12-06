<template>
  <h1>This is the Authentication View!</h1>

  <RegisterForm />
  <LoginForm />
</template>

<script setup lang="ts">
import RegisterForm from '@/modules/user/components/RegisterForm/RegisterForm.vue'
import LoginForm from '@/modules/user/components/LoginForm/LoginForm.vue'
</script>
