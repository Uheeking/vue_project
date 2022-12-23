<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AppClock />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppClock from '@/components/AppClock.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, AppClock
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
