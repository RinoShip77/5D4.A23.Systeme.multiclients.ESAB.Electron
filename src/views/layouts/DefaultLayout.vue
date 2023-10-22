<template>
  <NavBar></NavBar>

  <NavTabs>
    <slot></slot>
  </NavTabs>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar.vue';
import NavTabs from '../../components/NavTabs.vue';
</script>

<style scoped></style>