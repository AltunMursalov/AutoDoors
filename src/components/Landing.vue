<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <h1>Welcome to Automatic Doors</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          It's a basic Single Page application
        </blockquote>
      </v-flex>
      <carousel></carousel>
    </v-layout>
  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  components: {
    Carousel
  }
}
</script>
