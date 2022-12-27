<template>
  <div class="home">
    <Title />
    <ToDoInput />
    <ToDoList />
    <ToDoClean />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Main/Title.vue'
import ToDoInput from '@/components/Main/ToDoInput.vue'
import ToDoList from '@/components/Main/ToDoList.vue'
import ToDoClean from '@/components/Main/ToDoClean.vue'

export default {
  name: 'MainView',
  components: {
    Title,
    ToDoInput,
    ToDoList,
    ToDoClean
  }
}
</script>

<style scoped>
.home {
  z-index: -1;
  position: absolute;
  margin-top: -110px;
  width: 100%;
  height: 102vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://pbs.twimg.com/media/DubukDVU8AE5rgO.jpg');
}
</style>
