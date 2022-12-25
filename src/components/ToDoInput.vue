<template>
   <div>
      <input type="text" value="">
      <button type="submit">추가</button>
    </div>
</template>

<script>
export default {
  name: 'ToDoInput',
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
