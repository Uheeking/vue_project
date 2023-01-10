<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.id">
      <div class="card" style="height: 250px">
        <!-- {{ item }} -->
        <p class="p">{{ item.title }}</p> <br />
        <p>{{ item.language }}</p>
        <p class="p-content">{{ item.text }}</p>
        <!-- <span >숑ㄹㄴㅇ런이러</span> -->
        <div class="bottom">자세히 보기 >></div>
      </div>
    </li>
  </ul>
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
  cursor: pointer;
}

.card {
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 8px;
  justify-content: space-between;
  flex-flow: column wrap;
  display: flex;
  padding-top: 30px;
  /* padding: 30px 10px; */
}
.p{
  font-weight: bold;
  font-size: larger;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.p-content{
  padding-bottom: 50px;
  display: inline-block;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* margin: 10px; */
}
.bottom {
  background-color: black;
  color: white;
  width: 100%;
  border-radius: 0 0 8px 8px;
  padding: 10px;
  /* border-style: solid; */
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
