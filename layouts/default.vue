<template>
    <v-app>
        <div>
            <v-toolbar class="yellow darken-3">
                <v-toolbar-title>KidShop</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    outline      
                    @click="openDialog = true"
                >
                    Sign in
                </v-btn>
            </v-toolbar>
            <v-layout row justify-center wrap> 
                <div
                    v-for="item in categories"
                    :key="item.id"
                    class="pa-3"
                >
                    <div>
                        <nuxt-link :to="'/category/' + item.id">{{item.name}}</nuxt-link>
                    </div>
                </div>
            </v-layout>
            <login-modal v-model="openDialog"></login-modal>
            <div class="ma-3">
                <nuxt/>
            </div>
        </div>
    </v-app>
</template>

<script lang="ts" src="./default.ts">
</script>
