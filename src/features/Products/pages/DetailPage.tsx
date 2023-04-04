import { MainLayout } from '@/components/Layout'
import { AddtoCart } from '@/features/Cart/cartSlice'
import { Box, Container, Grid } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

import { styled } from '@mui/material/styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
  AddToCardForm,
  ProductAddination,
  ProductDescription,
  ProductInfo,
  ProductMenu,
  ProductReviews,
} from '../components'

import useProductDetail from '../hooks/useProductDetail'

import { SnackBar } from '@/components/common'
import ClassNames from 'classnames/bind'
import styles from './ListPage.module.scss'

const cx = ClassNames.bind(styles)

export interface DetailPageProps {}

const MyPapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

export function DetailPage(props: DetailPageProps) {
  const location = useLocation()
  console.log('location', location)
  // để state để nó chỉ chạy 1 lần thôii

  const dispath = useDispatch()
  const [paramsURL, setParamURL] = React.useState(window.location.pathname.split('/'))

  const [openSnackBar, setOpenSnackBar] = React.useState(false)

  // useProductDetail

  const indexImage: any = paramsURL[3]
  const productId = paramsURL[2]

  const { product, loading }: any = useProductDetail(productId)

  if (loading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }

  const handleAddToCartSubmit = (formValues: any) => {
    // payload laf tham số
    // formValue hieenj taij là object

    try {
      const action = AddtoCart({
        id: product.id,
        product,
        quantity: formValues.quantity,
        indexImage: indexImage,
      })
      dispath(action)
      setOpenSnackBar(true)
    } catch (error) {
      console.log(error)
    }
  }
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false)
  }

  return (
    <Box>
      <MainLayout>
        <div>
          <Box
            className={cx('detailPage')}
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              mt: '155px',
            }}
          >
            <Container className={cx('container')}>
              <MyPapper sx={{ color: 'var(--color-primary)' }}>
                <Grid className={cx('grid')} container gap={8}>
                  <Grid item sx={{ width: '500px' }}>
                    <Box className={cx('image')}>
                      {/* <img src={`/src/assets/${indexImage}`}></img> */}
                      <img src={`/images/${indexImage}`}></img>
                    </Box>
                  </Grid>
                  <Grid item sx={{ flex: '1 1 0' }}>
                    <ProductInfo productId={product}></ProductInfo>
                    <AddToCardForm onSubmit={handleAddToCartSubmit}></AddToCardForm>
                    <Box sx={{ fontSize: '20px', margin: '20px 0' }}>
                      {product.shortDescription}
                    </Box>
                  </Grid>
                </Grid>
              </MyPapper>
            </Container>
          </Box>

          {/* ..........MenuLink */}
          <ProductMenu productId={productId} indexImage={indexImage}></ProductMenu>

          <Routes>
            <Route path="/:id/*" element={<ProductDescription product={product} />}></Route>
            <Route path="/:id/addination" element={<ProductAddination />} />
            <Route path="/:id/reviews" element={<ProductReviews />} />
          </Routes>
          {/* ..............LightBox ...............*/}
          {/* <LightBox
              listItem={listItem}
              currentIndex={currentIndex}
              onClose={handleClose}
              isShow={open}
            ></LightBox> */}

          {/* snackbar */}
          <SnackBar isOpen={openSnackBar} onClose={handleCloseSnackBar}></SnackBar>
        </div>
      </MainLayout>
    </Box>
  )
}
