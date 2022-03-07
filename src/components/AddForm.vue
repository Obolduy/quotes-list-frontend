<template>
  <form @submit.prevent="addQuote">
    <input
    type="text"
    name="author" 
    v-model="newQuote.author"
    placeholder="Автор цитаты">
    <textarea name="quote"
    v-model="newQuote.quote"
    placeholder="Введите текст цитаты">
    </textarea>
    <select name="tags" multiple v-model="newQuote.tags">
      <option value="1" selected>Тег 1</option>
      <option value="2">Тег 2</option>
      <option value="3">Тег 3</option>
      <option value="4">Тег 4</option>
      <option value="5">Тег 5</option>
    </select>
    <input type="submit" value="Пнопка">
  </form>
</template>

<script>
export default {
  data() {
    return {
      newQuote: {
        author: '',
        quote: '',
        tags: [

        ]
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