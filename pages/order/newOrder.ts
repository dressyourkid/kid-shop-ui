import { Component,Vue, State } from "nuxt-property-decorator"
import { ProductInCart, } from "~/types";

@Component({})
export default class newOrder extends Vue {
    @State
    private productsInCart: ProductInCart[];
    private phone: string = "+7 (978)";
    private email: string = '';

    private get totalProducts(): any[] {
        return this.productsInCart.map( item => {
            return {
                totalPrice: item.amount * item.product.price,
                ...item
            }
        })
    }

    private deleteProduct(item: ProductInCart) {
        this.$store.commit('removeProduct', item);
    }
    
    private get totalOrderPrice() {
        let sum: number = 0;
        this.totalProducts.forEach( item => {
            sum += item.totalPrice;
        })
        return sum;
    }

    private get rules(): any {
        return {
            email: (value) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.';
            },
        }
    }
}