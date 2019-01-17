import { Component,Vue } from "nuxt-property-decorator"
import LoginModal from '~/components/login/LoginModal.vue';

@Component({
	components: {
		LoginModal
	}
})
export default class DefaultLayout extends Vue {
	private openDialog: boolean = false;
	private title: any = ['Куртки', 'Кофты', 'Штаны', 'Рубашки', 'Обувь', 'Дениски', 'Алешки'];
	private categories: any[] = [];

	private async mounted() {
        const productsPage = await this.$axios.$get('category');
        this.categories = productsPage.content;
    }
}

