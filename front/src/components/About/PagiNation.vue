<template>
  <div>
    <div class="list" v-for="item in paginatedData" :key="item">
      <span class="head">{{ item.keyword }}</span
      ><br />
      <p class="content">
        <span>{{ item.url }}</span
        ><br />
        <span>{{ item.description }}</span>
      </p>
    </div>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 0
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 6
    }
  },
  methods: {
    nextPage() {
      this.pageNum += 1
      console.log('ses', this.listArray)
    },
    prevPage() {
      this.pageNum -= 1
    }
  },
  computed: {
    pageCount() {
      const listLeng = this.listArray.length
      const listSize = this.pageSize
      let page = Math.floor(listLeng / listSize)
      if (listLeng % listSize > 0) {
        page += 1
      }
      return page
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      return this.listArray.slice(start, end)
    }
  }
}
</script>

<style scoped>
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
.content {
  margin: 10px 0 0 0;
}
</style>
