<template>
  <div class="home">
    <AppClock />
    <InputName />
    <Weather />
  </div>
</template>

<script>
import AppClock from '@/components/Hello/AppClock.vue'
import Weather from '@/components/Hello/WeatherVue.vue'
import InputName from '@/components/Hello/InputName.vue'
export default {
  name: 'HelloView',
  components: {
    AppClock,
    Weather,
    InputName
  }
}
</script>

<style scoped>
.home {
  margin-top: -100px;
  width: 100%;
  height: 101vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://image.wconcept.co.kr/productimg/image/img0/64/301105064_JI27568.jpg');
}
</style>
