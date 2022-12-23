<template>
  <div class="hello">
    <h2>오늘은 무얼 하실 예정이신가요?</h2>
    <h2><font-awesome-icon icon="calendar" class="icon" /> TO DO LIST</h2>
    <div></div>
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
/* .hello{
  width: 100vh;
  height: 200vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://pbs.twimg.com/media/DubukDVU8AE5rgO.jpg");
} */
h2 {
  color: white;
  margin: 40px 0 0;
}
.icon{
  color: white;
}
</style>
