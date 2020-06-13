<template>
  <div class="bottom_bar">
    <div class="bottom_bar_flex">
      <i class="iconfont icon-kefu1 icon active"></i>
      <span class="text">客服</span>
    </div>
    <div class="bottom_bar_flex">
      <i class="iconfont icon-dianpu icon"></i>
      <span class="text">店铺</span>
    </div>
    <div class="bottom_bar_flex">
      <i class="iconfont icon-shoucang1 icon"></i>
      <span class="text">收藏</span>
    </div>
    <div class="bottom_bar_cart" @click="cartClick">加入购物车</div>
    <div class="bottom_bar_buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick() {
        this.$emit('cartClick')
      }
    }
  }
</script>

<style scoped>
  .bottom_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color: #fff;
    display: flex;
    text-align: center;
    line-height: 49px;
    border-top: 1px solid #f2f2f2;
  }
  .bottom_bar_flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 20px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    flex: 1;
  }
  .text {
    font-size: 14px;
    flex: 1;
    padding-top: 2px;
  }
  .bottom_bar_cart {
    flex: 3;
    background-color: yellow;
    font-size: 18px;
    font-weight: 700;
  }
  .bottom_bar_buy {
    flex: 2;
    background-color: var(--color-high-text);
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }
  .active {
    color: red;
  }
</style>
