<template>
  <div class="third">
    <div class="list" v-for="item in list" :key="item">
      <span class="head">{{ item.keyword }}</span
      ><br />
      <p class="content">
      <span>{{ item.url }}</span
      ><br />
      <span>{{ item.description }}</span>
    </p>
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
.third{
  margin-left: 90px;
}
.list {
  width: 70%;
  margin: 0 auto;
  background-color: #c4a5fd74;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.303);
}
.head {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.content{
  margin: 10px 0 0 0;
}
</style>
