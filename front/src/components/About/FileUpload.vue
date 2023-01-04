<template>
  <div id="app">
    <div></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#app',
  data() {
    return {
      nes: ''
    }
  },
  created() {
    axios
      .post('/api/upload/read')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>
