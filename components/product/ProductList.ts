import { Component, Vue, Watch, Prop } from "nuxt-property-decorator"
import { Product } from '~/types';

@Component
export default class ProductList extends Vue {
    
    /**
     * Category id
     */
    @Prop()
    private category: string;

    @Prop()
    private search: string;
    
    private content: Product[] = [];
    private currentPage: number = 1;
    private numberOfPages: number = null;
    private pageSize: number = 9; // todo make it configurable

    @Watch('$route.query')
    private watchRoute(query, oldQuery) {
        if (query.page && query.page !== oldQuery.page) {
            this.fetchPageContent(+query.page);
        } else {
            this.fetchPageContent(1);
        }
    }

    private mounted() {
        if (this.$route.query.page !== undefined) {
            this.fetchPageContent(+this.$route.query.page);
        } else {
            this.fetchPageContent(this.currentPage);
        } 
    }

    private async fetchPageContent(page: number) {
        try {
            this.currentPage = page;
            if (this.currentPage > 1) {
                this.$router.push({ query: { page: this.currentPage.toString() } });
            } else {
                this.$router.push({ query: {} });
            }
            const pageNumber = (page - 1);
            const params = {
                page: pageNumber,
                size: this.pageSize,
                search: this.search,
            };
            const requestUrl = this.category ? `category/${this.category}/product` : 'product';
            const categoryPage = await this.$axios.$get(requestUrl, { params });
            if (categoryPage) {
                this.content = categoryPage.content;
                this.numberOfPages = categoryPage.totalPages;
            }
        } catch (error) {
            console.error(error);
        }
    }
}