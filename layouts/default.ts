import { Component, Vue, State } from "nuxt-property-decorator"
import LoginModal from '~/components/login/LoginModal.vue';
import ShoppingCartPopover from "~/components/baskets/ShoppingCartPopover.vue";
import { Category } from '~/types';

@Component({
    components: {
        LoginModal,
        ShoppingCartPopover
    }
})
export default class DefaultLayout extends Vue {
    private productSearch: string = '';
    private openDialog: boolean = false;
    private offsetTop: number = 0;
    private upShow: boolean = false;
    
    @State
    private categories: Category[];

    private search() {
        this.$router.push({ path: '/products', query: { search: this.productSearch } })
    }
    private onScroll() {   
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        if (this.offsetTop > 20 ) {
            this.upShow = true 
        }else{
            this.upShow = false  
        }  
    }   
}

