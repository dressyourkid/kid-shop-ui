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
    };
    private items: any[] = [
        {
            src: 'http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fashion-kids+sweater-kids+swag-kid-graphic+tee-t+shirt+print-sweater-urban-streetwear-beanie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg'
          },
          {
            src: 'http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fashion-kids+sweater-kids+swag-kid-graphic+tee-t+shirt+print-sweater-urban-streetwear-beanie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg'
          }
	]

}