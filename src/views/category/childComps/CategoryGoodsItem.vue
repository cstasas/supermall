<template>
  <div class="category_item">
      <div v-for="(item, index) in categoryData" :key="index"
           class="category_item_box">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
          <span>{{item.title}}</span>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryGoodsItem",
    props: {
      categoryData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .category_item {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .category_item_box {
    width: 33%;
    text-align: center;
    margin-bottom: 10px;
  }
  .category_item_box img {
    width: 100%;
  }
  .category_item_box span {
  }
</style>
