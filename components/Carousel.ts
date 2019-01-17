import { Component,Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class Carousel extends Vue {
    private products: any[] = [];

    private async mounted() {
        const productsPage = await this.$axios.$get('product');
        this.products = productsPage.content;
    }
}