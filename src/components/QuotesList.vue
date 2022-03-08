<template>
  <quote-item
    v-for="post of posts" 
    v-bind:key="post.id"
    :post="post"
  />
  <v-container id="buttons">
    <v-row justify="end" class="mx-auto mt-1" id="buttons__row">
      <v-card v-if="pageNumber !== 1"
        class="mr-5"
        id="pagination__button"
        variant="outlined"
        color="#5f7a59"
      >
        <button @click="prevPage">Назад</button>
      </v-card>
      <v-card
        id="pagination__button" 
        variant="outlined" 
        color="#5f7a59" 
        v-if="pageNumber !== lastPage">
        <button @click="nextPage" >Вперед</button>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import QuoteItem from './QuoteItem.vue'
  import axios from 'axios';

  export default {
  components: { QuoteItem },
    props: {
      quotes: {
          type: Array,
          required: true
      }
    },
    data() {
      return {
        quotes: '',
        tags: '',
        posts: [],
        pageNumber: 1,
        lastPage: 0,
      }
    },
    methods: {
      async getQuotes() {
        this.pageNumber = parseInt(window.location.search.replace(/[^\d]/g, '')) || 1;
        
        const response = await axios.get('http://backend.quotes.local/api/show-quotes?page=' + this.pageNumber);

        this.lastPage = response.data['quotes'].last_page;

        this.quotes = response.data['quotes'].data;
        this.tags = response.data['tags'];

        for (let i in this.quotes) {
          let post_tags = '';

          for (let tag of this.tags[i]) {
            post_tags += tag.tag +', ';
          }

          this.posts.push({
            id: this.quotes[i].quote_id,
            author: this.quotes[i].author,
            text: this.quotes[i].text,
            created_at: this.quotes[i].created_at,
            tags: post_tags.substring(0, post_tags.length - 2)
          });
        }
      },

      nextPage() {
        this.pageNumber++;
        history.pushState(null, null, '?page='+this.pageNumber);

        this.posts.length = 0;

        this.getQuotes();
      },

      prevPage() {
        this.pageNumber--;
        history.pushState(null, null, '?page='+this.pageNumber);

        this.posts.length = 0;

        this.getQuotes();
      }
    },
    mounted() {
      this.getQuotes();
    }
  }
</script>

<style scoped>
  #pagination__button {
    padding: 1%;
  }

  #buttons {
    max-width: 70%;
  }
</style>