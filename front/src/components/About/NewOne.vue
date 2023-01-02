<template>
  <div v-if="movie">
    <div>나는야 유희왕</div>
    <p>{{ movie.id }}</p>
    <p>{{ movie.name }}</p>
    <p>{{ movie.rate }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      movie: null
    }
  },
  setup() {},
  created() {
    this.$http.get('/api/url').then(
      ((res) => {
        const movie = res.data.movie
        if (movie) this.movie = movie
      }).catch((err) => {
        console.error(err)
      })
    )
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
