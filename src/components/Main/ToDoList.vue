<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in todoItems"
        :key="todoItem"
        :class="[todoItem.completed === false ? 'liBtn' : 'liBtnCompleted']"
      >
        {{ todoItem.item }}
        <div class="BtnClass">
          <span
            :class="[
              todoItem.completed === false ? 'checkBtn' : 'checkBtnCompleted'
            ]"
            @click="changeThema(todoItem, index)"
          >
            <i class="fas fa-solid fa-check"></i>
          </span>
          <span class="removeBtn" @click="removeTodo(todoItem.item, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
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
    },
    changeThema(todoItem, index) {
      if (todoItem.completed === false) {
        console.log(todoItem, index)
        for (var i = 0; i < localStorage.length; i++) {
          if (todoItem.item === localStorage.key(i)) {
            var obj = { completed: true, item: todoItem.item }
            localStorage.setItem(todoItem.item, JSON.stringify(obj))
          }
        }
        this.$router.go()
      } else {
        for (var j = 0; j < localStorage.length; j++) {
          if (todoItem.item === localStorage.key(j)) {
            var obj2 = { completed: false, item: todoItem.item }
            localStorage.setItem(todoItem.item, JSON.stringify(obj2))
          }
        }
        this.$router.go()
      }
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (
          localStorage.getItem(localStorage.key(i)) ===
          localStorage.getItem('name')
        ) {
          return
        } else {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  }
}
</script>

<style scope>
.checkBtn {
  cursor: pointer;
  color: #62acde;
  margin-right: 10px;
}
.checkBtnCompleted {
  color: #b3adad;
  margin-right: 10px;
}
.BtnClass {
  margin-left: auto;
}
.removeBtn {
  cursor: pointer;
  color: #de4343;
}
ul {
  list-style: none;
  padding-left: 0px;
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
.liBtnCompleted {
  text-decoration: line-through;
  color: #b3adad;
  margin: 0 auto;
  background-color: white;
  margin: 5px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
}
</style>
