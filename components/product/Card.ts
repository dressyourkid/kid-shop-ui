import { Component,Vue, Prop } from "nuxt-property-decorator"
import { Product } from "~/types";

@Component({})
export default class Card extends Vue {
    @Prop({required: true})
    private product: Product;
    private snackbar: boolean = false
    private timeout: number = 1500
    private itemAdded: string = 'Товар добавлен в корзину'

    private addToCart() {
        this.$store.commit('addProduct', this.product);
        return this.snackbar = true
    }
}
