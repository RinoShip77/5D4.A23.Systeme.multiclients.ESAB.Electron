<template>
  <DefaultLayout>
    <h1 class="my-3 text-decoration-underline">Mes Allies</h1>
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
    <div class="col-12" v-else>
      <div class="row row-cols-6 g-2">
        <div class="col my-2" v-for="ally of allies">
          <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#allyModal" @click="openModal(ally.uuid)">
            <div class="card-header">
              <h4>{{ ally.name }}</h4>
            </div>
            <div class="card-body">
              <div class="border-secondary-subtle border-5 border-bottom rounded-5">
                <img :src="ally.asset" class="img-fluid">
              </div>
              <div class="d-flex justify-content-between">
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
  <!-- TODO: Complete the modal -->
  <div class="modal fade" id="allyModal" tabindex="-1" aria-labelledby="allyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="card h-100 p-2">
          <div class="d-flex">
            <img :src="ally?.asset" class="img-fluid img-thumbnail m-1" alt="{{ ally.name }}" title="{{ ally.name }}">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h2 class="card-title">{{ ally?.name }}</h2>
                <div class="d-flex flex-column">
                  <h3>Date de capture:</h3>
                  <span
                    class="border border-2 border-black rounded-3 opacity-50 px-2 text-decoration-underline fs-5 text-center w-75">
                    JJ/MM/AAAA
                    {{ ally?.createdAt }}
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
                  <img src="@/assets/books/yellow.png" class="img-fluid w-25 mt-5">
                  <img src="@/assets/affinities/air.svg" class="img-fluid w-25">
                  <img src="@/assets/books/blue.png" class="img-fluid w-25 mt-5">
                </div>
              </div>
              <div id="carouselAllyIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselAllyIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselAllyIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselAllyIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="bg-dark-subtle bg-gradient rounded-5 z-0">
                  <div class="z-1 carousel-inner mx-auto my-2 p-5 text-center">
                    <div class="carousel-item active">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMfuAMQJ3blS1M379TuqzpRzcqooBbkYVsQ&usqp=CAU"
                        class="carousel" alt="Element name">
                    </div>
                    <div class="carousel-item">
                      <img src="https://image.pngaaa.com/700/5273700-middle.png" class="carousel" alt="Element name">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselAllyIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselAllyIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
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
img.carousel {
  width: 100px;
  height: auto
}
</style>