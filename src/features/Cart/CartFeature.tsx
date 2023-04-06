import { Box, Container, OutlinedInput, Paper, styled, TextField, Typography } from '@mui/material'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItemCountSelector, cartTotalSelector, ProductListSelector } from './selector'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { formatPrice } from '@/utils'

import ClassNames from 'classnames/bind'
import styles from './cartFeature.module.scss'
import { SetQuantity } from './cartSlice'
import { MainLayout } from '@/components/Layout'

const cx = ClassNames.bind(styles)

export interface CartFeatureProps {}

const MyOutlinedInput = styled(OutlinedInput)({
  marginLeft: '0',
  marginRight: '10px',
  height: '35px',
  padding: 'unset',
  fontSize: ['18px'].join(','),

  '& input': {
    width: '20px',
    // height: '16px',
    color: 'black',
    backgroundColor: 'white',
  },
})

export function CartFeature(props: CartFeatureProps) {
  const cartItemCount: any = useSelector(cartItemCountSelector)
  const cartProductList = useSelector(ProductListSelector)
  const cartTotal = useSelector(cartTotalSelector)
  const dispath = useDispatch()
  console.log('cảpeorudtc', cartProductList)

  const handleAddClick = (id: any, value: any) => {
    const action = SetQuantity({
      id: id,
      quantity: value + 1,
    })
    dispath(action)
    // }
  }
  const handleRemoveClick = (id: any) => {
    const index = cartProductList.findIndex((x: any) => x.id === id)
    if (index >= 0) {
      // neeuw bằng 1 thì ta k cho set giảm nữa.. mà chỉ có xóa đi
      if (cartProductList[index].quantity === 1) return
      const newQuanity = cartProductList[index].quantity - 1
      const action = SetQuantity({
        id: id,
        quantity: newQuanity,
      })
      dispath(action)
    }
  }

  return (
    <div>
      {cartItemCount < 1 ? (
        <MainLayout>
          <Box className={cx('note')}>Giỏ hàng của bạn không có sản phẩm nào !...</Box>
        </MainLayout>
      ) : (
        <MainLayout>
          <Box className={cx('cart')}>
            <span>Tổng Sản Phẩm : </span>
            <Box component={'span'} sx={{ padding: '10px' }}>
              {cartItemCount}
            </Box>
          </Box>
          <Paper className={cx('paper')}>
            <Container className={cx('wrapper')} sx={{ display: 'flex' }} maxWidth={'xl'}>
              <Box className={cx('left')}>
                <div className={cx('title')}>
                  <Box component={'span'}>Product</Box>
                  <Box component={'span'} sx={{ width: '40%' }}>
                    Price
                  </Box>
                  <Box component={'span'}>Quantity</Box>
                  <Box className={cx('title-subtotal')} component={'span'}>
                    Subtotal
                  </Box>
                </div>
                {cartProductList.map((product: any) => (
                  <Box key={product.id} className={cx('product-item')}>
                    <div className={cx('image')}>
                      <img
                        width={'100%'}
                        height={'100%'}
                        src={`./images/${product.indexImage}`}
                      ></img>
                    </div>

                    <Box className={cx('column')}>
                      <Box component={'span'} className={cx('name')}>
                        {product.product.name}
                      </Box>
                      <Box component={'span'} sx={{ fontWeight: 'bold', marginTop: '6px' }}>
                        <span className={cx('price-respontive')}>
                          {product.quantity}
                          <Box component={'span'} sx={{ fontSize: '10px', margin: '0 3px' }}>
                            ☓
                          </Box>
                        </span>
                        {formatPrice(product.product.salePrice)}
                      </Box>
                    </Box>

                    <MyOutlinedInput
                      className={cx('quantity')}
                      type={'text'}
                      value={product.quantity}
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton onClick={() => handleRemoveClick(product.id)}>
                            {product.quantity < 2 ? (
                              <RemoveIcon
                                sx={{ fontSize: '20px', cursor: 'not-allowed' }}
                              ></RemoveIcon>
                            ) : (
                              <RemoveIcon
                                sx={{ fontSize: '20px', color: 'var(--color-primary)' }}
                              ></RemoveIcon>
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={() => handleAddClick(product.id, product.quantity)}>
                            <AddIcon
                              sx={{ color: 'var(--color-primary)', fontSize: '20px' }}
                            ></AddIcon>
                          </IconButton>
                        </InputAdornment>
                      }
                    />

                    <Box component={'span'} className={cx('subquantity')}>
                      {/* {formatPrice(product.product.salePrice * cartItemCount)} */}
                      {formatPrice(product.product.salePrice * product.quantity)}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className={cx('right')}>
                <Box className={cx('information')}>
                  <div>
                    <span className={cx('title')}> Địa chỉ nhận hàng</span>
                  </div>
                  <div>
                    <Box
                      component={'span'}
                      sx={{ marginRight: '20px', marginBottom: '10px', display: 'inline-block' }}
                    >
                      Pham Van Quy
                    </Box>
                    <Box component={'span'} sx={{ display: 'flex' }}>
                      SDT: 0397975733
                    </Box>
                  </div>
                  <div className={cx('address')}>135/40 Đình Phong Phú Thành Phố THủ ĐỨc</div>
                  <span className={cx('total')}>Tổng Hóa Đơn: </span>
                  <span className={cx('bill')}>{formatPrice(cartTotal)}</span>
                </Box>
              </Box>
            </Container>
          </Paper>
        </MainLayout>
      )}
    </div>
  )
}
