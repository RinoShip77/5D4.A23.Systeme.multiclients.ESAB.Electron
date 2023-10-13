<template>
  <DefaultLayout>
    <h1 class="mt-5">Planètes</h1>
    <div class="loading" v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto" width="200px"
        height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s">
            </animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1"
              begin="-0.67s"></animate>
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s">
            </animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1"
              begin="-0.33s"></animate>
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s">
            </animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1"
              begin="0s"></animate>
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a" transform="rotate(90 50 50)"></path>
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
              values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
          </path>
          <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
              values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
          </path>
        </g>
      </svg>
    </div>
    <div class="col-12" v-else>
      <div class="row">
        <div class="col-4 my-2" v-for="(planet, index) of planets" :key="index">
          <div class="card">
            <div class="text-center">
              <h4>{{ planet.name }}</h4>
              <h7>{{ index }}</h7>
            </div>
            <div class="text-center card-body">
              <img :src="planet.icon" class="planet">
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { onMounted, ref } from 'vue';
import { PlanetRepository } from '@/repositories/PlanetRepository';
import { Planet } from '@/models/Planet';

const planetRepository = new PlanetRepository();
const planets = ref<Planet[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  planets.value = await planetRepository.retrieveAll();
  setTimeout(() => { isLoading.value = false; }, 1000);
})
</script>

<style scoped>img.planet {
  width: 225px;
  height: auto;
  margin: auto
}</style>