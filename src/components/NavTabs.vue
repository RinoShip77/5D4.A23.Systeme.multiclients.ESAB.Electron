<template>
  <div class="d-flex">
    <aside class="bg-info rounded-end-5 mt-3 me-5 ps-3 pt-5 shadow-lg d-flex flex-column" style="width: 30rem">
      <router-link :to="{ name: 'allies' }">
        Allies
      </router-link>
      <router-link :to="{ name: 'elements' }">
        Elements
      </router-link>
      <router-link :to="{ name: 'leaderboard' }">
        Leaderboard
      </router-link>
    </aside>
    <div class="border border-3 rounded-2 p-5 overflow-auto shadow-lg mx-3 my-5 text-center"
      style="width: 120rem; height: 45rem">
      <slot class="m-5"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
aside a {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  padding: 1em;
  text-decoration: none;
}

aside a:hover {
  color: #016ECD;
  background: white;
  background-color: white;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  animation-name: animationOn;
  animation-duration: 1s
}

aside a:not(:hover) {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  padding: 1em;
  text-decoration: none;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  animation-name: animationOff;
  animation-duration: .25s
}

@keyframes animationOn {
  from {
    background-color: transparent;
  }

  to {
    background-color: whitesmoke;
  }
}

@keyframes animationOff {
  from {
    background-color: whitesmoke;
  }

  to {
    background-color: transparent;
  }
}
</style>