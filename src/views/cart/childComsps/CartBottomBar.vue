<template>
  <div class="cart_bar">
    <div class="cart_bar_selectAll">
      <check-box class="check_box"
                 @click.native="checkClick" :is-checked="isCheckedAll"/>
      <span>全选</span>
    </div>
    <div class="cart_bar_totalPrice">
      <div>合计:￥{{totalCost}}</div>
    </div>
    <div class="cart_bar_calculate" @click="payClick">
      <div>去计算({{checkedLength}})</div>
    </div>
  </div>
</template>

<script>
  import CheckBox from "components/common/checkbox/CheckBox";

  import { mapGetters } from 'vuex'
  import { Toast } from 'mint-ui';

  export default {
    name: "CartBottomBar",
    components: {
      CheckBox
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList']),
      checkedLength() {
        return this.cartList.filter(item => item.checked).length
      },
      totalCost() {
        return this.cartList.filter(item => item.checked).reduce((preValue, item) => {
          return preValue + item.lowNowPrice * item.count
        }, 0).toFixed(2)
      },
      isCheckedAll() {
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
        // return !(this.cartList.filter(item => !item.checked).length)
      }
    },
    methods: {
      checkClick() {
        if (this.isCheckedAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)

        }
      },
      payClick() {
        if (!this.isCheckedAll) {
          Toast({
            message: '请选择一件商品在结算',
            iconClass: 'icon icon-success'
          });
        }
      }
    }
  }
</script>

<style scoped>
  .cart_bar {
    background-color: #f2f2f2;
    height: 40px;
    display: flex;
  }
  .cart_bar_selectAll {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check_box {
    width: 25px;
    height: 25px;
    border: 2px solid #ccc;
  }
  .cart_bar_selectAll span {
    margin-left: 5px;
  }
  .cart_bar_totalPrice {
    flex: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: red;
  }
  .cart_bar_calculate {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
  }
</style>
