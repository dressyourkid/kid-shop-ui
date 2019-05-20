import { Component, Vue, Watch, Prop } from "nuxt-property-decorator"
import { Product } from '~/types';
import Card from '~/components/product/Card.vue';

@Component({
    components: {
        Card
    }
})
export default class ProductList extends Vue { 
    
    /**
     * Category id
     */
    @Prop()
    private category: string;
    
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
                this.$router.push({ query: { ...this.$route.query, page: this.currentPage.toString() } });
            } else {
                this.$router.push({ query: { ...this.$route.query, page: undefined } });
            }
            const pageNumber = (page - 1);
            const params = {
                page: pageNumber,
                size: this.pageSize,
                search: this.$route.query.search,
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
    
    private async  onPageNumberChange(page: number)  {
        this.fetchPageContent(page)
        this.$vuetify.goTo(1)
    }

}