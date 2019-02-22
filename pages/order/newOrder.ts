
import { Component,Vue } from "nuxt-property-decorator"

export default class newOrder extends Vue   {

    private phone: string = "+7 (978)";
    private email: string = '';

    private get rules(): any {
        return {
            email: (value) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.';
            },
        }
    }

}