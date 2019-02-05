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
    
    private get swiperOptions(): any {
        console.warn('recalculated')
        const options = {
            slidesPerView: 5,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
        switch (this.$vuetify.breakpoint.name) {
            case 'xs':
                options.slidesPerView = 2;
                break;
            case 'sm':
                options.slidesPerView = 3;
                break;
            case 'md':
                options.slidesPerView = 4;
                break;
            default:
                options.slidesPerView = 5;
                break;
        }
        return options;
    }
    
    private async mounted() {
        const categoryPage = await this.$axios.$get('category/' + this.categoryId + '/product');
        this.categoryProducts = categoryPage.content;
        console.warn(this.$vuetify.breakpoint.name)
    }
}
