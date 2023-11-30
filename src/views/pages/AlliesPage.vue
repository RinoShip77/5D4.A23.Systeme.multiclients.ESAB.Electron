<template>
  <DefaultLayout>
    <h1 class="display-3 mb-5 title"><span class="text-decoration-underline">Mes Allies</span> - ({{
      explorer?.allies.length }})</h1>
    <div class="loading" v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgba(241, 242, 243, 0); display: block;" width="200px" height="200px"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="6.451612903225806" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="0s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-0.5s"></animate>
        </circle>
        <circle cx="6.451612903225806" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-0.5s"></animate>
        </circle>
        <circle cx="16.129032258064512" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-0.7s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.2s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-0.7s"></animate>
        </circle>
        <circle cx="16.129032258064512" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-0.7s"></animate>
        </circle>
        <circle cx="25.806451612903224" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-0.9s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.4s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-0.9s"></animate>
        </circle>
        <circle cx="25.806451612903224" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-0.9s"></animate>
        </circle>
        <circle cx="35.48387096774193" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.1s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.6s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-1.1s"></animate>
        </circle>
        <circle cx="35.48387096774193" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-1.1s"></animate>
        </circle>
        <circle cx="45.16129032258064" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.3s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.8s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-1.3s"></animate>
        </circle>
        <circle cx="45.16129032258064" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-1.3s"></animate>
        </circle>
        <circle cx="54.838709677419345" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-1.5s"></animate>
        </circle>
        <circle cx="54.838709677419345" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.5s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-1.5s"></animate>
        </circle>
        <circle cx="64.51612903225805" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-1.7s"></animate>
        </circle>
        <circle cx="64.51612903225805" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.7s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.2s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-1.7s"></animate>
        </circle>
        <circle cx="74.19354838709677" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-1.9s"></animate>
        </circle>
        <circle cx="74.19354838709677" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.9s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.4s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-1.9s"></animate>
        </circle>
        <circle cx="83.87096774193547" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-2.1s"></animate>
        </circle>
        <circle cx="83.87096774193547" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-3.1s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.6s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-2.1s"></animate>
        </circle>
        <circle cx="93.54838709677418" cy="50" r="3" fill="#0074e4">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#0074e4;#ffffff;#0074e4" dur="2s"
            repeatCount="indefinite" begin="-2.3s"></animate>
        </circle>
        <circle cx="93.54838709677418" cy="50" r="3" fill="#74c005">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
            dur="2s" repeatCount="indefinite" begin="-3.3s"></animate>
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.8s"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#74c005;#0074e4;#74c005" dur="2s"
            repeatCount="indefinite" begin="-2.3s"></animate>
        </circle>
      </svg>
    </div>
    <div class="col-12 mt-5" v-else>
      <div v-if="canRetry">
        <div class="alert alert-danger fs-1 fw-bold w-50 mx-auto" role="alert">
          Impossible de récupérer les données
        </div>
        <button class="btn bg-transparent rounded-circle p-4" @click="retrieveAllies()">
          <i class="fas fa-arrows-rotate" style="font-size: 4em"></i>
        </button>
      </div>
      <div class="row row-cols-4 content" v-else-if="explorer?.allies.length !== 0">
        <div class="col my-2" v-for="ally of explorer?.allies">
          <div class="card bg-body-tertiary border-3 border-secondary-subtle shadow-lg" type="button"
            data-bs-toggle="modal" data-bs-target="#allyModal" @click="openModal(ally)">
            <!-- style="background-image:  url('/src/assets/card_background.png')" -->
            <div class="card-header bg-body-secondary">
              <h4 class="text-capitalize">{{ ally.name }}</h4>
            </div>
            <div class="card-body">
              <img :src="ally.asset" class="img-fluid bg-light rounded-circle shadow-lg">
              <div class="d-flex justify-content-between bg-body-secondary mt-3 shadow-sm rounded p-2">
                <img :src="`/src/assets/books/${ally.books[0]}.png`" class="img-fluid w-25 mt-4">
                <img :src="`/src/assets/affinities/${ally.affinity}.svg`" class="img-fluid w-25 h-25">
                <img :src="`/src/assets/books/${ally.books[1]}.png`" class="img-fluid w-25 mt-4">
              </div>
              <div class="d-flex justify-content-around border-top mt-3 pt-3">
                <div class="d-flex flex-column">
                  <img src="@/assets/ui/power.png" class="img-fluid" width="25">
                  <p>{{ ally.stats.power }}</p>
                </div>
                <div class="d-flex flex-column">
                  <img src="@/assets/ui/speed.png" class="img-fluid" width="25">
                  <p>{{ ally.stats.speed }}</p>
                </div>
                <div class="d-flex flex-column">
                  <img src="@/assets/ui/shield.png" class="img-fluid" width="25">
                  <p>{{ ally.stats.shield }}</p>
                </div>
                <div class="d-flex flex-column">
                  <img src="@/assets/ui/life.png" class="img-fluid" width="25">
                  <p>{{ ally.stats.life }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="fst-italic fw-bold fs-3">Aucun Ally.</p>
      </div>
    </div>
  </DefaultLayout>

  <!-- Modal for the details of one Ally -->
  <div class="modal fade" id="allyModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content bg-transparent border-0 d-flex">
        <div class="card w-auto p-2 rounded-5">
          <div class="d-flex justify-content-between">
            <img :src="ally?.asset" alt="{{ ally.name }}" title="{{ ally.name }}"
              class="img-fluid img-thumbnail rounded-5 m-1 w-50">
            <div class="d-flex flex-column m-1 px-3 bg-body-secondary rounded-5 content">
              <div class="d-flex flex-column justify-content-between mt-5 mb-4">
                <div class="d-flex justify-content-around mb-4">
                  <span class="text-capitalize display-5 fw-bold">{{ ally?.name }}</span>
                  <div class="d-flex flex-column text-center">
                    <h3>Date de capture:</h3>
                    <span class="border border-2 border-black rounded-3 opacity-75 px-2 fs-5 text-nowrap">
                      {{ ally?.createdAt.toString().split('T')[0] }}
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex flex-column fs-4">
                    <div class="d-flex">
                      <img src="@/assets/ui/power.png" class="img-fluid w-25">
                      <h5 class="ms-2">{{ ally?.stats.power }}</h5>
                    </div>
                    <div class="d-flex">
                      <img src="@/assets/ui/speed.png" class="img-fluid w-25">
                      <h5 class="ms-2">{{ ally?.stats.speed }}</h5>
                    </div>
                    <div class="d-flex">
                      <img src="@/assets/ui/shield.png" class="img-fluid w-25">
                      <h5 class="ms-2">{{ ally?.stats.shield }}</h5>
                    </div>
                    <div class="d-flex">
                      <img src="@/assets/ui/life.png" class="img-fluid w-25">
                      <h5 class="ms-2">{{ ally?.stats.life }}</h5>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <img :src="`/src/assets/books/${ally?.books[0]}.png`" class="img-fluid w-25 mt-5">
                    <img :src="`/src/assets/affinities/${ally?.affinity}.svg`" class="img-fluid w-25 mb-5">
                    <img :src="`/src/assets/books/${ally?.books[1]}.png`" class="img-fluid w-25 mt-5">
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3 rounded-5">
                <div class="d-flex flex-column text-center" v-for="kernel of ally?.kernel">
                  <img :src="`/src/assets/elements/element_${kernel}.png`" class="img-fluid">
                  <h4 class="text-capitalize">{{ kernel }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { onMounted, ref } from 'vue';
import { ExplorerRepository } from '@/repositories/ExplorerRepository';
import { Explorer } from '@/models/Explorer';
import { Ally } from '@/models/Ally';

const explorerRepository = new ExplorerRepository();
const explorer = ref<Explorer>();
const ally = ref<Ally>();
const isLoading = ref(true);
const canRetry = ref(false);
const token = '1'; // sessionStorage.getItem('token');
const idExplorer = '654aab9c00e2b7bbe8417c28'; // sessionStorage.getItem('idExplorer');

onMounted(async () => {
  setTimeout(() => { isLoading.value = false; }, 1000);
  retrieveAllies();
})

async function retrieveAllies() {
  try {
    explorer.value = await explorerRepository.retrieveOne(idExplorer, token);
    canRetry.value = false;
  } catch (error) {
    canRetry.value = true;
  }
}

async function openModal(recievedAlly: Ally) {
  ally.value = recievedAlly;
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
</style>