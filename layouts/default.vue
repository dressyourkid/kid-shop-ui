<template>
    <v-app>
        <div>
            <v-toolbar class="yellow darken-3">
                <v-layout align-center justify-space-between row>
                <nuxt-link to="/">
                    <v-toolbar-title>
                        <v-icon>mdi-anchor</v-icon>
                        KidShop
                    </v-toolbar-title>
                </nuxt-link>
                <v-flex xs6>
                    <v-text-field
                        v-model="productSearch"
                        label="Search" 
                        single-line
                        background-color="white"
                        clearable
                        append-icon="mdi-search-web"
                        @keyup.enter="search"
                    />
                </v-flex>
                <v-btn
                    outline      
                    @click="openDialog = true"
                >
                    Sign in
                </v-btn>
                </v-layout>
            </v-toolbar>
            <v-layout row justify-center wrap> 
                <div class="pa-3">
                    <div>
                        <nuxt-link :to="'/products'">Все товары</nuxt-link>
                    </div>
                </div>
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
