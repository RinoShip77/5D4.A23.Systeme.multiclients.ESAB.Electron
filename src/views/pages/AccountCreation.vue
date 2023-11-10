<template>
    <InitialLayout>
        <div class="container">
            <div class="row">
                <h1 class="text-center mx-2 my-2 mt-5">Andromia Technologies</h1>
                <h2 class="text-center mx-2 my-2 mt-5">Création de compte</h2>
                <div class="d-flex justify-content-center">
                    <div class="col-4 mx-2 my-2">
                        <form class="form">
                            <label for="email" class="form-label">Adresse courrielle</label>
                            <input v-model="email" type="email" class="form-control" name="email" required>
                            <label for="username" class="form-label">Nom d'utilisateur</label>
                            <input v-model="username" type="text" class="form-control" name="username" required>
                            <label for="password" class="form-label">Mot de passe</label>
                            <input v-model="password" type="password" class="form-control" name="password" required>
                            <label for="repeatpassword" class="form-label">Mot de passe</label>
                            <input v-model="repeatPassword" type="password" class="form-control" name="repeatpassword"
                                required>
                            <button class="form-control btn btn-primary my-4" @click="createAccount">Créer un
                                compte</button>

                        </form>
                        <div class="my-5 text-center">
                            <p>Vous êtes déja un explorateur?<br>
                                <router-link :to="{ name: 'login' }">Se connecter</router-link>
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
const email = ref<string>("");
const username = ref<string>("");
const password = ref<string>("");
const repeatPassword = ref<string>("");

var navigationAllowed = false;

async function createAccount() {
    //TODO: Sprint 2: Corriger l'erreur suivante: La première tentative de création échoue toujours après avoir démarré l'application.
    // La page ne fait que se rafraichir lors de la première tentative sans qu'elle ne produise une erreure.
    // Cette erreure se produit aussi quand l'on navigue de la page de connexion a celle de création de compte et vice-versa.

    //TODO: Sprint 2: Afficher les messages d'erreurs à l'utilisateur.
    try {
        if (password.value === repeatPassword.value) {
            const response = await userRepository.CreateAccount(email.value, username.value, password.value,);
            if (response != null) {
                console.log('Compte créé avec succès!', response);

                //TODO: Sprint 2: Ajouter le token JWT à l'utilisateur créé.

                navigationAllowed = true;
            }
        } else (
            console.log("Les mots de passe ne sont pas les mêmes:" + password.value + ' != ' + repeatPassword.value)
        )
    } catch (err) {
        console.error('Erreur lors de la création du compte', err);
    }
    //Navigation
    if (navigationAllowed) {
        router.push({ name: 'homepage' });
    }
}



</script>

//TODO: Make the style for the page.
<style scoped>
button {
    width: 200px;
    height: auto;
    margin: auto;
}
</style>