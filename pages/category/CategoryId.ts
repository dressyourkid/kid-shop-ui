import { Component, Vue, Watch } from "nuxt-property-decorator"

@Component
export default class CategoryId extends Vue {
    private categoryProducts: any[] = [];
    private currentPage: number = 1;
    private numberOfPages: number = null;
    private pageSize: number = 9;

    @Watch('$route.query')
    private watchRoute(query, oldQuery) {
        if (query.page && query.page !== oldQuery.page) {
            this.fetchPageContent(+query.page);
        }
    }

    private mounted() {
        if (this.$route.query.page !== undefined) {
            const page = +this.$route.query.page;
            this.fetchPageContent(page);
        } else {
            this.$router.replace({ query: { page: this.currentPage.toString() } });
            this.fetchPageContent(this.currentPage);
        } 
    }

    private async fetchPageContent(page: number) {
        try {
            this.currentPage = page;
            this.$router.push({ path: this.$route.path, query: { page: this.currentPage.toString() } });
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