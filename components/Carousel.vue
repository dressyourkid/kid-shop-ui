<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="i in 5" :key="i">
                <v-img
                    src="https://assets.pcmag.com/media/images/523954-apple-invite.png"
                ></v-img>
            </swiper-slide>
            <swiper-slide v-for="j in 6" :key="j">
                <v-img
                    src="http://www.fainaidea.com/wp-content/uploads/2018/12/Oficialno-prezentaciya-Apple-sostoitsya-12-sentyabrya-2.jpg"
                ></v-img>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }   
</script>