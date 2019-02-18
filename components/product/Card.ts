import { Component,Vue, Prop } from "nuxt-property-decorator"
import { Product } from "~/types";

@Component({})
export default class Card extends Vue {
    @Prop({required: true})
    private product: Product;

    private addToBucket() {
        this.$store.commit('addProduct', this.product);
    }
}
