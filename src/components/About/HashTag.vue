<template>
  <div>
    <div class="black-bg">
      <div class="white-bg">
        <h2>키워드 선택</h2>
        <h4>{{ name }}님이 업로드하고자 하는 키워드를 선택해주세요.</h4>
          <span
            @click="changeColor(i)"
            :class="[thema[i] === 'light' ? 'light same' : 'dark same']"
            v-for="(key, i) in keyword"
            :key="i"
            >{{ key }}</span
          >
        <h2>URL 입력</h2>
        <h4>적고자 하는 URL을 입력해주세요.</h4>
        <input class="url" />
        <h2>사이트 설명</h2>
        <h4>{{ name }}님이 업로드하고자 하는 사이트에 대한 설명을 적어주세요.</h4>
        <textarea class="textarea" />
        <br />
        <br />
        <span class="close" @click="modal = false">닫기</span>
        <br />
      </div>
    </div>
    <h2>키워드를 선택해주세요.</h2>
    <h4 class="modal_h4" @click="modal = true">클릭</h4>
    <input placeholder="#해시태그를작성하세요" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      modal: false,
      thema: ['light', 'light'],
      name: localStorage.getItem('name'),
      keyword: ['취업공고✍🏻', '참고사이트📝']
    }
  },
  methods: {
    changeColor(i) {
      if (this.thema[i] === 'light') {
        this.thema[i] = 'dark'
      } else {
        this.thema[i] = 'light'
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
  width: 100%;
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
}
.url{
    padding: 10px;
    font-size: medium;
    width: 80%;
}
.textarea{
    width: 80%;
    height: 100px;
    margin: 0 auto;
    font-size: large;
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
</style>
