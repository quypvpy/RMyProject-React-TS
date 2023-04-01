// export function SmoothHorizontal(e: any, time: any, amount: any, start: any) {
//   var eAmt = amount / 100
//   var curTime = 0
//   var scrollCounter = 0
//   const y = window.scrollY
//   while (curTime < time) {
//     window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start, y)
//     curTime += time / 100
//     scrollCounter++
//   }
//   window.scrollTo(0, y)
// }
// function SHS_B(e: any, sc: any, eAmt: any, start: any, y: any) {
//   e.scrollLeft = eAmt * sc + start
// }
export * from './common'
