<template>
  <div>
    <div class="black-bg" v-show="modal == true" @click="modal = false">
      <div class="modal" @click.stop="">
        <div class="form">
          <h2 class="stitle">제목</h2>
          <input
            type="text"
            class="titleinput"
            v-model="title"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div class="form">
          <h2 class="stitle">사용 언어</h2>
          <select class="select" v-model="selected" @change="func(selected)">
            <option v-for="(item, i) in option" :key="i" :value="item.value">
              {{ item.name }}
            </option>
          </select>
          <br />
          <input type="text" v-model="selected2" class="langs" disabled />
        </div>
        <div>
          <h2 class="desc">설명</h2>
          <textarea
            class="textarea"
            v-model="description"
            placeholder="설명을 적어주세요."
          />
        </div>
        <div class="top">
          <h3 class="stitle">링크</h3>
          <input
            type="text"
            class="fontsize"
            v-model="url"
            placeholder="링크를 입력해주세요."
          />
        </div>
        <div class="top">
          <h3 class="stitle">비밀번호</h3>
          <input
            type="password"
            class="fontsize"
            v-model="password"
            placeholder="비밀번호를 입력해주세요."
            @keyup.enter="upload()"
          />
        </div>
        <p class="close" @click="upload()">업로드</p>
        <p class="close" @click="modal = false">닫기</p>
      </div>
    </div>
    <div class="reverse">
      <span class="studynotice" @click="modal = true">글쓰기</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      modal: false,
      print: false,
      title: '',
      option: [
        { name: '선택해주세요.', value: '' },
        { name: 'React', value: 'React' },
        { name: 'javascript', value: 'javascript' },
        { name: 'Vue', value: 'Vue' },
        { name: 'Node.js', value: 'Node.js' },
        { name: 'Flutter', value: 'Flutter' }
      ],
      selected: '',
      selected2: [],
      description: '',
      url: '',
      password: ''
    }
  },
  methods: {
    func(item) {
      this.selected2 = [...this.selected2, item]
    },
    upload() {
      if (this.title) {
        console.log(this.title)
        // return alert('제목을 입력해주세요.')
      }
      if (this.selected2.length === 0) {
        return alert('사용 언어를 선택해주세요.')
      }
      if (this.description === '') {
        return alert('설명을 입력해주세요.')
      }
      if (this.password === '') {
        return alert('비밀번호를 입력해주세요.')
      }
      axios
        .post('api/study/notice', {
          title: this.title,
          language: this.selected2,
          text: this.description,
          url: this.url,
          password: this.password
        })
        .then((res) => {
          if (res.data.status === 200) {
            alert('업로드 되었습니다. ')
            return this.$router.go()
          }
          if (res.data.status === 400) {
            console.log(res.data)
            alert('업로드되지 못했습니다. ')
            return this.$router.go()
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
.black-bg {
  width: 100%;
  height: 120vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  margin-top: -140px;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px 20px;
  width: 70%;
  border-radius: 8px;
  z-index: 100;
}
textarea {
  border-style: solid;
}
.stitle {
  display: inline;
  margin-right: 10px;
}
.titleinput {
  border: none;
  font-size: 20px;
  width: 70%;
}
.select {
  font-size: 15px;
  padding: 5px;
  margin-bottom: 10px;
}
.langs {
  width: 70%;
  font-size: 17px;
}
.studynotice {
  cursor: pointer;
  background-color: rgba(12, 161, 12, 0.631);
  color: white;
  font-weight: bold;
  font-size: large;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  /* float: right */
}
.desc {
  margin-top: 10px;
  margin-bottom: 5px;
}
.form {
  margin: 20px;
}
.textarea {
  width: 450px;
  height: 200px;
}
.top {
  margin-top: 10px;
}
.fontsize {
  font-size: 15px;
}
.close {
  cursor: pointer;
  margin-top: 20px;
  display: inline-block;
  margin-right: 10px;
  color: white;
  font-weight: bolder;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(
    to bottom right,
    rgb(255, 255, 0),
    rgba(61, 173, 121, 0.756)
  );
}
.reverse {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 10px;
}
</style>
