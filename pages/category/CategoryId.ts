import { Component, Vue, Watch } from "nuxt-property-decorator"

@Component({
})
export default class CategoryId extends Vue {
    private categoryProducts: any[] = [];
    private currentPage: number = 1;
    private numberOfPages: number = null;
    private pageSize: number = 9;

    @Watch('currentPage')
    private watchCurrentPage(val) {
        this.currentPage = val;
    //    this.$router.push(this.$route.path + '/page/' + this.currentPage);
        this.getPageContent(this.currentPage);
    }
    
    private async created() {
        this.getPageContent(this.currentPage);
    }

    private async getPageContent(page: number) {
        try {
            const pageNumber = (page - 1);
            const params = {
                page: pageNumber,
                size: this.pageSize,
            };
            const categoryPage = await this.$axios.$get('category/' + this.$route.params.id + '/product', { params });
            if (categoryPage) {
                this.categoryProducts = categoryPage.content;
                this.numberOfPages = categoryPage.totalPages;
            }
        } catch (error) {
            console.error(error);
        }
    }
}