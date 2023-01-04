<template>
  <div id="app">
    <div class="list" v-for="item in list" :key="item">
      {{ item.keyword }}<br />{{ item.url }}<br />{{ item.description }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#app',
  data() {
    return {
      list: []
    }
  },
  created() {
    axios
      .get('/api/upload/read')
      .then((res) => {
        console.log(res.data.result)
        console.log(res.data.data)
        this.list = res.data.data
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
</script>
<style scope>
.list {
  width: 70%;
  margin: 0 auto;
  background-color: #c4a5fd74;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}
</style>
