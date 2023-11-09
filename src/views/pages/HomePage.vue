<template>
    <DefaultLayout>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <div class="col-4 my-2 mx-2">
                            <h2 class="text-center">Bienvenue sur</h2>
                            <h1 class="text-center">Andromia Technologies</h1>
                            <!--//TODO: Short description?-->
                            <p class="text-center"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div class="col-2 my-2 mx-2">
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
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

router-link {
    color: whitesmoke;
}
</style>