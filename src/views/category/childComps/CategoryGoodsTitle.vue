<template>
  <div class="category_title">
    <scroll class="content">
      <div v-for="(item, index) in categoryTitle" :key="index"
           class="category_text" :class="{'active': index === toggle}"
           @click="tabClick(index)">{{item.title}}</div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CategoryGoodsTitle",
    components: {
      Scroll
    },
    props: {
      categoryTitle: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        toggle: 0
      }
    },
    methods: {
      tabClick(index) {
        this.toggle = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .category_title {
    height: 100vh;
    background-color: #f2f2f2;
  }
  .content {
    height: calc(100% - 45px - 49px);
  }
  .category_text {
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .active {
    border-left: 2px solid red;
    background-color: #fff;
    color: red;
  }
</style>
