<template>
  <div>
    <TitleView />
    <NoticeView />
    <MasonryView />
  </div>
</template>

<script>
import TitleView from '@/components/Diary/TitleView.vue'
import NoticeView from '@/components/Diary/NoticeView.vue'
import MasonryView from '@/components/Diary/MasonryView.vue'
export default {
  components: {
    TitleView,
    NoticeView,
    MasonryView
  }
}
</script>

<style scoped></style>
