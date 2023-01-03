<template>
  <div v-if="movie">
    <p>{{ movie.id }}</p>
    <p>{{ movie.name }}</p>
    <p>{{ movie.rate }}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      movie: []
    }
  },
  created() {
    axios
      .get('/api/movies')
      .then((res) => {
        this.movie = res.data[0]
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>
