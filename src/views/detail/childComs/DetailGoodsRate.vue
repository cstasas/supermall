<template>
  <div>
    <div class="goods_rate"
         v-for="(item, index) in goodsRate" :key="index"
         v-if="Object.keys(goodsRate).length !== 0">
      <div class="goods_rate_title">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="goods_rate_top">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="goods_rate_center">{{item.content}}</div>
      <div class="goods_rate_bottom">
        <span>{{item.created | timeProcessor}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="goods_rate_thumbnail">
        <div class="goods_rate_thumbnail_img" v-for="(item1, index1) in item.images" :key="index1">
          <img :src="item1" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/date'

  export default {
    name: "DetailGoodsRate",
    props: {
      goodsRate: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      timeProcessor(value) {
        const date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .goods_rate {
    font-size: 14px;
    padding: 20px 15px;
  }
  .goods_rate_title {
    display: flex;
    justify-content: space-between;
    color: black;
    padding-bottom: 20px;
    border-bottom: 3px solid #f2f2f2;
  }
  .goods_rate_top {
    display: flex;
    align-items: center;
    padding: 15px 0;
  }
  .goods_rate_top img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 3px;
    border: 1px solid #f2f2f2;
  }
  .goods_rate_top span {
    margin-left: 15px;
    font-size: 16px;
    color: black;
  }
  .goods_rate_center {
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .goods_rate_bottom {
    color: #bfbcbc;
    padding-bottom: 10px;
  }
  .goods_rate_thumbnail {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 3px solid #f2f2f2;
  }
  .goods_rate_thumbnail_img {
    width: 75px;
    height: 75px;
    margin-right: 15px;
  }
  .goods_rate_thumbnail_img img {
    width: 100%;
    height: 100%;
  }
</style>
