<template>
    <v-form>
        <v-container>
            <v-layout row wrap justify-center>                           
                <v-flex    
                    xs12
                    sm6
                    md6
                    text-xs-center
                >
                    <h2 class="mb-4">Оформление заказа</h2>
                    <h3 class="mb-3">Контактные данные</h3>
                    <v-text-field
                        box
                        label="Имя"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="phone" 
                        box
                        label="Телефон"
                    >
                    </v-text-field>
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
                    <v-btn>Оформить заказ</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>


<script lang="ts" src="./newOrder.ts">
</script>

