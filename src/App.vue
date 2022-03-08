<template>
  <v-app>
    <header-green/>
    <quotes-list/>
  </v-app>
</template>

<script>
  import HeaderGreen from "@/components/HeaderGreen.vue";
  import QuotesList from "@/components/QuotesList.vue";

  export default {
    components: {
      HeaderGreen, QuotesList
    },
    methods: {
      addQuote(newQuote) {
        console.log(newQuote)
      }
    }
  }
</script>

<style>

</style>