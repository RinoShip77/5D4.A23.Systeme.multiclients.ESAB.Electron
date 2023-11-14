<template>
  <DefaultLayout>
    <h1 class="my-3 text-decoration-underline title">Mes Allies</h1>
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
      <div class="row row-cols-6 g-4 content">
        <div class="col my-2" v-for="ally of allies">
          <div class="card border-3 border-secondary-subtle shadow-lg" type="button" data-bs-toggle="modal"
            data-bs-target="#allyModal" @click="openModal(ally.uuid)">
            <div class="card-header bg-body-secondary">
              <h4>{{ ally.name }}</h4>
            </div>
            <div class="card-body">
              <img :src="ally.asset" class="img-fluid bg-light rounded-circle shadow-lg">
              <div class="d-flex justify-content-between mt-3">
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
    </div>
  </DefaultLayout>

  <!-- Modal for the details of one Ally -->
  <div class="modal fade" id="allyModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content bg-transparent border-0">
        <div class="card h-100 p-2 rounded-5">
          <div class="d-flex justify-content-between">
            <img :src="ally?.asset" alt="{{ ally.name }}" title="{{ ally.name }}"
              class="img-fluid img-thumbnail rounded-5 m-1" width="475">
            <div class="d-flex flex-column m-1 content">
              <div class="d-flex justify-content-between mx-5 my-2 mt-3">
                <h2 class="text-decoration-underline fw-bold">{{ ally?.name }}</h2>
                <div class="d-flex flex-column text-center">
                  <h3>Date de capture:</h3>
                  <span
                    class="border border-2 border-black rounded-3 opacity-50 px-2 text-decoration-underline fs-5 text-center">
                    {{ ally?.createdAt.toString().split('T')[0] }}
                  </span>
                </div>
              </div>
              <div class="d-flex mx-3 my-3">
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
              <div class="d-flex mx-auto mt-3 bg-body-tertiary rounded-5">
                <div class="d-flex flex-column text-center" v-for="kernel of ally?.kernel">
                  <img :src="`/src/assets/elements/element_${kernel}.png`" class="img-fluid">
                  <h4>{{ kernel }}</h4>
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
import { AllyRepository } from '@/repositories/AllyRepository';
import { Ally } from '@/models/Ally';

const allyRepository = new AllyRepository();
const allies = ref<Ally[]>([]);
const ally = ref<Ally>();
const isLoading = ref(true);

onMounted(async () => {
  setTimeout(() => { isLoading.value = false; }, 1000);
  allies.value = await allyRepository.retrieveAll();
})

async function openModal(idAlly: string) {
  ally.value = await allyRepository.retrieveOne(idAlly);
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