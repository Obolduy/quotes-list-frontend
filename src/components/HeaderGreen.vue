<template>
  <v-toolbar color="#265525" flat style="border-bottom: 2px solid #265525">
    <v-toolbar-items>
      <v-btn class="text-white" variant="outlined" border="2px solid white" @click="showModel">
        Добавить цитату
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <add-dialog v-model:show="modelVisible">
    <add-form
      @newQuote="addQuote"
      :tagsList="tagsList"
    />
  </add-dialog>
</template>

<script>
import AddDialog from "@/components/AddDialog.vue";
import AddForm from "@/components/AddForm.vue";
import axios from 'axios';

export default {
  components: {
    AddDialog, AddForm
  },
  data() {
    return {
      modelVisible: false,
      tagsList: []
    }
  },
  methods: {
    showModel() {
      this.modelVisible = true;
    },
    async getTags() {        
      const response = await axios.get('http://backend.quotes.local/api/get-tags');

      this.tagsList = response.data;
    }
  },
  created() {
    this.getTags();
  }
}
</script>

<style>

</style>