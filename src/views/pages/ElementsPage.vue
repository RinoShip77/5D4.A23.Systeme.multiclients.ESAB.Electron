<template>
  <DefaultLayout>
    <h1 class="display-3 mb-5 text-decoration-underline title">Mes Elements</h1>
    <div class="loading" v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgba(241, 242, 243, 0); display: block;" width="200px" height="200px"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <defs>
          <path id="path" d="M50 15A8 35 0 0 1 50 85A8 35 0 0 1 50 15" fill="none"></path>
          <path id="patha" d="M0 0A8 35 0 0 1 0 70A8 35 0 0 1 0 0" fill="none"></path>
        </defs>
        <g transform="rotate(0 50 50)">
          <use xlink:href="#path" stroke="#b7b7b7" stroke-width="2"></use>
        </g>
        <g transform="rotate(60 50 50)">
          <use xlink:href="#path" stroke="#b7b7b7" stroke-width="2"></use>
        </g>
        <g transform="rotate(120 50 50)">
          <use xlink:href="#path" stroke="#b7b7b7" stroke-width="2"></use>
        </g>
        <g transform="rotate(0 50 50)">
          <circle cx="50" cy="15" r="6" fill="#000000">
            <animateMotion dur="1s" repeatCount="indefinite" begin="0s">
              <mpath xlink:href="#patha"></mpath>
            </animateMotion>
          </circle>
        </g>
        <g transform="rotate(60 50 50)">
          <circle cx="50" cy="15" r="6" fill="#ff0000">
            <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">
              <mpath xlink:href="#patha"></mpath>
            </animateMotion>
          </circle>
        </g>
        <g transform="rotate(120 50 50)">
          <circle cx="50" cy="15" r="6" fill="#ffe100">
            <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">
              <mpath xlink:href="#patha"></mpath>
            </animateMotion>
          </circle>
        </g>
      </svg>
    </div>
    <div class="col-12 mt-5" v-else>
      <div v-if="canRetry">
        <div class="alert alert-danger fs-1 fw-bold w-50 mx-auto" role="alert">
          Impossible de récupérer les données
        </div>
        <button class="btn bg-transparent rounded-circle p-4" @click="retrieveElements()">
          <i class="fas fa-arrows-rotate" style="font-size: 6em"></i>
        </button>
      </div>
      <div class="row row-cols-6 content" v-else-if="explorer?.inventory.elements.length !== 0">
        <div class="col my-2" v-for="element of explorer?.inventory.elements">
          <div class="card border-3 border-body-tertiary shadow-lg">
            <div class="card-header bg-body-secondary">
              <h4>{{ element.element }}</h4>
            </div>
            <p class="fw-bold mt-1 text-decoration-underline">{{ element.quantity }}</p>
            <div class="card-body">
              <img :src="`/src/assets/elements/element_${element.element}.png`"
                class="img-fluid bg-light rounded-circle shadow-lg" style="margin-top: -1em">
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="fst-italic fw-bold fs-3">Aucun élément</p>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { onMounted, ref } from 'vue';
import { ExplorerRepository } from '@/repositories/ExplorerRepository';
import { Explorer } from '@/models/Explorer';

const explorerRepository = new ExplorerRepository();
const explorer = ref<Explorer>();
const isLoading = ref(true);
const canRetry = ref(false);
const token = '1'; // sessionStorage.getItem('token');
const idExplorer = '65666daaafbc5985391bf07f'; //sessionStorage.getItem('idExplorer');

onMounted(async () => {
  setTimeout(() => { isLoading.value = false; }, 1000);
  retrieveElements();
})

async function retrieveElements() {
  try {
    explorer.value = await explorerRepository.retrieveOne(idExplorer, token);
    canRetry.value = false;
  } catch (error) {
    canRetry.value = true;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Ubuntu:wght@500&display=swap');

.title {
  font-family: 'Oswald', sans-serif;
}

.content {
  font-family: 'Ubuntu', sans-serif;
}

img {
  width: 125px;
  height: auto
}
</style>