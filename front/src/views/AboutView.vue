<template>
  <div class="about">
    <SideBar />
    <HashTag />
    <FileList />
  </div>
</template>
<script>
import SideBar from '@/components/About/SideBar.vue'
import HashTag from '@/components/About/HashTag.vue'
import FileList from '@/components/About/FileList.vue'
export default {
  name: 'AboutView',
  components: {
    SideBar,
    HashTag,
    FileList
  }
}
</script>
