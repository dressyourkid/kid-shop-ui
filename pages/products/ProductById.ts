import { Component,Vue } from "nuxt-property-decorator"

@Component({})

export default class ProductById extends Vue {
    private product: any[] = [];

    private async mounted() {
        const fetchProductById = await this.$axios.$get('product/' + this.$route.params.id);
        this.product= fetchProductById;
    }
}