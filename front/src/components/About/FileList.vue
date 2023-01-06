<template>
  <div class="third">
    <h1 class="bold">Site List</h1>
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
.bold {
  display: inline-block;
  margin: 20px 10px 35px 10px;
  width: 230px;
  color: white;
  border-radius: 50px;
  padding: 20px;
  font-style: normal;
  background: linear-gradient(to top, pink, rgba(54, 46, 212, 0.507));
}

.order {
  text-align: right;
  margin-bottom: 15px;
  margin-left: 90px;
  width: 75%;
}
.desc {
  cursor: pointer;
  font-size: 14px;
}
.desc_click {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>
