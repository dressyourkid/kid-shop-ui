<template>
    <section>
        <v-layout row wrap  justify-center>
            <v-flex                 
                xs12
                sm6
                md6
                mt-4
                ml-5
                mr-5
            >
                <div>
                    <v-text-field
                        v-model="name"
                        box
                        label="Наименование"
                    ></v-text-field>
                    <v-text-field
                        v-model="Description"
                        box
                        label="Описание"
                    ></v-text-field>
                    <v-text-field
                        v-model="Price"
                        box
                        label="Цена"
                    ></v-text-field>
                    <v-text-field
                        v-model="amount"
                        box
                        label="Количество"
                    ></v-text-field>
					<div>
                        <img :src="imageUrl"  height="150" />
                        <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                        <input
                            type="file"
                            style="display: none"
                            ref="image"
                            accept="image/*"
                            @change="onFilePicked"
                        />
                    </div>
                    <v-combobox
                        v-model="Category"
                        :items="categories"
                        label="Категория"
                        :menu-props="{openOnClick: false}"
                    ></v-combobox>
                    <v-btn class="mt-5" large @click="saveProduct">Сохранить</v-btn>
                    <v-btn class="mt-5 right" @click="clear"  large>Очистить</v-btn>
                </div>
         </v-flex>
        </v-layout>
    </section>
</template>

<script lang="ts" src="./new.ts">
</script>

