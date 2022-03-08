<template>
  <v-card
    class="mx-auto mt-2"
    width="70%"
    variant="outlined"
    color="#5f7a59"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          {{post.author}}
        </div>
        <div class="text-h6 mb-1">
          <router-link v-bind:to="'/quote/'+post.id">
            <span>{{post.text}}</span>
          </router-link>
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
  },
}
</script>

<style scoped>
  span {
    color:rgb(24, 39, 0)
  }
</style>