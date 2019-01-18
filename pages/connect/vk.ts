import { Component,Vue } from "nuxt-property-decorator"

@Component
export default class ProductById extends Vue {
    
    private async mounted() {
        const { code, state } = this.$route.query;
        try {
            const response = await this.$axios.$get('connect/vk', {
                params: {
                    code,
                    state
                },
                withCredentials: true,
            });
            console.warn(response, this.$route.query);
        } catch (error) {
            console.error('Error oauth', error);
        }
        
    }
}