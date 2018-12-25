<template>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex
          v-for="card in cards"
          v-bind="{ [`md${card.flex}`]: true }"
          :key="card.title">
            <v-card>
              <v-img :src="card.src" height="200px"></v-img>
              <v-card-title primary-title>
                <div class="headline"> {{ card.title }} </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat>Buy</v-btn>
              <v-btn flat color="purple">Explore</v-btn>
            </v-card-actions>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with 
              all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! 
              You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, show: false },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, show: false },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show: false  },
      ]
    }
  }
}
</script>
