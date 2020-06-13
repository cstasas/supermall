import {request} from './request'

export function detailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function goodsRecommend() {
  return request({
    url: '/recommend'
  })
}

export function categoryList() {
  return request({
    url: '/category'
  })
}

export class Goods{
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.sales = columns[0]
    this.collect = columns[1]
    this.ship = columns[2]
    this.returnOfGoods = shopInfo.services[0]
    this.freeShipping = shopInfo.services[1]
    this.noReason = shopInfo.services[2]
  }
}

export class Shops{
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.name = shopInfo.name
    this.score = shopInfo.score
  }
}

export class Params{
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.set = info.set
    this.tables = rule.tables
  }
}
