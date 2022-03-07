<template>
  <quote-item
    v-for="post of posts" 
    v-bind:key="post.id"
    :post="post"
  />
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
        posts: []
      }
    },
    methods: {
      async getQuotes() {
        const response = await axios.get('http://backend.quotes.local/api/show-quotes');

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
      }
    },
    mounted() {
      this.getQuotes();
    }
  }
</script>

<style scoped>

</style>