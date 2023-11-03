<template>
  <DefaultLayout>
    <h1 class="my-3 text-decoration-underline">Mes Elements</h1>
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
    <div class="col-12" v-else>
      <div class="row row-cols-5 g-2">
        <div class="col my-2" v-for="element of elements">
          <div class="card">
            <div class="text-center">
              <h4>{{ element.name }}</h4>
            </div>
            <div class="text-center card-body">
              <img :src="element.icon">
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
import { ElementRepository } from '@/repositories/ElementRepository';
import { Element } from '@/models/Element';

const elementRepository = new ElementRepository();
const elements = ref<Element[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  elements.value = await elementRepository.retrieveAll();
  setTimeout(() => { isLoading.value = false; }, 1000);
})
</script>

<style scoped>
img {
  width: 125px;
  height: auto
}
</style>