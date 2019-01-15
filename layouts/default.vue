<template>
	<div>
		<v-toolbar class="yellow darken-3">
			<v-toolbar-title>KidShop</v-toolbar-title>
			<v-spacer></v-spacer>
		    <v-btn outline nuxt to="/login">Registration</v-btn>
		</v-toolbar>
        <v-layout
            row
            flex-end
        >
            <v-flex xs4 >
                <v-navigation-drawer permanent>
                    <v-list>
                        <v-list-tile
                            v-for="item in title"
                            :key="item"
                            nuxt
                            to="/products"
                        >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                        </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer >
            </v-flex>
            <div class="ma-3">
                <nuxt/>
            </div>
        </v-layout>
    </div>
</template>

<script lang="ts" src="./default.ts">
</script>   
