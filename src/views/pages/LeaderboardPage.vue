<template>
  <DefaultLayout>
    <div class="mb-5">
      <h1 class="display-3 text-decoration-underline pageTitle">Tableau des scores</h1>
      <span class="text-body-secondary fs-5" v-if="leaderboard">
        Le classement des 25 meilleurs Explorers selon leur
        <span class="text-capitalize">
          {{ order }}
        </span>
      </span>
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
      <div class="bg-info rounded-3 content" v-else-if="leaderboard?.top25?.length !== 0">
        <table class="table table-info table-striped table-hover rounded">
          <thead class="fs-2">
            <th scope="col" title="Position">#</th>
            <th scope="col" title="Identifiant">Nom d'utilisateur</th>
            <th scope="col" title="Sélectionner l'ordre de tri" type="button" data-bs-toggle="modal"
              data-bs-target="#orderModal">
              <span class="bg-transparent">Valeur</span>
              <i class="fas fa-sort ms-5 bg-transparent"></i>
            </th>
          </thead>
          <tbody v-for="(leader, index) of leaderboard?.top25.slice(0, 25)" :key="index">
            <tr class="table-danger fw-bold fs-5" v-if="leader.username === leaderboard?.you.username">
              <th scope="row" v-if="index < lastPosition">
                <i class="fas fa-circle-up me-1 text-success"></i>
                <span class="text-success fw-bolder">+</span>
                <span class="me-1 text-success">{{ lastPosition - index }}</span>
                {{ index + 1 }}
              </th>
              <th scope="row" v-else-if="index > lastPosition">
                <i class="fas fa-circle-down me-1 text-danger"></i>
                <span class="text-danger fw-bolder">-</span>
                <span class="me-1 text-danger">{{ index - lastPosition }}</span>
                {{ index + 1 }}
              </th>
              <th scope="row" v-else>
                {{ index + 1 }}
              </th>
              <td>{{ leader.username }}</td>
              <td v-if="order === 'inox'">{{ leaderboard?.you.inventory.inox }}</td>
              <td v-if="order === 'elements'">{{ leaderboard?.you.inventory.elements.length }}</td>
              <td v-if="order === 'allies'">{{ leaderboard?.you.allies?.length }}</td>
              <td v-if="order === 'explorations'">{{ leaderboard?.you.explorations?.length }}</td>
            </tr>
            <tr v-else>
              <th scope="row">
                <!-- <span v-if="leader.inventory.inox === leaderboard?.top25[index - 1]?.inventory.inox">
                  <span v-if="index < 1">{{ index + 1 }}</span>
                  <span
                    v-else-if="leaderboard?.top25[index - 1]?.inventory.inox === leaderboard?.top25[index - 2]?.inventory.inox">
                    {{ index - 1 }}
                  </span>
                  <span v-else>{{ index }}</span>
                </span>
                <span v-else-if="leader.inventory.elements.length === leaderboard?.top25[index - 1]?.inventory.elements.length">
                  <span v-if="index < 1">{{ index + 1 }}</span>
                  <span
                    v-else-if="leaderboard?.top25[index - 1]?.inventory.elements.length === leaderboard?.top25[index - 2]?.inventory.elements.length">
                    {{ index - 1 }}
                  </span>
                  <span v-else>{{ index }}</span>
                </span>
                <span v-else-if="leader.allies?.length === leaderboard?.top25[index - 1]?.allies?.length">
                  <span v-if="index < 1">{{ index + 1 }}</span>
                  <span
                    v-else-if="leaderboard?.top25[index - 1]?.allies?.length === leaderboard?.top25[index - 2]?.allies?.length">
                    {{ index - 1 }}
                  </span>
                  <span v-else>{{ index }}</span>
                </span>
                <span v-else-if="leader.explorations?.length === leaderboard?.top25[index - 1]?.explorations?.length">
                  <span v-if="index < 1">{{ index + 1 }}</span>
                  <span
                    v-else-if="leaderboard?.top25[index - 1]?.explorations?.length === leaderboard?.top25[index - 2]?.explorations?.length">
                    {{ index - 1 }}
                  </span>
                  <span v-else>{{ index }}</span>
                </span>
                <span v-else>{{ index + 1 }}</span> -->
                <span>{{ index + 1 }}</span>
              </th>
              <td>{{ leader.username }}</td>
              <td v-if="order === 'inox'">{{ leader.inventory.inox }}</td>
              <td v-if="order === 'elements'">{{ leader.inventory.elements.length }}</td>
              <td v-if="order === 'allies'">{{ leader.allies?.length }}</td>
              <td v-if="order === 'explorations'">{{ leader.explorations?.length }}</td>
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
          <select class="form-select form-select-lg w-75 me-4" v-model="order" @click="retrieveLeaderboard()">
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
import { ExplorerRepository } from '@/repositories/ExplorerRepository';
import { LeaderboardRepository } from '@/repositories/LeaderboardRepository';
import { AllyRepository } from '@/repositories/AllyRepository';
import { ExplorationRepository } from '@/repositories/ExplorationRepository';
import { Leaderboard } from '@/models/Leaderboard';

const explorerRepository = new ExplorerRepository();
const leaderboardRepository = new LeaderboardRepository();
const allyRepository = new AllyRepository();
const explorationRepository = new ExplorationRepository();
const leaderboard = ref<Leaderboard>();
const isLoading = ref(true);
const canRetry = ref(false);
let order = ref('inox');
let lastPosition = ref();

onMounted(async () => {
  setTimeout(() => {
    isLoading.value = false;
    retrieveLeaderboard();
  }, import.meta.env.VITE_LOADING_TIME);

  setInterval(async () => {
    retrieveLeaderboard();

    leaderboard.value?.top25.forEach(async leader => {
      if (leader.username === leaderboard.value?.you.username) {
        if (leaderboard.value?.top25.indexOf(leader) !== undefined) {
          sessionStorage.setItem('lastPosition', `${leaderboard.value?.top25.indexOf(leader)}`)
          lastPosition.value = Number(sessionStorage.getItem('lastPosition'));
        }
      }
    });

  }, import.meta.env.VITE_REFRESH_RATE);
})

async function retrieveLeaderboard() {
  try {
    const response = await explorerRepository.refreshToken(sessionStorage.getItem('refreshToken'));
    sessionStorage.setItem('token', response.accessToken);
    sessionStorage.setItem('refreshToken', response.refreshToken);

    canRetry.value = false;
    leaderboard.value = await leaderboardRepository.retrieveAll(sessionStorage.getItem('userHref'), order.value.toString());

    leaderboard.value?.top25.forEach(async leader => {
      leader.allies = await allyRepository.retrieveAll(leader.href, response.accessToken);
      leader.explorations = await explorationRepository.retrieveAll(leader.href, response.accessToken);

      if (leader.username === leaderboard.value?.you.username) {
        leaderboard.value.you.allies = await allyRepository.retrieveAll(sessionStorage.getItem('userHref'), response.accessToken);
        leaderboard.value.you.explorations = await explorationRepository.retrieveAll(sessionStorage.getItem('userHref'), response.accessToken);
      }
    });
  } catch (error) {
    canRetry.value = true;
  }
}
</script>

<style scoped></style>