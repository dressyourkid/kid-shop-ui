<template>
   <v-form>
      <v-container>
         <v-layout 
            row
            justify-center
         >
            <v-flex
               xs12
               md4
               lg4
            >
               <v-text-field label="Name">
               </v-text-field>
               <v-text-field label="Password">
               </v-text-field>
               <v-btn color="blue">
                  VK
               </v-btn>
               <v-btn color="blue">
                  FACEBOOk
               </v-btn>
               <v-btn color="green">
                  ENTER
               </v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-form>
</template>

<script lang="ts" src="./Login.ts">
</script>   