import { Component,Vue, Prop } from "nuxt-property-decorator"
import { Product, ProductInCart } from "~/types";

@Component({})
export default class ShoppingCartPopover extends Vue {

    private visible: boolean;
    private msg: number = 1;
	private products: ProductInCart[] = [];
	
	// private get totalPrice() {
 	// 	return this.mg * this.product.price;
	// }

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
		this.$router.push({path: '/products'})
	}
}