<template>
  <div class="home">
    <img alt="Vue logo" class="image_uheeking" src="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F10%2Farmy-officer-recognized-for-rescuing-three-people-from-riptide-that-killed-yu-gi-oh-creator-ft.jpg?fit=max&cbr=1&q=90&w=750&h=500">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.image_uheeking {
  width: 300px;
}
</style>
