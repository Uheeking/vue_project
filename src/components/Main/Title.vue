<template>
  <div class="hello">
    <h2>오늘은 무얼 하실 예정이신가요?</h2>
    <h1>
      <span>
        <i class="fas fa-regular fa-calendar"> TO DO LIST</i>
      </span>
    </h1>
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
.hello {
  margin-top: 400px;
}
h1 {
  color: white;
  margin: 40px 0 20px 0;

}
h2 {
  color: white;
  margin: 40px 0 0;
}
.icon {
  color: white;
}
</style>
