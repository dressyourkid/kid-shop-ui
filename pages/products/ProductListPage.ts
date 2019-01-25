import { Component,Vue } from "nuxt-property-decorator"
import ProductList from '~/components/product/ProductList.vue';

@Component({
    components: {
        ProductList
    }
})
export default class ProductListPage extends Vue {
    
}