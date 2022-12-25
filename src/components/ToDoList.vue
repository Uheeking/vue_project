<template>
  <div class="hello">
    <div>
      <table>
        <thead>
          <tr>목록</tr>
          <tr>상태</tr>
          <tr>삭제</tr>
        </thead>
        <tbody>
            <tr></tr>
            <tr></tr>
            <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h2 {
  color: white;
  margin: 40px 0 0;
}
.icon{
  color: white;
}
</style>
