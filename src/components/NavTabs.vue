<template>
  <div class="d-flex">
    <aside class="bg-info rounded-end-5 mt-3 me-5 ps-3 pt-5 shadow-lg d-flex flex-column" style="width: 30rem">
      <router-link :class="{ 'text-decoration-underline': alliesIsActive }" :to="{ name: 'allies' }"
        @click="switchActiveLink('allies')">
        Allies
      </router-link>
      <router-link :class="{ 'text-decoration-underline': elementsIsActive }" :to="{ name: 'elements' }"
        @click="switchActiveLink('elements')">
        Elements
      </router-link>
      <router-link :class="{ 'text-decoration-underline': leaderboardIsActive }" :to="{ name: 'leaderboard' }"
        @click="switchActiveLink('leaderboard')">
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
import { ref } from 'vue';

const alliesIsActive = ref(false);
const elementsIsActive = ref(false);
const leaderboardIsActive = ref(false);

async function switchActiveLink(link: string) {
  switch (link) {
    case 'allies':
      alliesIsActive.value = true;
      elementsIsActive.value = false;
      leaderboardIsActive.value = false;
      break;

    case 'elements':
      alliesIsActive.value = false;
      elementsIsActive.value = true;
      leaderboardIsActive.value = false;
      break;

    case 'leaderboard':
      alliesIsActive.value = false;
      elementsIsActive.value = false;
      leaderboardIsActive.value = true;
      break;
  }
  console.log(alliesIsActive.value)
  console.log(elementsIsActive.value)
  console.log(leaderboardIsActive.value)
}
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
</style>