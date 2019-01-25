<template>
    <div>
        <v-layout justify-space-between row>
            <h1>{{ title }}</h1>
            <v-btn color="primary">{{ btnLabel }}</v-btn>
        </v-layout>
        <no-ssr>
            <swiper :options="swiperOption">
                <swiper-slide v-for="product in categoryProducts" :key="product.id">
                    <v-card 
                        nuxt
                        append
                        :to="{ path: '/products/' + `${product.id}` }"
                    >
                        <v-img
                            src="https://www.megastuff.ru/etc/konstruktor/img/goods/3998cbcf056ae1c340ce0f1d6c045988/large_1.png"
                        >
                            <span class="headline">{{ product.price }} Р</span>  
                        </v-img>
                        <v-card-title>
                            <div>
                                <span>{{ product.name }}</span><br>
                            </div>
                        </v-card-title>
                    </v-card>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </no-ssr>
    </div>
</template>

<script lang="ts" src="./Carousel.ts">
</script>
