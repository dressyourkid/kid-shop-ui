import { Component,Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class Carousel extends Vue {
    private products: any[] = [];
    private swiperOption = {
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

    private op() {
        return this.swiperOption;
    }

    private async mounted() {
        const productsPage = await this.$axios.$get('product');
        this.products = productsPage.content;
    }
}