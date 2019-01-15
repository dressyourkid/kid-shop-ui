<template>
	<div>
		<v-toolbar class="yellow darken-3">
			<v-toolbar-title>KidShop</v-toolbar-title>
			<v-spacer></v-spacer>
		    <v-btn outline nuxt to="/login">Registration</v-btn>
		</v-toolbar>
         <v-layout row justify-center> 
                <v-list>
                    <v-list-tile
                        v-for="item in categories"
                        :key="item.title"
                        nuxt
                        to="/products"
                        style="float: left;"
                    >

                        <v-list-tile-content>
                            <nuxt-link :to="'/category/' + item.id">{{item.name}}</nuxt-link>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
        </v-layout>
        
        <div class="ma-3">
            <nuxt/>
        </div>
    </div>
</template>

<script lang="ts" src="./default.ts">
</script>


<style>
    .button_transform {
        text-transform: none; 
        font-size: 12px;
        min-width: 10px;
        padding: 0 10px;
    }
    .is-active{
        display: none;
    }
</style>
