import { Component,Vue, Prop } from "nuxt-property-decorator"
import { ProductInCart } from "~/types";

@Component({})
export default class ShoppingCartPopover extends Vue {

	private products: ProductInCart[] = [];

	private async mounted() {
        const fetchProductById1 = await this.$axios.$get('product/1671');
        const fetchProductById2 = await this.$axios.$get('product/1672');
        this.products.push({
            product: fetchProductById1,
            amount: 1
        });
        this.products.push({
            product: fetchProductById2,
            amount: 1
        });
    }

    private clickToProducts() {
        this.$router.push({path: '/products'});
    }

    private check() {
        this.products.forEach( (item) => {
            item.amount--;
            if (item.amount <= 1) {
                item.amount = 1;
            }
        })

    }
}