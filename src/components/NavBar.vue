<template>
  <header>
    <nav class="navbar navbar-expand-md bg-secondary bg-gradient">
      <div class="container-fluid mx-1">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'allies' }">
          <img src="@/assets/logo.png" alt="Andromia Technologies" title="Andromia Technologies" class="img-fluid"
            width="100">
          <h1 class="ms-2 title">Andromia Technologies</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="d-flex ms-auto">
            <div class="d-flex align-items-center">
              <!-- <div class="display-3">
                <i class="fa-solid fa-caret-left text-danger" style="margin-right: -17px"></i>
              </div> -->
              <button class="btn btn-danger rounded-3 mt-1 px-5 fs-5 text-uppercase fw-bold" @click="disconnect()">
                 Se déconnecter
              </button>
              <div class="nav-link mx-2">
                <img :src="`https://ui-avatars.com/api/?name=${user?.name}+${user?.surname}&rounded=true&size=80`">
                <div style="margin-top: -1em; margin-left: 3.5em">
                  <span class="badge bg-success rounded-circle p-2">
                    <span class="visually-hidden">Connecté</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center bg-light rounded-4 px-5 py-2 stats">
              <div class="d-flex flex-column text-center mt-2 me-2">
                <i class="fas fa-sack-dollar fs-1"></i>
                <div title="Inox total">
                  <span>{{ user?.inventory.inox }}</span>
                  <img src="@/assets/ui/inox.png" alt="Inox icon" class="img-fluid" width="50">
                </div>
              </div>
              <div class="d-flex flex-column text-center ms-2">
                <i class="fas fa-map-location-dot fs-1"></i>
                <span class="mt-2">50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserRepository } from '@/repositories/UserRepository';
import { User } from '@/models/User';
import router from "@/router";

const userRepository = new UserRepository();
const user = ref<User>();

onMounted(async () => {
  let idUser: string = '1'; //localStorage.getItem('idUser');
  user.value = await userRepository.retrieveOne(idUser);
})

async function disconnect() {
    try {
        const response = await userRepository.disconnect();

        if (response != null) {
            console.log(response);
            //TODO: Retirer le token JWT à l'utilisateur connecté.
            
            router.push({ name: 'login' })
        }
    } catch (err) {
        alert('Erreur de connexion :\n' + err);
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kenia&family=Play:wght@700&display=swap');

.title {
  font-family: 'Play', sans-serif;
  margin-left: .25em;
}

.stats {
  font-family: 'Kenia', sans-serif;
  font-size: 1.5em;
}
</style>