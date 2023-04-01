export function formatPrice(price: any) {
  return new Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}
export const settingsDefault = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
}

export function Debounce(callback: any, wait: number) {
  let timeoutId: any
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(callback, wait)
  }
}

export const STATIC_HOST = 'https://api.ezfrontend.com'
export const THUMBNAIL_PLACEHOLDER = 'https://via.placeholder.com/150'
