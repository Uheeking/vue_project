<template>
  <div class="home">
    <AppClock />
    <Weather />
  </div>
</template>

<script>
import AppClock from '@/components/Hello/AppClock.vue'
import Weather from '@/components/Hello/WeatherVue.vue'
export default {
  name: 'HelloView',
  components: {
    AppClock,
    Weather
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://image.wconcept.co.kr/productimg/image/img0/64/301105064_JI27568.jpg');
}
</style>
