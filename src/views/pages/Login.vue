<template>
    <InitialLayout>
        <div class="container">
            <div class="row">
                <h1 class="text-center mx-2 my-2 mt-5">Andromia Technologies</h1>
                <div class="d-flex justify-content-center">
                    <div class="col-4 mx-2 my-2">
                        <form class="form" @submit="login()">
                            <label for="email" class="form-label">Adresse Courrielle</label>
                            <input v-model="email" class="form-control" id="email" required>
                            <label for="password" class="form-label">Mot de passe</label>
                            <input v-model="password" type="password" class="form-control" id="password" required>
                            <input type="submit" class="form-control btn btn-primary my-4" value="Se connecter">

                        </form>
                        <router-link :to="{ name: 'allies' }">Tricher</router-link>
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
import { ExplorerRepository } from '@/repositories/ExplorerRepository';
import router from "@/router";

const userRepository = new ExplorerRepository();
const email = ref<string>("");
const password = ref<string>("");

var navigationAllowed = false;

async function login() {
    //TODO: Sprint 2: Corriger l'erreur suivante: La première tentative de connexion échoue toujours après avoir démarré l'application.
    // La page ne fait que se rafraichir lors de la première tentative sans qu'elle ne produise une erreure.
    // Cette erreure se produit aussi quand l'on navigue de la page de connexion a celle de création de compte et vice-versa.

    //TODO: Sprint 2: Afficher les messages d'erreurs à l'utilisateur.
    try {
        const response = await userRepository.login(email.value, password.value);
        if (response != null) {
            console.log('Connexion réussie!', response);
            //TODO: Sprint 2: Ajouter le token JWT à l'utilisateur connecté.
            sessionStorage.setItem('token', response.tokens.accessToken);
            sessionStorage.setItem('refreshToken', response.tokens.refreshToken);


            const secondResponse = await userRepository.retrieveOne(response.explorer.username, response.tokens.accessToken);
            sessionStorage.setItem('idExplorer', secondResponse.id);
            console.log(secondResponse);


            navigationAllowed = true;
        }
        //Navigation
        if (navigationAllowed) {
            router.push({ name: 'allies' });
        }
    } catch (err) {
        console.error('Erreur de connexion', err);
    }


}
</script>

//TODO: Make the style for the page.
<style scoped></style>@/repositories/ExplorerRepository