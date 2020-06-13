<template>
  <div class="goods_params" v-if="Object.keys(goodsParams).length !== 0">
    <table class="goods_params_table" v-for="(item, index) in goodsParams.tables[0]" :key="index">
      <tr class="goods_params_table_tr">
        <td class="goods_params_table_tr_td" v-for="(item1, index1) in item" :key="index1">{{item1}}</td>
      </tr>
    </table>

    <table class="goods_params_table">
      <tr class="goods_params_table_tr" v-for="(item, index) in goodsParams.set" :key="index">
        <td class="goods_params_table_key">{{item.key}}</td>
        <td class="goods_params_table_val">{{item.value}}</td>
      </tr>
    </table>

    <div class="goods_params_img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsParams",
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods_params {
    padding: 25px 15px;
    font-size: 14px;
    border-top: 3px solid #f2f5f8;
  }
  .goods_params_table {
    width: 100%;
    border-collapse: collapse;
  }
  .goods_params_table_tr {
    padding: 15px 0;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-around;
  }
  .goods_params_table_tr_td {
    flex: 1;
  }
  .goods_params_table_key {
    flex: 1;
  }
  .goods_params_table_val {
    flex: 4;
    color: var(--color-high-text);
  }
  .goods_params_img {
    width: 100%;
  }
  .goods_params_img img {
    width: 100%;
  }
</style>
