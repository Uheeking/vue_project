<template>
  <div>
    <div class="order">
      <span
        :class="[condition === 2 ? 'desc_click' : 'desc']"
        @click="notices()"
        >취업공고순 |
      </span>
      <span :class="[condition === 3 ? 'desc_click' : 'desc']" @click="sites()"
        >참고사이트순 |
      </span>
      <span :class="[condition === 1 ? 'desc_click' : 'desc']" @click="all()"
        >모든 사이트순</span
      >
    </div>
    <!-- 기본 -->
    <div v-if="condition === 1">
      <div class="list" v-for="item in paginatedData" :key="item.id">
        <span class="head">{{ item.keyword }}</span
        ><br />
        <div class="detail">
          <p class="content">
            <span @click="redirect(item.url)" class="hover">{{ item.url }}</span
            ><br />
            <span>{{ item.description }}</span>
          </p>
          <i class="fas fa-trash-alt fa-2x" @click="remove(item.id)"></i>
        </div>
      </div>
    </div>
    <!-- 취업공고 -->
    <div
      class="list"
      v-else-if="condition === 2"
      v-for="item in paginatedData1"
      :key="item.id"
    >
      <span class="head">{{ item.keyword }}</span
      ><br />
      <p class="content">
        <span>{{ item.url }}</span
        ><br />
        <span>{{ item.description }}</span>
      </p>
      <span class="removeBtn">
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
    <!-- 참고사이트 -->
    <div class="list" v-else v-for="item in paginatedData2" :key="item">
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
        {{ prepage }}
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        {{ nextpage }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pageNum: 0,
      array1: new Set(), // 취업공고✍🏻
      array2: new Set(), // 참고사이트📝
      condition: 1,
      pageCount: 1,
      prepage: '< 이전',
      nextpage: '다음 >'
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
    },
    prevPage() {
      this.pageNum -= 1
    },
    all() {
      this.condition = 1
    },
    redirect(url) {
      const result = confirm('사이트로 이동하시겠습니까?')
      console.log(result)
      if (result) {
        window.open(url, '_blank')
      }
    },
    notices() {
      for (let i = 0; i < this.listArray.length; i++) {
        if (this.listArray[i].keyword.includes('취업공고✍🏻')) {
          this.array1.add(this.listArray[i])
          this.condition = 2
        }
      }
    },
    sites() {
      for (let i = 0; i < this.listArray.length; i++) {
        if (this.listArray[i].keyword.includes('참고사이트📝')) {
          this.array2.add(this.listArray[i])
          this.condition = 3
        }
      }
    },
    pageCount_methods(array) {
      if (array === this.listArray) {
        const listLeng = array.length
        const listSize = this.pageSize
        let page = Math.floor(listLeng / listSize)
        if (listLeng % listSize > 0) {
          page += 1
        }
        this.pageCount = page
      } else {
        const listLeng = array.size
        const listSize = this.pageSize
        let page = Math.floor(listLeng / listSize)
        if (listLeng % listSize > 0) {
          page += 1
        }
        this.pageCount = page
      }
    },
    remove(id) {
      const result = confirm('정말로 삭제하시겠습니까?')
      if (result) {
        axios
          .post('/api/upload/delete', {
            id: id
          })
          .then((res) => {
            alert('삭제되었습니다. ')
            this.$router.go()
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  },
  computed: {
    paginatedData() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      this.pageCount_methods(this.listArray)
      return this.listArray.slice(start, end)
    },
    paginatedData1() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      this.pageCount_methods(this.array1)
      return Array.from(this.array1).slice(start, end)
    },
    paginatedData2() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      this.pageCount_methods(this.array2)
      return Array.from(this.array2).slice(start, end)
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
.detail {
  display: flex;
}
.head {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.content {
  margin: 10px 0 0 0;
  flex-grow: 1;
}
.page-btn {
  border: none;
  background: linear-gradient(to left, #c4a5fd74, pink);
  border-radius: 10px;
  color: white;
  margin: 10px;
  width: 75px;
  padding: 8px;
  font-size: large;
  font-weight: 600;
  cursor: pointer;
}
.hover {
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  width: 219px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fas {
  cursor: pointer;
}
.remove {
  color: rgba(128, 128, 128, 0.57);
}
.desc {
  cursor: pointer;
  font-size: 14px;
}
.desc_click {
  font-size: 14px;
  font-weight: bold;
}
</style>
