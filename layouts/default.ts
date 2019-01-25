import { Component,Vue } from "nuxt-property-decorator"
import LoginModal from '~/components/login/LoginModal.vue';

@Component({
	components: {
		LoginModal
	}
})
export default class DefaultLayout extends Vue {
	private productSearch: string = '';
	private openDialog: boolean = false;
	private categories: any[] = [];

	private async mounted() {
        const categoriesPage = await this.$axios.$get('category');
        this.categories = categoriesPage.content;
	}
	
	private async search() {
		this.$router.push( {path: '/products', query: {search: this.productSearch}} )
	}
}

