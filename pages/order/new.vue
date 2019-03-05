<template>
    <v-layout 
        row 
        wrap 
        justify-center
    >                           
        <v-flex    
            xs12
            sm8
            md8
            text-xs-center
        >
            <v-container pb-1 pl-1 pr-1>
                <div class="overflow_in_baskets">
                    <v-layout 
                        align-center 
                        justify-center 
                        row
                        v-for="item in totalProducts" 
                        :key="item.product.id"
                        pb-2
                    >
                        <v-flex xs1 md1 lg1>
                            <nuxt-link class="cart-link" :to="{ path: '/products/' + item.product.id }">
                                <v-img style="width: 70px" src="http://picture-cdn.wheretoget.it/6d8ng3-l-610x610-t+shirt-kids+tee-kids+fas…anie-shirt-single-jacket-78-pull-black-swag-dope-white+t+shirt-flowers.jpg"/>
                            </nuxt-link>
                        </v-flex>
                        <v-flex xs3 md3 lg3>
                            <div>
                                <nuxt-link class="cart-link " :to="{ path: '/products/' + item.product.id }">
                                  <p class="text-lg-left pl-3">  {{ item.product.name }} </p>
                                </nuxt-link>
                            </div>
                        </v-flex>
                        <v-flex xs1 md1 lg1></v-flex>
                        <v-flex xs2 md2 lg2>
                            <span>Количество:</span>
                            <div class="headline ">{{ item.amount }}</div>
                            
                        </v-flex>
                        <v-flex  xs1 md1 lg1></v-flex>
                        <v-flex xs3 md3 lg3>
                            <div>Стоимость</div>
                            <div class="headline ">{{ item.totalPrice }} &#8381;</div>
                        </v-flex>
                        <v-flex xs1 md1 lg1>
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
                </v-layout>
                <v-layout row wrap justify-center>                           
                    <v-flex>
                        <h2 class="mb-4">Оформление заказа</h2>
                        <h3 class="mb-3">Контактные данные</h3>
                        <v-text-field
                            box
                            label="Имя"
                        ></v-text-field>
                        <v-text-field
                            v-model="phone" 
                            box
                            label="Телефон"
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :rules="[rules.email]"
                            box
                            label="Email"
                        ></v-text-field>
                        <v-checkbox
                            label="Согласия на обработку персональных данных"
                            color="primary"
                        ></v-checkbox>
                        <v-btn block large   small color="teal darken-1" dark>Оформить заказ</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>


<script lang="ts" src="./newOrder.ts">
</script>

