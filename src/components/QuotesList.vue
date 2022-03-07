<template>
  <div v-for="quote in quotes" v-bind:key="quote.id">
    <v-card
    class="mx-auto mt-2"
    max-width="70%"
    variant="outlined"
    color="#5f7a59"
    >
      <v-card-header>
        <div>
          <div class="text-overline mb-1">
            {{quote.author}}
          </div>
          <div class="text-h6 mb-1">
            <span>{{quote.quote}}</span> 
          </div>
          <div class="text-caption">{{quote.tags}}</div>
        </div>
      </v-card-header>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: {
      quotes: {
          type: Array,
          required: true
      }
    },
    data() {
      return {
        quotes: [
          {id: 1, author: "Joker", quote: "Не тот джокер кто не джокер а тот кто джокер", tags: "Цитаты джокера", date: "15.10.2003"},
          {id: 2, author: "Владик", quote: "Раз два три четыре пять", tags: "Цитаты владика, цитаты владика 2", date: "15.10.2003"},
          {id: 3, author: "мне лень думать 1", quote: "ТУТ МОЖЕТ БЫТЬ И БОЛЕЕ ДЛИННАЯ ЦИТАТА", tags: "Цитаты джокера 2", date: "15.10.2003"},
          {id: 4, author: "мне лень думать 2", quote: "Я НЕ ЗНАЮ КАКОЙ ЛИМИТ НА САМОМ ДЕЛЕ", tags: "Тут до трех тегов если что", date: "15.10.2003"},
          {id: 5, author: "ПрИвЕт Из 2007", quote: "Абоба", tags: "Цитаты неджокера", date: "15.10.2003"},
        ],
      }
    },
    methods: {
        
    }
  }
</script>

<style scoped>
  span {
    color:rgb(24, 39, 0)
  }
</style>