<template>
  <div id="app">
    <span id="clock">{{ time }}</span>
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
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      this.time = `${hours}:${minutes}:${seconds}`
    }
  },
  mounted() {
    setInterval(this.getClock, 1000) // 1초마다 시간 갱신
  }
}
</script>

<style scoped>
#clock {
  font-weight: bolder;
  font-size: 6em;
  width: 300px;
  height: 60px;
  color: white;
  position: absolute;
  left: 50%;
  top: 54%;
  margin-left: -175px;
  margin-top: -261px;
}
</style>
