import { Component,Vue } from "nuxt-property-decorator"
import LoginModal from '~/components/login/LoginModal'
@Component({
	components: {
		LoginModal,
	}
})
export default class DefaultLayout extends Vue {
	private test: boolean = false;
	private title: any = ['Куртки', 'Кофты', 'Штаны', 'Рубашки', 'Обувь', 'Дениски', 'Алешки'];
	private categories: any[] = [
		{
			"id" : 2000,
			"name" : "Fruits"
		}, {
			"id" : 2001,
			"name" : "Vegetables"
		}, {
			"id" : 2002,
			"name" : "Техника"
		}, {
			"id" : 2003,
			"name" : "Бытовая Техника"
		}, {
			"id" : 2004,
			"name" : "Косметика"
		}, {
			"id" : 2005,
			"name" : "Мебель"
		}, {
			"id" : 2006,
			"name" : "Детские игрушки"
		}, {
			"id" : 2007,
			"name" : "Вещи"
		} 
	];
}

