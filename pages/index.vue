<template>
    <section>
        <v-carousel hide-delimiters dark>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <carousel 
            title="Акции дня"
            btn-label="Смотреть все"
            category-id="2007"
        />
        <carousel 
            title="Косметика для вас"
            btn-label="Подробнее"
            category-id="2004"
        />
    </section>
</template>

<script lang="ts" src="./index.ts">
</script>
