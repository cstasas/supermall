<template>
  <div class="back_top">
    <img class="back_top_img" src="~assets/image/back-top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back_top {
    position: fixed;
    right: 10px;
    bottom: 65px;
    z-index: 9;
  }

  .back_top_img {
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 50%;
  }
</style>
