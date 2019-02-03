<template>
    <div>
        <v-layout justify-space-between row>
            <h1>{{ title }}</h1>
            <v-btn dark color="teal darken-1">{{ btnLabel }}</v-btn>
        </v-layout>
        <no-ssr>
            <swiper :options="swiperOption">
                <swiper-slide v-for="product in categoryProducts" :key="product.id">
                    <card :product="product"/>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </no-ssr>
    </div>
</template>

<script lang="ts" src="./Carousel.ts">
</script>
