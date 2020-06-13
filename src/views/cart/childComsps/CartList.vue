<template>
  <div class="cart_list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :cart-info="item"/>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
