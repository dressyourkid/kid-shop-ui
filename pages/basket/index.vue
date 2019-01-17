<template>
   <v-layout row justify-center>   
          <v-btn
      color="primary"
      dark
      @click="dialog = true"
    >
      Open Dialog
    </v-btn>
      <v-dialog
     v-model="dialog"
         max-width="400"
      >      
         <v-card>
            <div 
               class="pa-3"
            >
               <div>тут будет товар</div>


               <v-layout align-center justify-end row>
                  <a
                    class="pa-2" 
                    color="green"
                  >
                     Перейти в корзину
                  </a> 
                  <a 
                    class="pa-2" 
                    color="green"
                  >
                     Оформить заказ
                  </a>
               </v-layout> 
            </div>
         </v-card>
      </v-dialog>
   </v-layout>
</template>

<script lang="ts" src="./BasketModal.ts">
</script>