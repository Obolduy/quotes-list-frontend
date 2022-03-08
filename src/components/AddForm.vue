<template>
<v-card>
  <v-card-title>
    <span class="text-h5">Добавить цитату</span>
  </v-card-title>
  <v-card-text>
    <v-container>
      <v-row class="d-flex flex-column">
        <v-col>
          <v-textarea
            autofocus
            no-resize
            label="Введите цитату"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-text-field
            label="Введите имя автора"
            persistent-hint
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            :items="tagsList"
            label="Выберите от 1 до 3 тэгов"
            multiple
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
  <v-card-actions>
    <v-btn
      color="green"
      variant="outlined" 
      border="2px solid white"
    >
      Опубликовать
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: {
    tagsList: {
        type: Array
    }
  },
  data() {
    return {
      newQuote: {
        author: '',
        quote: '',
        tags: []
      }
    }
  },
  methods: {
    addQuote() {
      this.id = Date.now();
      this.$emit('newQuote', this.newQuote)
      this.newQuote = {
        author: '',
        quote: '',
        tags: [

        ]
      }
    }
  }
}
</script>

<style>

</style>