import { Component,Vue } from "nuxt-property-decorator"

@Component({
})
export default class CategoryId extends Vue {
    private categoryProducts: any[] = [];
    
    private async created() {
        const categoryPage = await this.$axios.$get('category/' + this.$route.params.id + '/product');
        this.categoryProducts = categoryPage.content;
    }
}