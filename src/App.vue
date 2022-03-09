<template>
  <v-app>
    <header-green/>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import HeaderGreen from "@/components/HeaderGreen.vue";

  export default {
    components: {
      HeaderGreen
    },
    mounted() {
      document.title = 'Сборник цитат';
    }
  }
</script>

<style>

</style>