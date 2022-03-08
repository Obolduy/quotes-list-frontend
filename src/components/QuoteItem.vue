<template>
  <v-card
    class="mx-auto mt-2"
    width="70%"
    variant="outlined"
    color="#5f7a59"
    @click="showQuote"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          {{post.author}}
        </div>
        <div class="text-h6 mb-1">
          <span>{{post.text}}</span> 
        </div>
        <div class="text-caption">
          {{post.tags}}
        </div>
      </div>
    </v-card-header>
  </v-card>
  <single-quote-shower v-model:show="quoteVisible">
    <single-quote
    :quote="post"
    />
  </single-quote-shower>
</template>

<script>
import SingleQuoteShower from "@/components/SingleQuoteShower.vue";
import SingleQuote from "@/components/SingleQuote.vue";

export default {
  components: {
    SingleQuoteShower, SingleQuote
  },
  data() {
    return {
      quoteVisible: false,
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    showQuote() {
      this.quoteVisible = true;
    }
  },
}
</script>

<style scoped>
  span {
    color:rgb(24, 39, 0)
  }
</style>