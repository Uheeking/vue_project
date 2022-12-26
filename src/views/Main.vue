<template>
  <div class="home">
    <Title />
    <ToDoInput class='todoInput' />
    <ToDoList />
    <AppClock />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import AppClock from '@/components/AppClock.vue'
import ToDoInput from '@/components/ToDoInput.vue'
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'HomeView',
  components: {
    Title, AppClock, ToDoInput, ToDoList
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://pbs.twimg.com/media/DubukDVU8AE5rgO.jpg");
}

.image_uheeking {
  width: 300px;
}
</style>
