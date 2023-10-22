<template>
  <div class="d-flex align-items-start mx-5 mt-5">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button class="nav-link active" id="v-pills-allies-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allies"
        type="button" role="tab" aria-controls="v-pills-allies" aria-selected="false">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'allies' }">Allies</router-link>
      </button>
      <button class="nav-link" id="v-pills-elements-tab" data-bs-toggle="pill" data-bs-target="#v-pills-elements"
        type="button" role="tab" aria-controls="v-pills-elements" aria-selected="false">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'elements' }">Elements</router-link>
      </button>
      <button class="nav-link" id="v-pills-scoreboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-scoreboard"
        type="button" role="tab" aria-controls="v-pills-scoreboard" aria-selected="false">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'scoreboard' }">Tableau des scores</router-link>
      </button>
    </div>
    <div class="tab-content border border-3 rounded-3 p-3 overflow-auto shadow-lg" style="width: 120rem; height: 45rem" id="v-pills-tabContent">
      <div class="tab-pane fade show active text-center" id="v-pills-allies" role="tabpanel" aria-labelledby="v-pills-allies-tab" tabindex="0">
        <slot></slot>
      </div>
      <div class="tab-pane fade text-center" id="v-pills-elements" role="tabpanel" aria-labelledby="v-pills-elements-tab" tabindex="0">
        <slot></slot>
      </div>
      <div class="tab-pane fade text-center" id="v-pills-scoreboard" role="tabpanel" aria-labelledby="v-pills-scoreboard" tabindex="0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>