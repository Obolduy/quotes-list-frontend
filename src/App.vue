<template>
  <header-green/>
  <add-form @newQuote="addQuote"/>
  <quotes-list :quotes="quotes"/>
</template>

<script>
  import HeaderGreen from "@/components/HeaderGreen.vue";
  import QuotesList from "@/components/QuotesList.vue";
  import AddForm from "@/components/AddForm.vue";

  export default {
    components: {
      HeaderGreen, AddForm, QuotesList
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