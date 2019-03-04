<template>
    <v-menu 
        class="elevation-18 "
        :close-on-content-click="false"
        style="top: 50px;"
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
        <v-container 
            pb-1 
            pl-1 
            pr-1  
            v-if="productsInCart.length"  
            style="background: white;"
            >
            <div class="overflow_in_baskets">
                <v-layout 
                    row 
                    v-for="item in totalProducts" 
                    :key="item.product.id"
                    >
                    <v-flex pl-2>
                        <nuxt-link class="cart-link" :to="{ path: '/products/' + item.product.id }">
                        <v-img style="width: 70px" src="http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fas…anie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg"/>
                        </nuxt-link>
                    </v-flex>
                    <v-flex 
                        xs3 
                        md3 
                        lg3
                        >
                        <div>
                            <nuxt-link class="cart-link" :to="{ path: '/products/' + item.product.id }">
                            {{ item.product.name }}
                            </nuxt-link>
                        </div>
                        <div>{{ item.product.price }} &#8381;</div>
                    </v-flex>
                    <v-flex text-xs-right>
                        <v-btn  icon @click="decreaseAmount(item.product)">
                            <v-icon>remove</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex 
                        xs1 
                        md1 
                        lg1>
                        <v-text-field v-model="item.amount" solo readonly/>
                    </v-flex>
                    <v-flex >
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
            </div>
            <v-divider/>
            <v-layout 
                layout 
                align-center 
                px-3 
                py-2 
                wrap 
                >
                <v-flex xs12 text-xs-right mb-3>
                    <span class="subheading font-weight-light grey--text">Итого: </span> 
                    <span class="green--text headline "> {{ totalOrderPrice }} &#8381;</span>
                </v-flex>
                <v-flex xs12>
                    <v-btn block large  small color="teal darken-1" dark>
                        Оформить заказ
                        <v-icon class="pl-3">arrow_forward</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container 
            pb-1 
            pl-1 
            pr-1   
            v-else style="background: white"
            >
            <v-layout 
                layout 
                align-center 
                wrap
                >
                <v-flex 
                    xs12 
                    text-xs-center
                    mb-3
                    > 
                    <h2 class="pb-2">
                        <v-icon>shopping_cart</v-icon>
                        Корзина пуста 
                    </h2>
                    <p class="grey--text">Добавте товар в корзину </p> 
                    <v-divider/>
                </v-flex>
                <v-flex xs12>
                    <v-btn :to="'/products'" block large  small color="teal darken-1" dark>
                        Перейти к товарам
                        <v-icon class="pl-3">arrow_forward</v-icon>
                    </v-btn>
                </v-flex>
             </v-layout>
        </v-container>
    </v-menu>
</template>
<script lang="ts" src="./ShoppingCartPopover.ts">
</script>
