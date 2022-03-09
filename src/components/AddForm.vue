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
            name="quote"
            v-model="newQuote.quote"
            autofocus
            no-resize
            label="Введите цитату"
            required
          ></v-textarea>
        </v-col>
        <v-col>
          <v-text-field
            name="author"
            v-model="newQuote.author"
            label="Введите имя автора"
            persistent-hint
            required
            @keypress="checkAuthor"
          ></v-text-field>
        </v-col>
        <v-col>
          <div class="mb-2" v-for="author in existstAuthors" :key="author.id">
            <v-btn @click="changeAuthor">{{author}}</v-btn>
          </div>
        </v-col>
        <v-col>
          <v-select
            v-if="newQuote.tags.length < 3"
            name="tags"
            v-model="newQuote.tags"
            :items="tagsList"
            label="Выберите от 1 до 3 тэгов"
            multiple
          ></v-select>
          <div v-if="newQuote.tags.length === 3">
            <div v-for="tag of newQuote.tags" v-bind:key="tag.id">
              <v-btn @click="deleteTag" class="mb-2" color="black">{{tag}}</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
  <v-card-actions>
    <v-btn
      color="green"
      variant="outlined" 
      border="2px solid white"
      @click="addQuote"
    >
      Опубликовать
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import axios from 'axios';

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
      },
      existstAuthors: []
    }
  },
  methods: {
    async addQuote() {
      if (this.newQuote.author == '' || this.newQuote.quote == '' || this.newQuote.tags.length <= 0) {
        alert('Необходимо заполнить все поля');

        return false;
      }

      const response = await axios.post('http://backend.quotes.local/api/add-quote', this.newQuote);

      document.location.href = '/';
    },
    async checkAuthor() {
      this.existstAuthors.length = 0;

      if (this.newQuote.author.length > 2) {
        const response = await axios.post('http://backend.quotes.local/api/check-author', {author: this.newQuote.author});
        
        for (let obj of response.data) {
          this.existstAuthors.push(obj.author);
        }
      }
    },
    changeAuthor(event) {
      this.newQuote.author = event.target.textContent;
      this.existstAuthors.length = 0;
    },
    deleteTag(event) {
      let index = this.newQuote.tags.indexOf(event.target.textContent);
      this.newQuote.tags.splice(index,1);
    }
  }
}
</script>

<style>

</style>