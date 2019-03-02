import { Component,Vue, Prop, State } from "nuxt-property-decorator"
import { ProductInCart, Product } from "~/types";

@Component({})
export default class ShoppingCartPopover extends Vue {
    @State
    private productsInCart: ProductInCart[];

    private get totalProducts(): any[] {
        return this.productsInCart.map( item => {
            return {
                totalPrice: item.amount * item.product.price,
                ...item
            }
        })
    }

    private decreaseAmount(item: Product) {
        this.$store.commit('decreaseProductAmount', item);
    }

    private increaseAmount(item: number) {
        this.$store.commit('increaseProductAmount', item);
    }

    private deleteProduct(item: ProductInCart) {
        this.$store.commit('removeProduct', item);
    }

    private get totalOrderPrice() {
        let summ: number = 0;
        this.totalProducts.forEach( item => {
            summ += item.totalPrice;
        })
        return summ;
    }

    private get productCapacity() {
        return this.productsInCart.length;
    }
}