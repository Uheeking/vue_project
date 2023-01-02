<template>
  <div class="about">
    <SideBar />
    <HashTag />
    <NewOne />
    <!-- <FileUpload /> -->
  </div>
</template>
<script>
import SideBar from '@/components/About/SideBar.vue'
import HashTag from '@/components/About/HashTag.vue'
import NewOne from '@/components/About/NewOne.vue'
export default {
  name: 'AboutView',
  components: {
    SideBar,
    HashTag,
    NewOne
  }
}
</script>
