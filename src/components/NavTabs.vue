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
    <div class="border border-3 rounded-start-5 rounded-end-4 p-5 overflow-auto shadow-lg ms-3 mt-3 me-1 text-center"
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

  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  animation: animationOn 1s;
  color: #016ECD;
  background-color: whitesmoke
}

aside a:not(:hover) {
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em;
  text-decoration: none;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  animation: animationOff 0.5s;
  color: whitesmoke;
  background-color: transparent
}

@keyframes animationOn {
  from {
    color: whitesmoke;
    background-color: transparent
  }

  to {
    color: #016ECD;
    background-color: whitesmoke
  }
}

@keyframes animationOff {
  from {
    color: #016ECD;
    background-color: whitesmoke
  }

  to {
    color: whitesmoke;
    background-color: transparent
  }
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #E56773;
  border: 1px solid #E56773;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 3px solid transparent;
  background-color: #00FFFF;
}

::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  border: 3px solid transparent;
  background-color: #02f0f0;
}
</style>