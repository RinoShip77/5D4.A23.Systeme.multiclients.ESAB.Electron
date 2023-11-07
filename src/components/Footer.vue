<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <router-link class="d-flex align-items-center text-decoration-none" :to="{ name: 'allies' }">
        <h4 class="text-body-tertiary title">© 2023 Andromia Technologies, Inc</h4>
      </router-link>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex fs-2 me-3">
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <i class="fa-brands fa-html5"></i>
        </a>
      </li>
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <i class="fa-brands fa-bootstrap"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
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