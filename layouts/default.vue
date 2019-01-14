<template>
	<div>
		<v-toolbar class=" lighten-3">
			<v-toolbar-title>Menu</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn >Link One</v-btn>
				<v-card-text>
					<p class="text-xs-right">
					Tel: 8 (978) 00 000 00
					</p>
					<p class="text-xs-right">
					Tel: 8 (978) 00 000 00
					</p>
    			</v-card-text>
				<input v-model="message" placeholder=" Search">
				<v-btn >Search</v-btn>
				<v-btn nuxt to="/login">Registration</v-btn>
			</v-toolbar-items>
		
		</v-toolbar>
        <v-layout
            row
            flex-end
        >
            <v-flex xs4 >
                <v-navigation-drawer permanent>
                    <v-toolbar>
                        <v-list>
                        <v-list-tile>
                            <v-list-tile-title class="title" >
                                Application
                            </v-list-tile-title>
                        </v-list-tile>
                        </v-list>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            nuxt
                            to="/products"
                        >
                        <v-list-tile-action>
                            <v-icon>mdi-edit</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
