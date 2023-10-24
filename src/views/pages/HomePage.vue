<template>
    <DefaultLayout>
        <div>
            <h2>Bienvenue sur </h2>
            <h1>Andromia Technologies</h1>
            //TODO: Short description?
        </div>
        <div class="col-12">
            <button>Se connecter</button>
            <br>
            <button>Créer un compte</button>
        </div>
    </DefaultLayout>
</template>
//TODO: Use different layout from the default in order to remove the NavBar.
<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>

//TODO: Make the style for the page.
<style scoped>
button {
    width: 200px;
    height: auto;
    margin: auto;
}
</style>