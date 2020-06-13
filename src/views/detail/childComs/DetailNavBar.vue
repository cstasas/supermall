<template>
  <nav-bar class="detail_navbar">
    <div slot="nav_bar_left" class="detail_navbar_img" @click="backClick">
      <img src="~assets/image/back.png" alt="">
    </div>
    <div slot="nav_bar_center" class="detail_navbar_title">
      <div v-for="(item, index) in title" :key="index"
           :class="{active: index === currentIndex}" @click="itemClick(index)">
        {{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('navBarClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail_navbar {
    font-size: 14px;
  }

  .detail_navbar_img {
    margin-top: 3px;
  }

  .detail_navbar_img img {
    width: 65%;
    height: 65%;
  }

  .detail_navbar_title {
    display: flex;
  }

  .detail_navbar_title div {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
