<template>
    <InitialLayout>
        <div class="container">
            <div class="row">
                <h1 class="text-center mx-2 my-2 mt-5">Andromia Technologies</h1>
                <h2 class="text-center mx-2 my-2 mt-5">Création de compte</h2>
                <div class="d-flex justify-content-center">
                    <div class="col-4 mx-2 my-2">
                        <form class="form" action="" method="post">
                            <label for="email" class="form-label">Adresse courrielle</label>
                            <input type="email" class="form-control" name="email" required>
                            <label for="username" class="form-label">Nom d'utilisateur</label>
                            <input type="text" class="form-control" name="username" required>
                            <label for="password" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control" name="password" required>
                            <label for="repeatpassword" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control" name="repeatpassword" required>
                            <input type="submit" class="form-control btn btn-primary my-4" value="Se connecter">

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
</script>

//TODO: Make the style for the page.
<style scoped>
button {
    width: 200px;
    height: auto;
    margin: auto;
}
</style>