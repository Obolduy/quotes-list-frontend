<template>
    <v-card
        class="mx-auto mt-2"
        variant="outlined"
        color="#5f7a59"
        width="70%"
        style="background-color: white; border-radius: 23px; overflow-x: auto;"
        elevation="24"
    >
    <v-card-header v-if="!quote.id">
      <div class="text-h6">
        Цитата не найдена:(
        <v-spacer></v-spacer>
        <router-link to="/">Вернуться на главную</router-link>
      </div>
    </v-card-header>
    <v-card-header v-if="quote.id">
      <div>
        <div class="text-h1 mb-4">
          <span id="quote">„{{quote.text}}“</span> 
        </div>
        <div class="text-h5 mb-1">
          Автор: {{quote.author}}
        </div>
        <div class="text-h6">
          Теги: <span id="tags">{{tags}}</span>
        </div>
      </div>
    </v-card-header>
    <v-card-subtitle class="pb-2" v-if="quote.id">
      Дата добавления: {{time}}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            quote: '',
            time: '',
            tags: '',
        }
    },
    methods: {
        async getQuote() {
            const response = await axios.get('http://backend.quotes.local/api/show-quote/' + this.$route.params.id);

            this.quote = response.data.quote;

            for (let tag of response.data.tags) {
              this.tags += tag.tag + ', ';
            }

            this.tags = this.tags.slice(0, -2);

            this.time = new Date(this.quote.created_at).toLocaleDateString("ru-RU");
        },
    },
    mounted() {
        this.getQuote();
    }
}
</script>

<style scoped>
    #quote {
        font-style: italic;
        font-weight: 400;
    }
    #tags {
        font-style: italic;
        font-weight: 400;
    }
</style>