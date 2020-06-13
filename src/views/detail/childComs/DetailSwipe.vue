<template>
  <div class="detail_swipe">
    <mt-swipe :auto="4000" class="detail_swipe_item">
      <mt-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "DetailSwipe",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail_swipe_item {
    width: 100%;
    height: 330px;
  }

  .detail_swipe_item img {
    width: 100%;
  }
</style>
