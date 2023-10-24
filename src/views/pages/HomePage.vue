<template>
    <DefaultLayout>
        <div>
            <h2>Bienvenue sur </h2>
            <h1>Andromia Technologies</h1>
        </div>
        <div class="col-12">
            <button>Se connecter</button>
            <br>
            <button>Créer un compte</button>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
button {
    width: 200px;
    height: auto;
    margin: auto;
}
</style>