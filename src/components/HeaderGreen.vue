<template>
  <v-toolbar color="#265525" flat style="border-bottom: 2px solid #265525">
    <v-toolbar-items>
      <v-btn class="text-white" variant="outlined" border="2px solid white" @click="showModel">
        Добавить цитату
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <add-dialog v-model:show="modelVisible">
    <add-form @newQuote="addQuote"/>
  </add-dialog>
</template>

<script>
import AddDialog from "@/components/AddDialog.vue";
import AddForm from "@/components/AddForm.vue";

export default {
  components: {
    AddDialog, AddForm
  },
  data() {
    return {
      modelVisible: false
    }
  },
  methods: {
    showModel() {
      this.modelVisible = true;
    },
  }
}
</script>

<style>

</style>