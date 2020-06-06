<template>
  <div>
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swipeImgLoad">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "HomeSwipe",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isImgLoad: false
      }
    },
    methods: {
      swipeImgLoad() {
        if (!this.isImgLoad) {
          this.$emit('swipeImgLoad')
          this.isImgLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .swipe {
    width: 100%;
    height: 195px;
  }
  .swipe, img {
    width: 100%;
  }
</style>
