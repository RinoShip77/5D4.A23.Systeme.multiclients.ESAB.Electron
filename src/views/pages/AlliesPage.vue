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
      <div class="row row-cols-5 g-2">
        <div class="col my-2" v-for="(planet, index) of planets" :key="index">
            <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="text-center">
                <h4>{{ planet.name }}</h4>
                <h7>{{ index }}</h7>
              </div>
              <div class="text-center card-body">
                <img :src="planet.icon" class="planetList">
              </div>
              <input :value="planet.href">
            </div>
        </div>
      </div>
    </div>
  </DefaultLayout>

  <!-- Modal for the details of one Ally -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="card h-100 p-2">
          <div class="d-flex">
            <img :src="planet?.icon" class="img-fluid img-thumbnail m-1" alt="{{ planet.name }}" title="{{ planet.name }}">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h2 class="card-title">{{ planet?.name }}</h2>
                <div class="d-flex flex-column">
                  <h3>Date de capture:</h3>
                  <span class="border border-2 border-black rounded-3 opacity-50 px-2 text-decoration-underline fs-5 text-center w-75">
                    JJ/MM/AAAA
                    {{ planet?.discoveryDate  }}
                  </span>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex flex-column fs-4">
                  <div class="d-flex">
                    <i class="fas fa-explosion me-2"></i>
                    <h5>{{ planet?.position.x }}</h5>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-gauge-high me-2"></i>
                    <h5>{{ planet?.position.y }}</h5>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-shield-halved me-2"></i>
                    <h5>{{ planet?.position.z }}</h5>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-heart me-2"></i>
                    <h5>#</h5>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center mx-auto"
                  style="font-size: 6em">
                  <i class="fa-solid fa-hat-wizard mb-2"></i>
                  <div class="d-flex justify-content-around">
                    <i class="fa-solid fa-book-medical" style="margin-right: 1em"></i>
                    <i class="fa-solid fa-book" style="margin-left: 1em"></i>
                  </div>
                </div>
              </div>
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="bg-dark-subtle bg-gradient rounded-5 z-0">
                  <div class="z-1 carousel-inner mx-auto my-2 p-5 text-center">
                    <div class="carousel-item active">
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMfuAMQJ3blS1M379TuqzpRzcqooBbkYVsQ&usqp=CAU"
                      class="carousel" alt="Element name">
                    </div>
                    <div class="carousel-item active">
                      <img
                      src="https://image.pngaaa.com/700/5273700-middle.png"
                      class="carousel" alt="Element name">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
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
import { PlanetRepository } from '@/repositories/PlanetRepository';
import { Planet } from '@/models/Planet';

const planetRepository = new PlanetRepository();
const planets = ref<Planet[]>([]);
const planet = ref<Planet>();
const isLoading = ref(true);
const idPlanet = ref('')

onMounted(async () => {
  planets.value = await planetRepository.retrieveAll();
  setTimeout(() => { isLoading.value = false; }, 1000);
  planet.value = await planetRepository.retrieveOne(idPlanet);
})
</script>

<style scoped>
img.planetList {
  width: 125px;
  height: auto
}

img.carousel {
  width: 100px;
  height: auto
}</style>