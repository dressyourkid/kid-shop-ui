<template>
    <div class="card">
        <v-card>
            <v-img 
                :src="'https://robohash.org/' + person.first_name + '_' + person.last_name" 
            />
            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{ person.first_name + ' ' + person.last_name }}</h3>
                <div>Used v-card from Vuetify</div>
            </div>
            </v-card-title>
        </v-card>
    </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Person } from "~/types";

@Component({})
export default class Card extends Vue {
  @Prop() person: Person
}
</script>

<style lang="stylus">
.card 
  font-family "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
  padding 1rem;
  margin 0.25rem
</style>
