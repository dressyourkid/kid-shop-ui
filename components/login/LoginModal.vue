<template>
   <v-layout row justify-center>   
      <v-dialog
         :value="value"
         @input="$emit('input', $event)"
         max-width="400"
      >      
         <v-card>
            <div 
               class="pa-3"
            >
               <h2 class="text-xs-center">Вход</h2>
               <v-text-field label="Name"></v-text-field>
               <v-text-field label="Password"></v-text-field>
               <v-layout align-center justify-end row>
                  <v-btn color="green">
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