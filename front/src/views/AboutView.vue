<template>
  <div class="about">
    <SideBar />
    <HashTag />
    <!-- <FileUpload /> -->
  </div>
</template>
<script>
import SideBar from '@/components/About/SideBar.vue'
import HashTag from '@/components/About/HashTag.vue'
export default {
  name: 'AboutView',
  components: {
    SideBar,
    HashTag
  }
}
</script>
