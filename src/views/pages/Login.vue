<template>
    <InitialLayout>
        <div class="container">
            <div class="row">
                <h1 class="text-center mx-2 my-2 mt-5">Andromia Technologies</h1>
                <div class="d-flex justify-content-center">
                    <div class="col-4 mx-2 my-2">
                        <form class="form" @submit="login()" method="post">
                            <label for="username" class="form-label">Nom d'utilisateur</label>
                            <input v-model="username" class="form-control" id="username" required>
                            <label for="password" class="form-label">Mot de passe</label>
                            <input v-model="password" type="password" class="form-control" id="password" required>
                            <input type="submit" class="form-control btn btn-primary my-4" value="Se connecter">

                        </form>
                        <router-link :to="{ name: 'homepage' }">Tricher</router-link>
                        <div class="my-5 text-center">
                            <p>Vous êtes un citoyen et voulez être un explorateur?<br>
                                <router-link :to="{ name: 'accountCreation' }">Créer un compte</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </InitialLayout>
</template>

<script setup lang="ts">
import InitialLayout from '../layouts/InitialLayout.vue';
import { ref } from 'vue';
import { UserRepository } from '@/repositories/UserRepository';
import router from "@/router";

const userRepository = new UserRepository();
const username = ref<string>("");
const password = ref<string>("");

async function login() {
    userRepository.login(username.value, password.value).then((response) => {
        console.log('Connexion réussie!', response);
        //TODO: ajouter token au user

        //Navigation
        router.push('/');
    }).catch((err) => {
        console.error('Erreur de connexion', err);
        router.push('/login');
    })



}
</script>

//TODO: Make the style for the page.
<style scoped></style>