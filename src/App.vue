<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './modules/common/NavMenu/NavMenu.vue'
</script>

<template>
  <nav>
    <NavMenu />
  </nav>

  <RouterView />
</template>
