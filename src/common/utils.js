// 防抖功能
export function debounce(fun, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}

// 处理时间过滤器
// export function dateFormat(date) {
//   const dt = new Date(date * 1000)
//
//   const y = dt.getFullYear()
//   const m = (dt.getMonth() + 1 + '').padStart(2, '0')
//   const d = (dt.getDate() + '').padStart(2, '0')
//
//   return `${y}-${m}-${d}`
// }
