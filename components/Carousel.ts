import { Component,Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class Carousel extends Vue {
    
    private swiperOption: any = {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

}
