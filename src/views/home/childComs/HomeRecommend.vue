<template>
  <div class="recommend_box">
    <div class="recommend_item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend_box {
    width: 100%;
    display: flex;
    font-size: 14px;
    padding: 5px 0 40px 0;
    border-bottom: 8px solid #eee;
    text-align: center;
  }

  .recommend_item {
    flex: 1;
  }

  .recommend_item a img {
    width: 70px;
    height: 70px;
  }

  .recommend_item a p {
    margin-top: 3px;
  }
</style>
