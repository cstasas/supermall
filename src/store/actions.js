export default {
  addCommodity({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      let oldCommodity = state.cartList.find(item => item.iid === payload.iid)
      if (oldCommodity) {
        commit('addCount', oldCommodity)
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        commit('addCartList', payload)
        resolve('添加新的商品成功')
      }
    })
  }
}
