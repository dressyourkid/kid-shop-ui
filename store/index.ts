import { RootState, Category, ProductInCart, Product } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
    categories: [],
    productsInCart: []
})

export const mutations: MutationTree<RootState> = {
    setCategories(state: RootState, payload: Category[]): void {
        state.categories = payload;
    },
    addProduct(state: RootState, payload: Product) {
        const found = state.productsInCart.find((item) => {
            return item.product.id === payload.id;
        });
        if (found) {
            found.amount++;
        } else {
            const productToAdd: ProductInCart = {
                product: payload,
                amount: 1,
            }
            state.productsInCart.push(productToAdd)
        }
    },
    decreaseProductAmount(state: RootState, payload: Product) {
        const found = state.productsInCart.find((item) => {
            return item.product.id === payload.id;
        });
        if (found.amount > 1) {
            found.amount--;
        }
    },
    increaseProductAmount(state: RootState, payload: Product) {
        const found = state.productsInCart.find((item) => {
            return item.product.id === payload.id;
        });
        if (found.amount < 99) {
            found.amount++;
        }
    },
    removeProduct(state: RootState, payload: ProductInCart) {
        state.productsInCart.forEach((element,index) => {
            if (element.product.id === payload.product.id) {
                state.productsInCart.splice(index,1);
            }
        });
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            const categoriesPage = await app.$axios.$get('category');
            commit('setCategories', categoriesPage.content);
        } catch (error) {
            console.error(error);
            Promise.reject();
        }
    }
}
