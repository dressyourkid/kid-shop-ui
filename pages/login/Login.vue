<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>


<script lang="ts" src="./Login.ts">
</script>
<style>
.v-form > .container > .layout:only-child {
    margin: auto;
}
  .container .layout {
    display: block;
    max-width: 400px;
    background: radial-gradient(40% 50%, #ffffff, #d9d1f1);
    border: 4px solid #9683ce;
    border-radius: 10px;
    font-weight: bold;
    padding: 0 12px 0 12px;
  }
</style>