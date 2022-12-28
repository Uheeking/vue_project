<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>everything</div>
    <SideBar />
    <FileUpload />
  </div>
</template>
<script>
import SideBar from '@/components/About/SideBar.vue'
import FileUpload from '@/components/About/FileUpload.vue'
export default {
  name: 'AboutView',
  components: {
    SideBar,
    FileUpload
  }
}
</script>
