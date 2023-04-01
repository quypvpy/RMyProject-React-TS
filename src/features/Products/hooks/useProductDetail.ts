import productApi from '@/api/productApi'
import * as React from 'react'
export default function useProductDetail(productId: any) {
  const [product, setproduct] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const result = await productApi.get(productId)
        setproduct(result)
      } catch (error) {
        console.log('fail to fetch product', error)
      }

      setLoading(false)
    })()
  }, [productId])

  return { product, loading }
}
