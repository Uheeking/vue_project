<template>
  <div class="hello">
    <h2>오늘은 무얼 하실 예정이신가요?</h2>
    <h2><font-awesome-icon icon="calendar" class="icon" /> TO DO LIST</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h2 {
  margin-top: 100px;
  color: white;
  margin: 40px 0 0;
}
.icon{
  color: white;
}
</style>
