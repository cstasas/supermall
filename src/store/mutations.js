export default {
  addCount(state, payload) {
    payload.count++
  },
  addCartList(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
