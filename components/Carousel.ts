import { Component,Vue, Prop } from "nuxt-property-decorator"
import Card from '~/components/product/Card.vue';

@Component({
    components: {
        Card
    }
})
export default class Carousel extends Vue {
    @Prop({required: true})
    private title: string;
    @Prop({required: true})
    private btnLabel: string;
    @Prop({required: true})
    private categoryId: string;
    private categoryProducts: any[] = [];
    
    private swiperOption: any = {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    
    private async mounted() {
        const categoryPage = await this.$axios.$get('category/' + this.categoryId + '/product');
        this.categoryProducts = categoryPage.content;
    }
}
