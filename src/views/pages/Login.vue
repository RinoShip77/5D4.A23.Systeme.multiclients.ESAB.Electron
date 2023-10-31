<template>
    <InitialLayout>

        <form action="" method="post">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" id="">
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="">
            <input type="submit" value="Se connecter">

        </form>

    </InitialLayout>
</template>

<script setup lang="ts">
import InitialLayout from '../layouts/InitialLayout.vue';
</script>

//TODO: Make the style for the page.
<style scoped></style>