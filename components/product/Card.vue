<template>
    <v-hover>
        <v-card class="product-card" slot-scope="{ hover }">
            <nuxt-link :to="{ path: '/products/' + product.id }">
                <v-img
                    src="https://www.megastuff.ru/etc/konstruktor/img/goods/3998cbcf056ae1c340ce0f1d6c045988/large_1.png"
                >
                    <v-expand-transition>
                        <div 
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out teal darken-1 v-card--reveal display-3 white--text"
                        >
                            {{ product.price }} &#8381;
                        </div>  
                    </v-expand-transition>
                </v-img>
            </nuxt-link>
            <v-card-text
                style="position: relative;"
            >
                <v-btn
                    absolute
                    color="orange"
                    light
                    fab
                    large
                    right
                    top
                    @click="addToCart"
                >
                    <v-icon color="white">add</v-icon>
                </v-btn>
            </v-card-text>
            <div class="font-weight-regular grey--text title mb-2">{{ product.name }}</div>
        </v-card>
    </v-hover>
</template>

<script lang="ts" src="./Card.ts">
</script>
