<template>
  <div class="goods_info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="goods_info_title">
      <div class="goods_info_title_line_l"></div>
      <div class="goods_info_title_text">{{goodsInfo.desc}}</div>
      <div class="goods_info_title_line_r"></div>
    </div>
    <div class="goods_info_content" v-for="(item, index) in goodsInfo.detailImage" :key="index">
      <div class="goods_info_content_text">{{item.key}}</div>
      <div class="goods_info_content_img" v-for="(item1, index1) in item.list" :key="index1">
        <img :src="item1" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        count: 0,
        imgLength: 0
      }
    },
    methods: {
      imgLoad() {
        if (++this.count === this.imgLength) {
          this.$emit('goodsImgClick')
        }
      }
    },
    watch: {
      goodsInfo() {
        this.imgLength = this.goodsInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods_info {}
  .goods_info_title {
    padding: 15px;
    position: relative;
  }
  .goods_info_title_text {
    padding: 15px 0;
    font-size: 14px;
  }
  .goods_info_title_line_l {
    position: absolute;
    width: 150px;
    height: 2px;
    background-color: #ccc;
    left: 15px;
  }
  .goods_info_title_line_l::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    bottom: 0;
  }
  .goods_info_title_line_r {
    position: absolute;
    width: 150px;
    height: 2px;
    background-color: #ccc;
    right: 15px;
  }
  .goods_info_title_line_r::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    bottom: 0;
    right: 0px;
  }
  .goods_info_content_text {
    font-size: 15px;
    font-weight: 600;
    padding: 15px;
    color: black;
  }
  .goods_info_content_img {
    width: 100%;
  }
  .goods_info_content_img img {
    width: 100%;
  }
</style>
