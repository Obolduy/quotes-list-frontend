<template>
  <v-card
    class="mx-auto mt-2"
    max-width="70%"
    variant="outlined"
    color="#5f7a59"
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  span {
    color:rgb(24, 39, 0)
  }
</style>