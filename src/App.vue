<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from '@/modules/common/components/NavMenu/NavMenu.vue'
</script>

<template>
  <nav>
    <NavMenu />
  </nav>

  <RouterView />
</template>
