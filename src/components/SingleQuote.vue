<template>
    <v-card
    class="mx-auto mt-2"
    variant="outlined"
    color="#5f7a59"
    width="70%"
    style="background-color: white; border-radius: 23px; overflow-x: auto;"
    @click="showQuote"
    elevation="24"
    >
    <v-card-header>
      <div>
        <div class="text-h1 mb-4">
          <span id="quote">„{{quote.text}}“</span> 
        </div>
        <div class="text-h5 mb-1">
          Автор: {{quote.author}}
        </div>
        <div class="text-h6">
          Теги: <span id="tags">{{quote.tags}}</span>
        </div>
      </div>
    </v-card-header>
    <v-card-subtitle class="pb-2">
      Дата добавления: {{time}}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            time: new Date(this.quote.created_at).toLocaleDateString("ru-RU"),
        }
    },
    props: {
        quote: {
            type: Object
        }
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