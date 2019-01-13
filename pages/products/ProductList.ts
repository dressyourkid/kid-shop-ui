import { Component,Vue } from "nuxt-property-decorator"

@Component({})

export default class ProductListPage extends Vue {
    
    private products: any[] = [];

    private exploreProduct(productId) {
        this.$router.push({ path: this.$route.path, params: { id: productId } });
    }
    
    private async mounted() {
        const productsPage = await this.$axios.$get('product');
        this.products = productsPage.content;
    }
}