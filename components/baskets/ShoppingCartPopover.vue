<template>
    <v-menu
        :close-on-content-click="false"
        max-height="350"
    >
        <v-btn
            slot="activator"
            flat
            small
        >
            <v-badge color="brown lighten-2" left>
                <span slot="badge">{{ productCapacity }}</span>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
            Корзина
        </v-btn>
        <v-container v-if="productsInCart.length" grid-list-xs style="background: white;width:600px">
            <v-layout row v-for="item in totalProducts" :key="item.product.id">
                <v-flex>
                    <nuxt-link class="cart-link" :to="{ path: '/products/' + item.product.id }">
                    <v-img style="width: 70px" src="http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fas…anie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg"/>
                    </nuxt-link>
                </v-flex>
                <v-flex xs3 md3 lg3>
                    <div>
                        <nuxt-link class="cart-link" :to="{ path: '/products/' + item.product.id }">
                        {{ item.product.name }}
                        </nuxt-link>
                    </div>
                    <div>{{ item.product.price }} &#8381;</div>
                </v-flex>
                <v-flex>
                    <v-btn icon @click="decreaseAmount(item.product)">
                        <v-icon>remove</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs1 md1 lg1>
                    <v-text-field v-model="item.amount" solo readonly/>
                </v-flex>
                <v-flex>
                    <v-btn icon @click="increaseAmount(item.product)">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex>
                    <div>Стоимость</div>
                    <div>{{ item.totalPrice }} &#8381;</div>
                </v-flex>
                <v-flex>
                    <v-btn icon color="red" flat @click="deleteProduct(item)">
                        <v-icon>delete_forever</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-layout column>
                <v-flex>
                    <div>Итого: {{ totalOrderPrice }} &#8381;</div>
                </v-flex>
                <v-flex>
                    <v-btn block color="teal darken-1" dark>
                        Оформить заказ
                        <v-icon class="pl-3">arrow_forward</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-else style="background: white">
            <v-layout row>
                <v-flex>
                    <div>Какое то завлекающее сообщение, которое сделает пиздато бог верстки</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-menu>
</template>
<script lang="ts" src="./ShoppingCartPopover.ts">
</script>