<template>
    <div v-if="loaded" >
        <div v-if="content.length">
            <v-layout 
                row 
                wrap   
            >
                <v-flex
                    v-for="product in content"
                    :key="product.id" 
                    xs12 
                    sm6
                    md4
                >
                    <card :product="product"/>
                </v-flex>
            </v-layout>
            <v-layout 
                justify-center 
                align-center 
            >
                    <v-pagination
                        :value="currentPage"
                        @input="onPageNumberChange"
                        :length="numberOfPages"
                        :total-visible="7"
                    >
                    </v-pagination>
            </v-layout>
        </div>
        <v-layout 
            v-else
            row wrap 
            justify-center 
            text-xs-center  
        >
            <v-flex
                xs12 
                sm6
                md4  
                class="green--text" 
            >
                <h2  class="pt-5">В данный момент товары отсутствуют.</h2>
                <p>Приносим свои извенения.</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts" src="./ProductList.ts">

</script>  