<template>
  <div id="app">
    <h2 id="clock">{{ time }}</h2>
  </div>
</template>

<script>
export default {
  el: '#app',
  data() {
    return {
      time: ''
    }
  },
  methods: {
    getClock() {
      const date = new Date()
      this.time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  },
  mounted() {
    setInterval(this.getClock, 1000) // 1초마다 시간 갱신
  }
}
</script>

<style scoped>
#clock{
    color: white
}
</style>
