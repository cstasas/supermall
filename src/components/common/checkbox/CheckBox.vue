<template>
  <div class="checkbox" :class="{check: isChecked}">
    <img src="~assets/image/tick.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckBox",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .checkbox {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .checkbox img {
    width: 100%;
    height: 100%;
  }
  .check {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }
</style>
