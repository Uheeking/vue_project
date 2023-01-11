<template>
  <div>
    <div
      class="black-bg"
      v-if="modal == true"
      @click="modal = false"
      @keyup.esc="modal = false"
    >
      <div class="white-bg" @click.stop="">
        <div class="title">
          {{ this.item_detail.title
          }}<i class="fa-solid fa-xmark close-top" @click="modal = false"></i>
        </div>
        <label class="head">사용언어</label>
        <br />
        <span v-for="item in img" :key="item">
          <img :src="item" class="image" />
        </span>
        <br />
        <label class="head">내용</label>
        <p class="p-bottom">{{ this.item_detail.text }}</p>
        <label class="head-reply">댓글</label>
        <input class="head-reply" placeholder="닉네임" v-model="nickname" />
        <div class="reply">
          <textarea class="input" v-model="reply" />
          <span class="close" @click="add(this.item_detail.id)">등록</span>
        </div>
        <div class="reply">
          <span class="close" @click="write_delete(this.item_detail.id)"
            >삭제</span
          >
        </div>
        <i
          v-show="reply_show == false"
          @click="reply_show = true"
          class="fas fa-regular fa-chevron-down fa-lg"
        ></i>
        <i
          v-show="reply_show == true"
          @click="reply_show = false"
          class="fas fa-regular fa-chevron-up fa-lg"
        ></i>
        <div v-show="reply_show == true">
          <div v-for="list in id_reply" :key="list">
            <div v-if="this.item_detail.id === list.question_num">
              <span style="font-weight: bold"> {{ list.nickname }}</span>
              {{ list.reply }}
              <i
                class="fas fa-trash-alt"
                @click="reply_delete(list.id, list.password)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul class="list">
        <li class="item" v-for="item in list" :key="item.id">
          <div class="card" style="height: 250px">
            <p class="p">{{ item.title }}</p>
            <br />
            <p>{{ item.language }}</p>
            <p class="p-content">{{ item.text }}</p>
            <div
              class="bottom"
              @click="
                ;(modal = true), (item_detail = item), split(item.language)
              "
            >
              자세히 보기 >>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      show: false,
      modal: false,
      reply_show: false,
      item_detail: {},
      img: [],
      result: '',
      reply: '',
      id_reply: [],
      nickname: ''
    }
  },
  created() {
    axios
      .get('/api/study/read')
      .then((res) => {
        // console.log(res.data.data)
        this.list = res.data.data
      })
      .catch((err) => {
        console.error(err)
      })
    axios
      .get('/api/study/reply_read')
      .then((res) => {
        // console.log(res.data.data)
        this.id_reply = res.data.data
        console.log(this.id_reply)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  methods: {
    split(langs) {
      const source = []
      for (let i = 0; i < langs.split(',').length; i++) {
        if (langs.split(',')[i] === 'Flutter') {
          source.push(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///9UxfgBV5sptvZOw/jd8v265fylu9PY8P1KwvhBwfhmyvkATZbx+v4AUZjn9v4AsfbQ7f0raKQBU5TM2OYARZMZtPYBUI4osO4AI0EAK0wBTYkBWJ0BR34BQXQGSHoBPm4EKkUANmA9aJEAQHwsY5kAQ3oGQ3EFPmgAPG4ANWIFNVgAL1cELk0AJ0kBP3AApOXM0dkANHoXX6C6y94QIIt1AAADOElEQVR4nO3c+3bSQBDHccpFK1hrpTUrkJCi0gp49/2fzWRJa6BJ9lbZmTm/7wNw5nNmczZ/cNLrIYQQQgghZG70IqSr2OObOx+/8m88uYg9v7Hz8Zl/w0ns8c0BCCDxAASQeAACSDwAASQegAASD0AAiQcggMQDEEDiAQgg8QAEkHgAAkg8AAEkHoAAEg9AAIkHIIDEAxBA4gEIIPEABJB4AAJIPAABJB6AABIPQACJByCAxAMQQOIBCCDxAASQeAACSDwAASQegAASD0AAifdfgRejoOgDL4cBn4Ycjy8ZAIcBP372LJ++JAwcSgeK3yCAAJZdSAcG7ZAHMIDIBehN5AP0JHK46IOInDboReQGdCbyAzoSOQKdiDyBDkSuQGsiX6AlkTPQisjrovcg8t6gBZE/0EA0Agf0gZ1EI/D9YEAf2EG0AXoTTwhsJdoBPYknBbYQbYFexBMDG4n2QA/iyYENRBegM/EEF/3TjohuQEdihA2WHRBdgU7ESMADojvQgRgNWCP6AK2JEYGPRD+gJTEqsCL6Aq2IkYGa6A+0IEYHlsQAoJFIAFgQu2foBhqIUS56x0zATiKJDRoyAzuIUoCtRDnAFqIkYCNRFrCBKA34hCgPeESUCDwgyrjoO4gyN1gjygVWRMlATZQNLIgcgKMA4GAwoQ/sXb0NAKqPsce3KYColp8+xx7fJn/icp28eRd7fJs8iaoATvuCiXtgXy5RLVMNFEt82KBYYgGcTx+EEonqrg4USCyBSV0ojVgB60JZRHWXaeCBUBJR3X9JG4RyiHtgg1AKUQObhTKI6n6zbhVKIKrtJvsnFEhU212+TrWweYncierrLs+6hbyJBXCV60Paekp5E9Xtt9XmcYetQr5EdfthVxMev7XxJxbAmRZmqT6mrT6uxBJYCcsHcdpftANZEjVQC79nadLv9nEk7oGz7WqVp1OTjiOxAs52WbJYWAGZEStgPrfVcSNq4GZufPbYEgvgKu07rY8X8ccsT9xxnIg/fyUdd7sI4vWNNxBEMoEIIog0AhFEEGkEIogg0ghEEEGkEYggMiG+9u/mN4M/+PeuX4b0J/b4CCGEEELoWfoLHXqgHOoeuJEAAAAASUVORK5CYII='
          )
        } else if (langs.split(',')[i] === 'Node.js') {
          source.push(
            'data:image/png;base64,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'
          )
        } else if (langs.split(',')[i] === 'javascript') {
          source.push(
            'data:image/png;base64,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'
          )
        } else if (langs.split(',')[i] === 'React') {
          source.push(
            'data:image/png;base64,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'
          )
        } else {
          source.push(
            'data:image/png;base64,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'
          )
        }
      }
      this.img = source
      console.log(this.img)
    },
    add(id) {
      if (this.nickname !== '') {
        if (this.reply !== '') {
          this.result = prompt('비밀번호를 입력해주세요.')
          if (this.result !== '' && this.result !== null) {
            axios
              .post('api/study/write', {
                reply: this.reply,
                password: this.result,
                id: id,
                nickname: this.nickname
              })
              .then((res) => {
                if (res.data.status === 200) {
                  alert('업로드 되었습니다. ')
                  return this.$router.go()
                }
                if (res.data.status === 400) {
                  console.log(res.data)
                  alert('업로드되지 못했습니다. ')
                  // return this.$router.go()
                }
              })
              .catch((err) => {
                console.error(err)
              })
          } else {
            alert('비밀번호를 입력해주세요.')
          }
        } else {
          alert('댓글을 등록해주세요.')
        }
      } else {
        alert('닉네임을 입력해주세요.')
      }
    },
    write_delete(id) {
      const result = confirm('정말로 삭제하시겠습니까?')
      if (result) {
        axios
          .post('/api/study/write_delete', {
            id: id
          })
          .then((res) => {
            if (res.data.status === 200) {
              alert('댓글이 삭제되었습니다. ')
              return this.$router.go()
            }
            if (res.data.status === 400) {
              // console.log(res.data)
              alert('댓글이 삭제되지 않았습니다. ')
              // return this.$router.go()
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    reply_delete(id, password) {
      console.log(password)
      const result = prompt('비밀번호를 입력해주세요.')
      if (result === password) {
        axios
          .post('/api/study/reply_delete', {
            id: id
          })
          .then((res) => {
            if (res.data.status === 200) {
              alert('댓글이 삭제되었습니다. ')
              return this.$router.go()
            }
            if (res.data.status === 400) {
              // console.log(res.data)
              alert('댓글이 삭제되지 않았습니다. ')
              // return this.$router.go()
            }
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        alert('비밀번호가 틀렸습니다. ')
      }
    }
  }
}
</script>

<style scoped>
.black-bg {
  width: 120%;
  height: 120vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  margin-top: -250px;
  margin-left: -100px;
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
  padding-bottom: 20px;
}
.title {
  font-size: 27px;
  font-weight: bold;
  background-color: rgba(12, 161, 12, 0.631);
  color: white;
  padding: 10px;
  border-radius: 8px 8px 0 0;
}
.image {
  width: 50px;
  margin-right: 10px;
}
.head {
  display: inline-block;
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
}
.reply {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.head-reply {
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
  margin-top: 10px;
}
.input {
  border-style: solid;
  margin-right: 10px;
  width: 70%;
}
p-bottom {
  display: inline-block;
  margin-bottom: 15px;
}
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
}
.p {
  font-weight: bold;
  font-size: larger;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* back */
}
.p-content {
  padding-bottom: 50px;
  display: inline-block;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* margin: 10px; */
}

.bottom {
  background-color: rgba(12, 161, 12, 0.631);
  color: white;
  width: 100%;
  border-radius: 0 0 8px 8px;
  padding: 10px;
  font-weight: bold;
  /* border-style: solid; */
}
.close-top {
  float: right;
  cursor: pointer;
  /* margin: 7px; */
  display: inline-block;
  background: linear-gradient(
    to bottom right,
    rgb(255, 255, 0),
    rgba(61, 173, 121, 0.756)
  );
  color: white;
  padding: 7px;
  font-weight: bold;
  border-radius: 8px;
}
.close {
  float: right;
  cursor: pointer;
  /* margin: 7px; */
  display: inline-block;
  background: linear-gradient(
    to bottom right,
    rgb(255, 255, 0),
    rgba(61, 173, 121, 0.756)
  );
  color: white;
  padding: 7px;
  font-weight: bold;
  border-radius: 8px;
  padding-top: 13px;
}
.fa-chevron-down {
  cursor: pointer;
  padding: 15px;
}
.fa-chevron-up {
  cursor: pointer;
  padding: 15px;
}
.fa-trash-alt {
  cursor: pointer;
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
