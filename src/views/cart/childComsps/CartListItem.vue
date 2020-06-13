<template>
  <div class="cart_item">
    <div class="cart_item_checked">
      <check-box :is-checked="cartInfo.checked" class="check_box" @click.native="checkedClick"/>
    </div>
    <div class="cart_item_image">
      <img :src="cartInfo.image" alt="">
    </div>
    <div class="cart_item_info">
      <span class="cart_item_info_title">{{cartInfo.title}}</span>
      <span class="cart_item_info_text">{{cartInfo.desc}}</span>
      <div class="cart_item_info_price">
        <span class="cart_item_info_l">￥{{cartInfo.lowNowPrice}}</span>
        <span class="cart_item_info_r">X{{cartInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckBox from "components/common/checkbox/CheckBox";

  export default {
    name: "CartListItem",
    components: {
      CheckBox
    },
    props: {
      cartInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkedClick() {
        this.cartInfo.checked = !this.cartInfo.checked
      }
    }
  }
</script>

<style scoped>
  .cart_item {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .cart_item_checked {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check_box {
    border: 2px solid #ccc;
  }
  .cart_item_image {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100px;
  }
  .cart_item_image img {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .cart_item_info {
    flex: 6;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart_item_info_title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    font-weight: 600;
  }
  .cart_item_info_text {
    font-size: 14px;
    color: #999;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    font-weight: 600;
  }
  .cart_item_info_price {
    display: flex;
    justify-content: space-between;
  }
  .cart_item_info_l {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-tint);
  }
</style>
