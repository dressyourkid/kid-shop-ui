<template>
    <v-app>
        <div>
            <v-toolbar class="primary">
                <v-layout align-center justify-space-between row>
                    <nuxt-link class="logo" :to="'/'">
                        <v-toolbar-title>
                            <v-icon>mdi-anchor</v-icon>
                            KidShop
                        </v-toolbar-title>
                    </nuxt-link>
                    <v-flex xs6>
                        <v-text-field
                            v-model="productSearch"
                            label="Search" 
                            solo
                            clearable
                            @keyup.enter="search"
                        >
                            <v-fade-transition slot="append">
                                <v-btn  
                                    flat 
                                    icon 
                                    color="primary"
                                    @click="search"
                                >
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-btn
                        outline      
                        @click="openDialog = true"
                    >
                        Sign in
                    </v-btn>
                    <shopping-cart-popover/>
                </v-layout>
            </v-toolbar>
            <v-tabs
                dark
                color="teal darken-1"
                show-arrows
                centered
            >  
                <v-tabs-slider color="yellow"/>
                <v-tab :to="'/products'">
                    Все товары
                </v-tab>
                <v-tab
                    class="text-md-center"
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