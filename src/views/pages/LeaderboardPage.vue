<template>
  <DefaultLayout>
    <div class="mb-5">
      <h1 class="display-3 text-decoration-underline title">Tableau des scores</h1>
      <span class="text-body-secondary fs-5" v-if="leaderboard">Le classement des 25 Explorers<span
          v-if="order === 'inox' || order === 'elements' || order === 'allies' || order === 'explorations'"> selon leur
          <span class="text-capitalize">{{ order
          }}</span></span></span>
    </div>
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
      <div class="table-responsive content" v-else-if="leaderboard?.length !== 0">
        <table class="table table-striped table-hover" v-if="leaderboard">
          <thead class="fs-4 text-body-emphasis">
            <th scope="col">#</th>
            <th scope="col">Nom d'utilisateur</th>
            <th scope="col" type="button" data-bs-toggle="modal" data-bs-target="#orderModal">
              <span class="text-body-emphasis">Valeur</span>
              <i class="fas fa-sort ms-5 text-body-emphasis"></i>
            </th>
          </thead>
          <tbody v-for="(leader, index) of leaderboard" :key="index">
            <tr class="table-warning fw-bold" v-if="leader.username === explorer?.username">
              <th scope="row">
                {{ index + 1 }}
              </th>
              <td>{{ leader.username }}</td>
              <td v-if="order === 'inox'">{{ explorer.inventory.inox }}</td>
              <td v-if="order === 'elements'">{{ explorer.inventory.elements.length }}</td>
              <td v-if="order === 'allies'">{{ explorer.allies.length }}</td>
              <td v-if="order === 'explorations'">{{ explorer.explorations.length }}</td>
            </tr>
            <tr v-else>
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ leader.username }}</td>
              <td v-if="order === 'inox'">{{ leader.inventory.inox }}</td>
              <td v-if="order === 'elements'">{{ leader.inventory.elements.length }}</td>
              <td v-if="order === 'allies'">{{ leader.allies.length }}</td>
              <td v-if="order === 'explorations'">{{ leader.explorations.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p class="fst-italic fw-bold fs-3">Aucune donnée.</p>
      </div>
    </div>
  </DefaultLayout>

  <!-- Modal to change the order -->
  <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="orderModalLabel">Choississez l'ordre de tri</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <select class="form-select form-select-lg w-75 me-4" v-model="order" @change="retrieveLeaderboard()">
            <option value="inox">Total d'Inox</option>
            <option value="elements">Nombre d'Éléments</option>
            <option value="allies">Nombre d'Allies</option>
            <option value="explorations">Nombre d'Explorations</option>
          </select>
          <div class="fs-1">
            <i class="fas fa-coins" v-if="order === 'inox'"></i>
            <i class="fas fa-atom" v-if="order === 'elements'"></i>
            <i class="fas fa-dragon" v-if="order === 'allies'"></i>
            <i class="fas fa-route" v-if="order === 'explorations'"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';
import { onMounted, ref } from 'vue';
import { LeaderboardRepository } from '@/repositories/LeaderboardRepository';
import { ExplorerRepository } from '@/repositories/ExplorerRepository';
import { Explorer } from '@/models/Explorer';

const leaderboardRepository = new LeaderboardRepository();
const explorerRepository = new ExplorerRepository();
const leaderboard = ref<Explorer[]>();
const explorer = ref<Explorer>();
const isLoading = ref(true);
const canRetry = ref(false);
let order = ref('inox');

onMounted(async () => {
  setTimeout(() => {
    isLoading.value = false;
    retrieveLeaderboard();
  }, import.meta.env.VITE_LOADING_TIME);

  setInterval(retrieveLeaderboard, import.meta.env.VITE_REFRESH_RATE);
})

async function retrieveLeaderboard() {
  try {
    let token = sessionStorage.getItem('token');
    let href = sessionStorage.getItem('userHref');

    leaderboard.value = await leaderboardRepository.retrieveAll(order.value.toString());
    explorer.value = await explorerRepository.retrieveOne(href, token);
    canRetry.value = false;

    //TODO: Remove the switch when the server will respond correctly
    switch (order.value.toString()) {
      case 'inox':
        leaderboard.value?.sort(((explorer1, explorer2) => explorer2.inventory.inox - explorer1.inventory.inox));
        break;

      case 'elements':
        leaderboard.value?.sort(((explorer1, explorer2) => explorer2.inventory.elements.length - explorer1.inventory.elements.length));
        break;

      case 'allies':
        leaderboard.value?.sort(((explorer1, explorer2) => explorer2.allies.length - explorer1.allies.length));
        break;

      case 'explorations':
        leaderboard.value?.sort(((explorer1, explorer2) => explorer2.explorations.length - explorer1.explorations.length));
        break;
    }
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
</style>