<template>
  <div class="goodsListItem">
      <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" alt="" @load="imageLoad">
      </a>
      <div class="goodsListItem_text">
        <p>{{goodsItem.title}}</p>
        <span class="goodsItem_price">￥{{goodsItem.price}}</span>
        <span class="iconfont icon-tubiao114">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .goodsListItem {
    width: 48%;
    margin-bottom: 5px;
  }

  .goodsListItem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsListItem_text, span {
    text-align: center;
    font-size: 14px;
  }

  .goodsListItem_text p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goodsItem_price {
    color: var(--color-tint);
    padding-right: 5px;
  }
</style>
