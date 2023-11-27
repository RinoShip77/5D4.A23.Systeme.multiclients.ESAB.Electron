<template>
  <DefaultLayout>
    <h1 class="display-3 mb-5 text-decoration-underline title">Tableau des scores</h1>
    <div class="loading" v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgba(255, 255, 255, 0); display: block;" width="200px" height="200px"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(180 50 50)">
          <rect x="13.5" y="15" width="13" height="40" fill="#0099e5">
            <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1.0526315789473684s"
              repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-0.42105263157894735s"></animate>
          </rect>
          <rect x="33.5" y="15" width="13" height="40" fill="#34bf49">
            <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1.0526315789473684s"
              repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-0.21052631578947367s"></animate>
          </rect>
          <rect x="53.5" y="15" width="13" height="40" fill="#ff4c4c">
            <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1.0526315789473684s"
              repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-0.631578947368421s"></animate>
          </rect>
          <rect x="73.5" y="15" width="13" height="40" fill="#0099e5">
            <animate attributeName="height" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1.0526315789473684s"
              repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-1.0526315789473684s"></animate>
          </rect>
        </g>
      </svg>
    </div>
    <div class="col-12" v-else>
      <div v-if="canRetry">
        <div class="alert alert-danger fs-1 fw-bold w-50 mx-auto" role="alert">
          Impossible de récupérer les données
        </div>
        <button class="btn bg-transparent rounded-circle p-4" @click="retrieveLeaderboard()">
          <i class="fas fa-arrows-rotate" style="font-size: 4em"></i>
        </button>
      </div>
      <div class="table-responsive content" v-else>
        <table class="table table-striped table-hover">
          <thead class="fs-5">
            <th scope="col">#</th>
            <th scope="col">Courriel</th>
            <th scope="col" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span class="me-5 bg-transparent">Valeur</span>
              <i class="fas fa-sort bg-transparent ms-5"></i>
            </th>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(User, index) of leaderboard?.board" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ User.email }}</td>
              <td v-if="order === 'inox'">{{ User.inventory.inox }}</td>
              <td v-if="order === 'ally'">{{ getAllies(User.uuid) }}</td>
              <td v-if="order === 'elements'">{{ User.inventory.elements.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultLayout>

  <!-- Modal for the details of one Ally -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Choississez l'ordre de tri</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <select class="form-select form-select-lg w-75 me-4" v-model="order" @change="orderLeaderboard(order)">
            <option value="inox">Total d'Inox</option>
            <option value="ally">Nombre d'Ally</option>
            <option value="elements">Nombre d'Éléments</option>
          </select>
          <div class="fs-1">
            <i class="fas fa-coins" v-if="order === 'inox'"></i>
            <i class="fas fa-ghost" v-if="order === 'ally'"></i>
            <i class="fas fa-atom" v-if="order === 'elements'"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { onMounted, ref } from 'vue';
import { LeaderboardRepository } from '@/repositories/LeaderboardRepository';
import { AllyRepository } from '@/repositories/AllyRepository';
import { Leaderboard } from '@/models/Leaderboard';

const leaderboardRepository = new LeaderboardRepository();
const allyRepository = new AllyRepository();
const leaderboard = ref<Leaderboard>();
const isLoading = ref(true);
const canRetry = ref(false);
let order = ref();

onMounted(async () => {
  setTimeout(() => { isLoading.value = false; }, 1000);
  retrieveLeaderboard();
})

async function retrieveLeaderboard() {
  try {
    leaderboard.value = await leaderboardRepository.retrieveAll();
    order.value = 'inox';
    canRetry.value = false;
  } catch (error) {
    canRetry.value = true;
  }
}

async function getAllies(idUser: string) {
  let allies = await allyRepository.retrieveAll(idUser);

  setTimeout(() => {

  }, 1000);
  return allies.length;
}

async function orderLeaderboard(order: string) {
  console.log(order);

  // switch (order) {
  //   case 'inox':
  //     await leaderboard.value?.board = leaderboard.value?.board.sort((explorater1, explorater2) => (explorater1.inventory.inox > explorater2.inventory.inox ? 1 : -1));
  //     break;

  //   case 'ally':
  //     await leaderboard.value?.board = leaderboard.value?.board.sort((explorater1, explorater2) => (explorater1.inventory.inox > explorater2.inventory.inox ? 1 : -1));
  //     break;

  //   case 'elements':
  //     await leaderboard.value?.board = leaderboard.value?.board.sort((explorater1, explorater2) => (explorater1.inventory.elements.length > explorater2.inventory.elements.length ? 1 : -1));
  //     break;
  // }
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