import { Component,Vue } from "nuxt-property-decorator"
import { Product } from "~/types";


@Component({
})

export default class ProductById extends Vue {
    private product: Product = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        exists: false
    };

    private async created() {
        const fetchProductById = await this.$axios.$get('product/' + this.$route.params.id);
        this.product = fetchProductById;
    }
}