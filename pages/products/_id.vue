<template>
    <section>
        <h1 class="header text-xs-center">Single page test</h1>
        <v-layout row wrap justify-center>
            <v-flex xs1 sm1 md1></v-flex>
            <v-flex
                xs12
                sm7
                md7
                style="max-width: 600px;"
            >
                    <v-card class="ma-4">
                        <v-carousel>
                            <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                            ></v-carousel-item>
                        </v-carousel>

                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">
                                {{ product.name }}
                            </h3>
                            <div>{{ product.description }}</div>
                            <div>PRICE: {{ product.price }}</div>
                        </div>
                        </v-card-title>
                    </v-card>
            </v-flex>
            <v-flex                 
                xs12 
                sm3
                md3
                class="pl-3 pt-3 _id_product__info"
            >
                <v-navigation >
                    <h1 class="headline"> {{product.name}} </h1>
                    <p>яблоко сочное спелое </p>
                    <v-flex 
                        xs12 
                        sm8 
                        d-flex
                    >
                        <v-select
                            :items="items"
                            label="Выберите размер"
                        >
                        </v-select>
                    </v-flex>
                    <v-btn class="mt-5" large>Добавить в корзину</v-btn>
                    <h3 class="mt-5">О товаре</h3>
                    <p>{{ product.description }}</p>
                    <div>
                        <p>Цена: <span class="font-weight-bold"> {{ product.price }}</span></p>
                    </div>
                    <div>
                        <p>В наличии: <span class="font-weight-bold"> {{ product.exists }}</span></p>
                    </div>
                    <div>
                        <p>Страна производства: <span class="font-weight-bold"> aaa</span></p>
                    </div>
 
                </v-navigation>
         </v-flex>
         <v-flex xs1 sm1 md1></v-flex>
        </v-layout>
    </section>
</template>

<script lang="ts" src="./ProductById.ts">
</script>

<style>
._id_product__info{
    border-left: 1px solid black;
}
</style>
