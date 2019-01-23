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
        this.getPageContent(this.currentPage);
    }
/*
    @Watch('$route.query')
    private watchRoute(query, oldQuery) {
        if (query !== oldQuery) {
            this.getPageContent(query.page)
        }
    }
*/
    private mounted() {
        if (this.$route.query.page !== undefined) {
            const page = +this.$route.query.page;
            this.getPageContent(page);
            this.currentPage = page;
        } else {
            this.getPageContent(this.currentPage);
        } 
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
                this.$router.push({ path: this.$route.path, query: { page: this.currentPage.toString() } });
            }
        } catch (error) {
            console.error(error);
        }
    }
}