<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.id">
      <div class="card" style="height: 250px">
        <!-- {{ item }} -->
        {{ item.title }} <br />
        {{ item.language }}
        {{ item.text }}
        <span class="bottom">숑ㄹㄴㅇ런이러</span>
      </div>
    </li>
  </ul>
  <!-- <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> -->
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      show: false
    }
  },
  created() {
    axios
      .get('/api/study/read')
      .then((res) => {
        console.log(res.data.data)
        this.list = res.data.data
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>

<style scoped>
.list {
  column-count: 3;
  column-gap: 20px;
  padding: 20px;
}

.item {
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 20px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 8px;
}
.bottom {
  background-color: white;
}

/* for reset */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Roboto,
    'Segoe UI', Arial, sans-serif;
}

body,
ul,
li,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
</style>
