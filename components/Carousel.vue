<template>
    <v-carousel light hide-delimiters>
        <v-carousel-item
            v-for="product in products"
            :key="product.id"
        >
        <v-layout row wrap>
            <v-flex
                xs12 
                sm6
                md4
            >
                <v-card class="ma-4">
                    <v-img
                        src="http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fashion-kids+sweater-kids+swag-kid-graphic+tee-t+shirt+print-sweater-urban-streetwear-beanie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg"
                        aspect-ratio="1"
                    ></v-img>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">
                            {{ product.name }}
                        </h3>
                        <div>{{ product.description }}</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn
                        flat
                        color="orange"
                    >
                        Share
                    </v-btn>
                    <v-btn
                        flat
                        color="orange"
                        nuxt
                        append
                        :to="{ path: `${product.id}` }"
                    >
                        Explore
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts" src="./Carousel.ts">
</script>