import { Component,Vue } from "nuxt-property-decorator"
import { Product } from "~/types";

@Component({})
export default class ProductById extends Vue {
    private searchCategories: string = null;
    private product: Product = {
        id: null,
        name: null,
        description: null,
        price: null,
        exists: null,
    }

    private async created() {
        const fetchProductById = await this.$axios.$get('product/' + this.$route.params.id);
        this.product = fetchProductById;
    }

    private items: any[] = [
        {
            src: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480.jpg'
        },
        {
            src: 'https://assets.pcmag.com/media/images/523954-apple-invite.png'
        },
        {
            src: 'http://www.fainaidea.com/wp-content/uploads/2018/12/Oficialno-prezentaciya-Apple-sostoitsya-12-sentyabrya-2.jpg'
        }
    ];
    
    private size: any[] = ['36','37','38','39','40','41','42','43','44','45'];
    private test: any[] = ['Главная','Техника','Бытовая техника','39','40','41','42','43','44','45'];

}