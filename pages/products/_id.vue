<template>
    <section>
        <v-layout row wrap>
            <v-flex xs1 sm1 md1></v-flex>
            <v-flex
                xs12
                sm7
                md7
                pr-4
                mt-4
            >
                <v-carousel height light>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex                 
                xs12 
                sm3
                md3
                mt-4
            >
                <div>
                    <h1 class="headline"> {{ product.name }} </h1>
                    <h1 class="green--text headline "><span class="subheading font-weight-light grey--text">Цена: </span>  {{ product.price }} &#8381;</h1>
                    <v-select
                        :items="size"
                        label="Выберите размер"
                    >
                    </v-select>
                    <v-btn class="mt-5" large>Сделать пиздато</v-btn>
                    <h3 class="mt-5">О товаре</h3>
                    <p>{{ product.description }}</p>
                    <div v-if="!product.exists">
                        Отсутсвует на складе 
                    </div>
                    <div>
                        Страна производства: Russia
                    </div>
                </div>
         </v-flex>
         <v-flex xs1 sm1 md1></v-flex>
        </v-layout>
    </section>
</template>

<script lang="ts" src="./ProductById.ts">
</script>
