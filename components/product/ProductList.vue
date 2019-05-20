<template>
    <div>
        <v-layout row wrap>
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
        <v-layout justify-center align-center>
                <v-pagination
                    :value="currentPage"
                    @input="onPageNumberChange"
                    :length="numberOfPages"
                    :total-visible="7"
                >
                </v-pagination>
        </v-layout>
    </div>
</template>

<script lang="ts" src="./ProductList.ts">
</script>    
