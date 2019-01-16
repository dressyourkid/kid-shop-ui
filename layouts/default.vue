<template>
    <v-app>
        <div>
            <v-toolbar class="yellow darken-3">
                <v-toolbar-title>KidShop</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn             
                color="primary"
                dark
                @click="dialog = true">Registration</v-btn>
            </v-toolbar>
            <v-layout row justify-center> 
                    <v-list>
                        <v-list-tile
                            v-for="item in categories"
                            :key="item.title"
                            nuxt
                            to="/products"
                            style="float: left;"
                        >

                            <v-list-tile-content>
                                <nuxt-link :to="'/category/' + item.id">{{item.name}}</nuxt-link>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-layout>
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
