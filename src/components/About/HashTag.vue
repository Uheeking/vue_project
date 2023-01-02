<template>
  <div>
    <div class="black-bg">
      <div class="white-bg">
        <h2>키워드 선택</h2>
        <h4>{{ name }}님이 업로드하고자 하는 키워드를 선택해주세요.</h4>
        <span
          @click="changeColor(i)"
          :class="[thema[i] === 'light' ? 'dark' : 'light']"
          v-for="(key, i) in keyword"
          :key="i"
          >{{ key }}</span
        >
        <h2>키워드 선택</h2>
        <h4>{{ name }}님이 업로드하고자 하는 키워드를 선택해주세요.</h4>
        <h2>키워드 선택</h2>
        <h4>{{ name }}님이 업로드하고자 하는 키워드를 선택해주세요.</h4>
        <span class="close" @click="modal = false">닫기</span>
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
/* .same {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
} */
.light {
  background-color: gray;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.dark {
  background-color: rgba(169, 169, 169, 0.143);
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
</style>
