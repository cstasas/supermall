<template>
  <div class="category_title">
    <div v-for="(item, index) in categoryTitle" :key="index"
         class="category_text" :class="{'active': index === toggle}" @click="tabClick(index)">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategoryGoodsTitle",
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
      }
    }
  }
</script>

<style scoped>
  .category_title {
    background-color: #f2f2f2;
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
