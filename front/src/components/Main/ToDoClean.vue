<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All </span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function () {
      localStorage.clear()
      this.$router.go()
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  cursor: pointer;
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  margin-top: 10px;
}
</style>
