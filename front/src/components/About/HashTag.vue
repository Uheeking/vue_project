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
      <span class="close upload" @click="upload(i)">업로드</span>
      <span class="close" @click="modal = false">닫기</span>
      <br />
    </div>
  </div>
  <div class="upload_top">
    <div class="border">
      <h3 class="click_h3">Site Upload</h3>
      <h4
        class="modal_h4"
        @click="modal = true"
        @mouseover="over()"
        @mouseleave="overend()"
      >
        {{ click }}
      </h4>
    </div>
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
      index: new Set(),
      click: 'Click!!'
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
    upload(i) {
      if (this.thema[i] === 'light') {
        console.log('pass')
      } else {
        console.log(this.index)
        const uploadKeyword = []
        for (const value of this.index) {
          uploadKeyword.push(this.keyword[value])
        }
        axios
          .post('/api/upload/write', {
            keyword: uploadKeyword,
            url: this.url,
            description: this.description
          })
          .then((res) => {
            alert('업로드 되었습니다. ')
            this.$router.go()
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    over() {
      this.click = '😍'
    },
    overend() {
      this.click = 'Click!!'
    }
  }
}
</script>

<style scope>
.black-bg {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  margin-top: -100px;
}
.white-bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin-bottom: 10px;
  display: inline-block;
  font-weight: bolder;
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
  background: linear-gradient(to left, #c4a5fd74, pink);
  border-radius: 10px;
  display: inline-block;
  color: white;
  padding: 10px;
}
.modal_h4:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.303);
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
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.303);
}
.click_p {
  margin-bottom: 0;
  display: inline-block;
}
.click_h3 {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 0;
  margin-right: 10px;
}
.upload_top {
  margin-left: 90px;
}
.border {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 50px;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
