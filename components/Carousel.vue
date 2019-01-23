<template>
    <div>
        <no-ssr>
            <swiper :options="swiperOption">
                <swiper-slide v-for="i in 16" :key="i">
                    <v-img
                        :src="
                            i % 2 === 0 
                            ? 'https://assets.pcmag.com/media/images/523954-apple-invite.png'
                            : 'http://www.fainaidea.com/wp-content/uploads/2018/12/Oficialno-prezentaciya-Apple-sostoitsya-12-sentyabrya-2.jpg'
                        "
                    ></v-img>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </no-ssr>
    </div>
</template>

<script lang="ts" src="./Carousel.ts">
</script>
