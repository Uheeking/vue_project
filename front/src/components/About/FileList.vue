<template>
  <div class="third">
    <h2 class="header">사이트 리스트</h2>
    <PagiNation :list-array="list" />
  </div>
</template>

<script>
import axios from 'axios'
import PagiNation from './PagiNation.vue'
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
  },
  components: {
    PagiNation
  }
}
</script>
<style scope>
.third {
  margin-left: 90px;
  margin-bottom: 10px;
}
.order {
  text-align: right;
  margin-bottom: 15px;
  margin-left: 90px;
  width: 75%;
}
.desc {
  cursor: pointer;
}
</style>
