<template>
    <v-menu
        :nudge-width="200"
        offset-x
        :close-on-content-click="false"
    >
        <v-btn
            slot="activator"
            outline
        >
            <v-icon class="pr-2">fa-cart-plus</v-icon>
            Baskets
        </v-btn>
        <v-card>
            <v-layout 
                row 
                wrap
            >
                <h2 class="mt-2 ml-4 mb-3" >Вы добавили товар в корзину</h2>
            </v-layout>
            <v-divider></v-divider>

            <v-layout 
                v-for="item in products"
                :key="item.product.id"
                row  
                class="mt-2 mb-2"
            >
                <!-- эта кнопка по клику должна удалять этот товар из общего массива products -->
                <v-btn flat icon color="pink">
                    <v-icon>fa-times</v-icon>
                </v-btn>
                <v-flex xs2 sm2 md2 >
                    <div class="mr-3">
                        <img style="width: 100px;" src="http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fas…anie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg" alt="">
                    </div>
                </v-flex>
                <v-flex xs4 sm4 md4 >
                    <div class="mr-5">   
                        <h4>{{ item.product.name }}</h4>
                        <h2 class="mt-3 mb-3"> {{ item.product.price }} руб.</h2>
                        <h6>Страна производства: Russia</h6>      
                    </div>
                </v-flex>
                <v-flex xs2 sm2 md2 class="mr-5 mt-4">
                    <div style="display: flex;">
                        <div style="cursor: pointer;" class="mt-2 mr-2" @click="check">
                            <v-icon class="mt-1">fa-minus</v-icon>
                        </div>
                        <v-text-field
                            v-model="item.amount"
                            solo
                            label="0"
                            class="flex-item"
                        >
                        </v-text-field>
                        <div style="cursor: pointer;" class="mt-2 ml-2" @click="item.amount++">
                            <v-icon class="mt-1">fa-plus</v-icon>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs3 sm3 md3 >
                    <div class="pl-5">
                        <h4>Сумма</h4>
                        <h2 class="mt-3 mb-3"> {{ item.product.price * item.amount }}  руб.</h2> 
                    </div>
                </v-flex>
            </v-layout>

            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn flat class="mt-3" @click="clickToProducts">Продолжить покупки</v-btn>
                <v-spacer></v-spacer>
                <div>
                    <h3 class="text-md-center">Итого: 0 руб.</h3>
                    <v-btn color="primary" flat @click="menu = false">Оформить заказ</v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-menu>   
</template>
<script lang="ts" src="./ShoppingCartPopover.ts">
</script>