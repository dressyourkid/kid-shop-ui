import { Component,Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class LoginModal extends Vue {
    @Prop({ required: true })
    private dialog: boolean = false;
}