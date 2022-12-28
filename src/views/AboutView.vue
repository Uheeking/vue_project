<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>everything</div>
    <SideBar />
  </div>
</template>
<script>
import SideBar from '@/components/About/SideBar.vue'
export default {
  name: 'AboutView',
  components: {
    SideBar
  }
}
</script>
