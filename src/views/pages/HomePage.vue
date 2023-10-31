<template>
    <InitialLayout>
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h2 class="justify-content-center">Bienvenue sur</h2>
                    <h1>Andromia Technologies</h1>
                    <!--//TODO: Short description?-->

                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button class="nav-link">
                        <router-link class="d-flex align-items-center" :to="{ name: 'login' }">
                            Se connecter
                        </router-link>
                    </button>
                    <br>
                    <button class="nav-link">
                        <router-link class="d-flex align-items-center" :to="{ name: 'accountCreation' }">
                            Créer un compte
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </InitialLayout>
</template>
<script setup lang="ts">
import InitialLayout from '../layouts/InitialLayout.vue';
</script>

//TODO: Make the style for the page.
<style scoped>
button {
    width: 200px;
    height: auto;
    margin: auto;
}
</style>