<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h2>키워드 선택</h2>
      <h4 v-if="name">
        {{ name }}님이 업로드하고자 하는 키워드를 선택해주세요.
      </h4>
      <h4 v-else>업로드하고자 하는 키워드를 선택해주세요.</h4>
      <span
        @click="changeColor(i)"
        :class="[thema[i] === 'light' ? 'light same' : 'dark same']"
        v-for="(key, i) in keyword"
        :key="i"
        >{{ key }}</span
      >
      <h2>URL 입력</h2>
      <h4 v-if="name">{{ name }}님이 적고자 하는 URL을 입력해주세요.</h4>
      <h4 v-else>적고자 하는 URL을 입력해주세요.</h4>
      <input class="url" v-model="url" />
      <h2>사이트 설명</h2>
      <h4 v-if="name">
        {{ name }}님이 업로드하고자 하는 사이트에 대한 설명을 적어주세요.
      </h4>
      <h4 v-else>업로드하고자 하는 사이트에 대한 설명을 적어주세요.</h4>
      <textarea class="textarea" v-model="description" />
      <br />
      <br />
      <span class="close upload" @click="ee(i)">업로드</span>
      <span class="close" @click="modal = false">닫기</span>
      <br />
    </div>
  </div>
  <div>
    <p class="click_p">아래의 클릭을 눌러</p>
    <br />
    <h3 class="click_h3">업로드하고자 하는 사이트를 적어주세요.</h3>
    <br />
    <h4 class="modal_h4" @click="modal = true">클릭</h4>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      modal: false,
      thema: ['light', 'light'],
      name: localStorage.getItem('name'),
      keyword: ['취업공고✍🏻', '참고사이트📝'],
      url: '',
      description: '',
      index: new Set()
    }
  },
  methods: {
    changeColor(i) {
      if (this.thema[i] === 'light') {
        this.thema[i] = 'dark'
        this.index.add(i)
      } else {
        this.thema[i] = 'light'
        this.index.delete(i)
      }
    },
    ee(i) {
      if (this.thema[i] === 'light') {
        console.log('pass')
      } else {
        console.log(this.index)
        const uploadKeyword = []
        for (const value of this.index) {
          // console.log(this.keyword[value])
          uploadKeyword.push(this.keyword[value])
        }
        axios
          .post('/api/upload/write', {
            keyword: uploadKeyword,
            url: this.url,
            description: this.description
          })
          .then((res) => {
            // this.movie = res.data[0]
            console.log(res.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  }
}
</script>

<style scope>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  z-index: 10;
  width: 80%;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.close {
  background-color: #a377f5b9;
  opacity: 0.4;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
.url {
  padding: 10px;
  font-size: medium;
  width: 80%;
}
.textarea {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  font-size: large;
}
.modal_h4 {
  z-index: -10;
  cursor: pointer;
  background-color: #c4a5fd74;
  border-radius: 10px;
  display: inline-block;
  color: white;
  padding: 10px;
}
.upload {
  margin-right: 10px;
}
.same {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
}
.light {
  background-color: rgb(202, 201, 201);
}
.dark {
  background-color: gray;
}
.click_p {
  margin-bottom: 0;
  display: inline-block;
}
.click_h3 {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 0;
}
</style>
