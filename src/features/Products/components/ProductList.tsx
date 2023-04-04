import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '@/utils'
import Box from '@mui/material/Box'
import ClassNames from 'classnames/bind'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProductList.module.scss'

import productApi from '@/api/productApi'
import { AddtoCart } from '@/features/Cart/cartSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useDispatch } from 'react-redux'
const cx = ClassNames.bind(styles)

export interface ProductListProps {
  data: any
  type?: string
  page?: any
}

export function ProductList({ data, type, page }: ProductListProps) {
  const [product, setproduct]: any = React.useState()
  const [indeximg, setIndexImg]: any = React.useState()

  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleClick = (event: any, item: any, indexImage: any) => {
    // tìm cha của event dang click
    const ParentElementClick = event.target.parentNode
    let classList: any = ParentElementClick?.getAttribute('class')

    if (
      classList.includes('addtocart') ||
      classList.includes('iconsvg') ||
      classList.includes('icon')
    ) {
      ;(async () => {
        try {
          const result = await productApi.get(item.id)
          setproduct(result)
          setIndexImg(indexImage)
        } catch (error) {
          console.log('fail to fetch product', error)
        }
      })()
      return
    } else navigate(`/products/${item.id}/${type}-${page}-${indexImage}.jpg`)
    // } else navigate(`/products/${item.id}`)
  }

  const handleClickAdd = (event: any, item: any, indexImage: any) => {
    try {
      const action = AddtoCart({
        id: item.id,
        product: item,
        quantity: 1,
        indexImage: `${type}-${page}-${indexImage}.jpg`,
      })
      dispath(action)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className={cx('productlist')}>
        {data.map((item: any, index: any) => (
          <div key={item.id}>
            <Box className={cx('item')}>
              {type ? (
                <img
                  onClick={() => handleClick(event, item, index + 1)}
                  alt={'image'}
                  src={`./images/${type}-${page}-${index + 1}.jpg`}
                ></img>
              ) : (
                <Box
                  onClick={() => handleClick(event, item, index + 1)}
                  sx={{ width: '100%', height: '100%' }}
                >
                  {item.thumbnail ? (
                    <img alt={index} src={`${STATIC_HOST}${item.thumbnail?.url}`}></img>
                  ) : (
                    <img alt={index} src={THUMBNAIL_PLACEHOLDER}></img>
                  )}
                </Box>
              )}

              <Box className="addtocart" onClick={() => handleClickAdd(event, item, index + 1)}>
                <Box className="icon-text">Add to cart</Box>
                <Box className="icon">
                  <ShoppingCartIcon className="iconsvg" />
                </Box>
              </Box>

              {/* {item.thumbnail ? (
                // <img alt={index} src={`${STATIC_HOST}${item.thumbnail?.url}`}></img>
                <img alt={'image'} src={`src/assets/${type}-${index + 1}`}></img>
              ) : (
                <img alt={index} src={THUMBNAIL_PLACEHOLDER}></img>
              )} */}
            </Box>
            <div className={cx('information')}>
              <div className={cx('title')}>{item.name}</div>
              <Box component="span" className={cx('price')}>
                {new Intl.NumberFormat('vn-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(item.salePrice)}
                ;{item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}
              </Box>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
