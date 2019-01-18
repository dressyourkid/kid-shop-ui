<template>
    <v-layout row justify-center>   
        <v-dialog
            :value="value"
            @input="$emit('input', $event)"
            max-width="400"
        >      
            <v-card>
                <div class="pa-3">
                    <h2 class="text-xs-center">Вход</h2>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                    <v-layout row align-center justify-end>
                        <!-- 
                            To do
                            1. http://test1.dressyourkid.ru:8080 заменить на переменную 
                                либо переменную окружения либо импортить из nuxt.config.js
                            2. http://localhost:3000 тоже надо сюда поставлять через переменную, так как приложение может быть на другом хосте
                            3. Запоминать текущий путь, чтоб потом открыть его после успешной авторизации
                         -->
                        <a href="http://test1.dressyourkid.ru:8080/connect/vk?redirect_uri=http://localhost:3000/connect/vk">
                            <v-btn dark color="teal darken-1">
                                Войти через VK
                            </v-btn> 
                        </a>
                        <v-btn dark color="teal darken-1">
                            Вход
                        </v-btn> 
                    </v-layout> 
                </div>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang="ts" src="./LoginModal.ts">
</script>    