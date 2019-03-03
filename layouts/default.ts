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
    private type: string = 'anchorUp';
    private anchorUp: number = 1;
    private offsetTop: number = 0;
    private show: boolean = false;

    @State
    private categories: Category[];

    private search() {
        this.$router.push({ path: '/products', query: { search: this.productSearch } })
    }
    private get buttonUp () {
        const value = this[this.type]
        if (!isNaN(value)) {
            return Number(value);
        } else {
            return value;
        }
    }
    private onScroll(e) {   
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        if (this.offsetTop > 20 ) {
            this.show = true 
        }else{
            this.show = false  
        }  
    }   
}

