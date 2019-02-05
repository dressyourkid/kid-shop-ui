<template>
    <v-app>
        <div>
            <v-toolbar 
                color="primary"
                dark
                dense
            >
                <v-layout row align-center>
                    <v-flex shrink class="mr-3">
                        <nuxt-link class="logo" :to="'/'">
                            Интернет магазин
                        </nuxt-link>
                    </v-flex>
                    <v-flex>
                        <v-text-field
                            class="layout_toolbar__search"
                            height="20px"
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
                                    small
                                    icon 
                                    @click="search"
                                >
                                    <v-icon>search</v-icon>
                                </v-btn>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-flex shrink>
                        <v-btn
                            flat   
                            small
                            @click="openDialog = true"
                        >
                            <v-icon class="pr-2">people</v-icon>
                            Вход
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