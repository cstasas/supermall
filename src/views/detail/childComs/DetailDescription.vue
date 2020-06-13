<template>
  <div class="detail_description" v-if="Object.keys(goods).length !== 0">
    <div class="detail_title">{{goods.title}}</div>
    <div class="detail_price">
      <div class="detail_price_new">{{goods.price}}</div>
      <div class="detail_price_old">{{goods.oldPrice}}</div>
      <div class="detail_price_today">{{goods.discountDesc}}</div>
    </div>
    <div class="detail_sales">
      <div class="detail_sales_common detail_sales_left">{{goods.sales}}</div>
      <div class="detail_sales_common detail_sales_center">{{goods.collect}}</div>
      <div class="detail_sales_common detail_sales_right">{{goods.ship}}</div>
    </div>
    <div class="detail_logistics">
      <div class="detail_logistics_common detail_logistics_left">
        <img src="~assets/image/checkmark.png" alt="">
        <span>{{goods.noReason.name}}</span>
      </div>
      <div class="detail_logistics_common detail_logistics_center">
        <img src="~assets/image/checkmark.png" alt="">
        <span>{{goods.freeShipping.name}}</span>
      </div>
      <div class="detail_logistics_common detail_logistics_right">
        <img src="~assets/image/checkmark.png" alt="">
        <span>{{goods.returnOfGoods.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailDescription",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail_description {
    padding: 15px 10px;
    border-bottom: 2px solid #f2f2f2;
  }
  .detail_title {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .detail_price {
    display: flex;
    padding-bottom: 10px;
  }
  .detail_price_new {
    font-size: 20px;
    color: var(--color-high-text);
  }
  .detail_price_old {
    font-size: 13px;
    padding: 0 7px;
    margin-top: 5px;
    text-decoration: line-through;
    color: #999;
  }
  .detail_price_today {
    font-size: 12px;
    padding: 5px;
    background-color: var(--color-high-text);
    border-radius: 5px;
    color: #fff;
  }
  .detail_sales {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 10px;
    margin-top: 10px;
    text-align: center;
  }
  .detail_sales_common {
    flex: 1;
  }
  .detail_sales_left {
    text-align: left;
  }
  .detail_sales_right {
    text-align: right;
  }
  .detail_logistics {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #666;
    text-align: center;
    margin-top: 15px;
  }
  .detail_logistics_common {
    flex: 1;
  }
  .detail_logistics_common img {
    width: 15px;
    height: 15px;
  }
  .detail_logistics_left {
    text-align: left;
  }
  .detail_logistics_right {
    text-align: right;
  }
</style>
