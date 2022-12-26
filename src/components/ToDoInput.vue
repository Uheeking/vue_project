<template>
  <div class="inputBox shadow">
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
      console.log(this.newTodoItem)
      localStorage.setItem(this.newTodoItem, this.newTodoItem)
      this.$router.go()
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
  font-size: 0.9rem;
}
.buttonAdd {
  float: right;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  background-color: red;
  opacity: 0.7;
  color: white;
  border: none;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
