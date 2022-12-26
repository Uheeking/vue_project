<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="liBtn">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i))
      }
    }
  }
}
</script>

<style scope>
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
ul {
  list-style: none;
  padding-left:0px;
  display: table;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.liBtn {
  margin: 0 auto;
  background-color: white;
  margin: 5px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
}
</style>
