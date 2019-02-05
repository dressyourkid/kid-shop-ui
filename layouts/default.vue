<template>
    <v-app>
        <div>
            <v-toolbar 
                color="blue darken-3"
                dark
            >
                <v-layout row>
                    <v-flex shrink class="mr-3">
                        <nuxt-link class="logo" :to="'/'">
                            KidShop
                            LOGO
                        </nuxt-link>
                    </v-flex>
                    <v-flex>
                        <v-text-field
                            v-model="productSearch"
                            clearable
                            flat
                            label="Search"
                            solo-inverted
                            @keyup.enter="search"
                        >
                            <v-fade-transition slot="append">
                                <v-btn  
                                    flat 
                                    icon 
                                    light
                                    @click="search"
                                >
                                    <v-icon>fa-search</v-icon>
                                </v-btn>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-flex shrink>
                        <v-btn
                            outline   
                            @click="openDialog = true"
                        >
                            <v-icon class="pr-2">fa-user-secret</v-icon>
                            Sign in
                        </v-btn>
                        <shopping-cart-popover/>
                    </v-flex>
                </v-layout>
            </v-toolbar>
            <v-tabs
                dark
                color="brown lighten-2"
                show-arrows
                centered
            >  
                <v-tabs-slider color="blue"/>
                <v-tab :to="'/'">
                    <v-icon class="pr-2">fa-home</v-icon>
                    Главная
                </v-tab>
                <v-tab
                    v-for="item in categories"
                    :key="item.id"
                    :to="'/category/' + item.id"
                >
                    {{item.name}}
                </v-tab>
            </v-tabs>
            <login-modal v-model="openDialog"></login-modal>
            <div>
                <nuxt/>
            </div>
        </div>
    </v-app>
</template>

<script lang="ts" src="./default.ts">
</script>