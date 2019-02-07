import { RootState, Person, Category } from '~/types';
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
    people: [],
    categories: []
})

export const mutations: MutationTree<RootState> = {
    setPeople(state: RootState, people: Person[]): void {
        state.people = people;
    },
    setCategories(state: RootState, payload: Category[]): void {
        state.categories = payload;
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            console.warn('aza-za-za')
            const categoriesPage = await app.$axios.$get('category');
            console.warn('222222222')
            commit('setCategories', categoriesPage.content);
        } catch (error) {
            console.error(error);
            Promise.reject();
        }
    }
}
