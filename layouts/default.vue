<template>
    <v-app>
        <div>
            <v-toolbar class="yellow darken-3">
                <v-toolbar-title>KidShop</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    outline      
                    @click="test = true"
                >
                    Sign in
                </v-btn>
            </v-toolbar>
            <v-layout row justify-center> 
                <div
                    v-for="item in categories"
                    :key="item.title"
                    nuxt
                    to="/products"
                    class="pa-3"
                >
                    <div>
                        <nuxt-link :to="'/category/' + item.id">{{item.name}}</nuxt-link>
                    </div>
                </div>
            </v-layout>
            <login :dialog="test"></login>
            <div class="ma-3">
                <nuxt/>
            </div>
        </div>
    </v-app>
</template>

<script lang="ts" src="./default.ts">
</script>


<style>
</style>
