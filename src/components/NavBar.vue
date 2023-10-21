<template>
  <header>
    <nav class="navbar navbar-expand-md fixed-top bg-secondary bg-gradient">
      <div class="container-fluid mx-1">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'home' }">
          <i class="fas fa-user-astronaut me-3" style="font-size: 5em" alt="Logo"></i>
          <span class="placeholder col-10">Title</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="d-flex ms-auto">
            <div class="d-flex align-items-center">
              <div class="display-2">
                <i class="fa-solid fa-caret-left text-danger" style="margin-right: -17px"></i>
              </div>
              <button class="btn btn-danger rounded-3 mt-1 px-5 fs-4 text-uppercase fw-bold">
                Se déconnecter
              </button>
              <div class="nav-link mx-2">
                <img src="https://ui-avatars.com/api/?name=Firstname}}+Lastname}}&rounded=true&size=80">
                <div style="margin-top: -15px; margin-left: 45px">
                  <span class="badge bg-success rounded-circle p-2">
                    <span class="visually-hidden">Connecté</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-light d-flex rounded-5 px-5 py-3">
              <div class="d-flex align-items-center me-3">
                <span class="placeholder">Inox total</span>
                <i class="fas fa-sack-dollar ms-2 fs-1"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <i class="fas fa-map-location-dot fs-1"></i>
                <span class="placeholder mt-2">Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>