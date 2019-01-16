import { Component,Vue } from "nuxt-property-decorator"
import { Product } from "~/types";


@Component({
})

export default class ProductById extends Vue {
    private product: Product = {
        id: null,
        name: null,
        description: null,
        price: null,
        exists: null,
    };

    private async created() {
        const fetchProductById = await this.$axios.$get('product/' + this.$route.params.id);
        this.product = fetchProductById;
    }
}