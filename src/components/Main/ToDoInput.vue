<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button class="buttonAdd" @click="addTodo">추가</button>
  </div>
</template>
<script>
export default {
  name: 'ToDoInput',
  data: function () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        var obj = { completed: false, item: this.newTodoItem }
        // (텍스트,텍스트) 가 아닌 (텍스트, 불린) 을 저장
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj))
        console.log(this.newTodoItem)
        this.$router.go()
      }
    }
  }
}
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  margin: 0 auto;
  width: 60%;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 1.3rem;
}
.buttonAdd {
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  float: right;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  background-color: red;
  opacity: 0.7;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bolder;
}
</style>
