<template>
  <div class="detail_shop" v-if="Object.keys(goodsShop).length !== 0">
    <div class="detail_shop_logo">
      <a :href="goodsShop.shopUrl">
        <img :src="goodsShop.shopLogo" alt="">
      </a>
      <span>{{goodsShop.name}}</span>
    </div>
    <div class="detail_shop_item">
      <div class="detail_shop_item_left">
        <div class="detail_shop_item_left_l">
          <span class="detail_shop_item_right_common detail_shop_num">{{goodsShop.cSells | salesFilter}}</span>
          <span>总销量</span>
        </div>
        <div class="detail_shop_item_left_r">
          <span class="detail_shop_item_right_common detail_shop_num">{{goodsShop.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="detail_shop_item_right">
        <div class="detail_shop_item_right_common">
          <span>{{goodsShop.score[0].name}}</span>
          <span :class="!goodsShop.score[0].isBetter ? 'detail_shop_green' : 'detail_shop_red'">{{goodsShop.score[0].score}}</span>
          <span class="detail_shop_bgc detail_shop_green_bgc" v-if="goodsShop.score[0].isBetter == false">低</span>
          <span class="detail_shop_bgc detail_shop_red_bgc" v-else>高</span>
        </div>
        <div class="detail_shop_item_right_common">
          <span>{{goodsShop.score[1].name}}</span>
          <span class="detail_shop_five" :class="goodsShop.score[1].isBetter ? 'detail_shop_red' : 'detail_shop_green'">{{goodsShop.score[1].score}}</span>
          <span class="detail_shop_bgc detail_shop_red_bgc" v-if="goodsShop.score[1].isBetter == true">高</span>
          <span class="detail_shop_bgc detail_shop_green_bgc" v-else>低</span>
        </div>
        <div class="detail_shop_item_right_common">
          <span>{{goodsShop.score[2].name}}</span>
          <span :class="!goodsShop.score[2].isBetter ? 'detail_shop_green' : 'detail_shop_red'">{{goodsShop.score[2].score}}</span>
          <span class="detail_shop_bgc detail_shop_green_bgc" v-if="goodsShop.score[2].isBetter == false">低</span>
          <span class="detail_shop_bgc detail_shop_red_bgc" v-else>高</span>
        </div>
      </div>
    </div>
    <div class="detail_shop_go">
      <a :href="goodsShop.shopUrl">
        <span>进店逛逛</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      goodsShop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      salesFilter(value) {
        let result = value
        if (value > 10000) {
          result = (result / 10000).toFixed(1) + '万'
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .detail_shop {
    padding: 20px 10px;
    border-bottom: 3px solid #f2f2f2;
  }
  .detail_shop_logo {
    display: flex;
    align-items: center;
  }
  .detail_shop_logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    padding: 3px;
  }
  .detail_shop_logo span {
    margin-left: 10px;
  }
  .detail_shop_item {
    display: flex;
    padding: 15px 0;
    font-size: 12px;
    color: black;
  }
  .detail_shop_item_left {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .detail_shop_item_left_l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detail_shop_item_left_r {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    padding-right: 20px;
  }
  .detail_shop_item_right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .detail_shop_item_right_common {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .detail_shop_num {
    font-size: 16px;
    font-weight: 600;
  }
  .detail_shop_green {
    color: green;
  }
  .detail_shop_green_bgc {
    background-color: green;
  }
  .detail_shop_red {
    color: red;
  }
  .detail_shop_red_bgc {
    background-color: red;
  }
  .detail_shop_bgc {
    color: white;
  }
  .detail_shop_go {
    text-align: center;
    font-size: 14px;
  }
  .detail_shop_go span {
    background-color: #ccc;
    padding: 5px 30px;
    border-radius: 10px;
  }
  .detail_shop_five {
    padding-right: 17px;
  }
</style>
