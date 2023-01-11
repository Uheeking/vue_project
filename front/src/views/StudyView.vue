<template>
  <div style="padding: 0 40px;">
    <TitleView />
    <NoticeView />
    <MasonryView />
  </div>
</template>

<script>
import TitleView from '@/components/Study/TitleView.vue'
import NoticeView from '@/components/Study/NoticeView.vue'
import MasonryView from '@/components/Study/MasonryView.vue'
export default {
  components: {
    TitleView,
    NoticeView,
    MasonryView
  }
}
</script>

<style scoped></style>
