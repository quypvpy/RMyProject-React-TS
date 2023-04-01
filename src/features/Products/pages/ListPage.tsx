import productApi from '@/api/productApi'
import { MainLayout } from '@/components/Layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { FilterByCategory, FilterViewer } from '../components/Filters'
import Pagination from '@mui/material/Pagination'
import ClassNames from 'classnames/bind'
import styles from './ListPage.module.scss'
import Stack from '@mui/material/Stack'
import { ProductFilters, ProductList, ProductSort } from '../components'

import { useNavigate, useMatches, useLocation } from 'react-router-dom'
// import { createBrowserHistory } from 'history';
import queryString from 'query-string'
import { URLSearchParams } from 'url'

const cx = ClassNames.bind(styles)

export interface ListPageProps {}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}))
const listItem = [
  'https://plus.unsplash.com/premium_photo-1669752000456-dd35381ca44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://plus.unsplash.com/premium_photo-1669752000456-dd35381ca44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80',
  'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
]
export function ListPage(props: ListPageProps) {
  const [productList, setProductList]: any = React.useState([])
  const [pagination, setPagination]: any = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [URL, setURL] = React.useState()

  // const history = useNavigate()
  // const macths = useMatches()
  const mylocation: any = useLocation()
  const his: any = useNavigate()

  // console.log('sear', window.location.search)

  let params: any = queryString.parse(window.location.search)
  const [queryParams, setQueryParams] = React.useState(() => ({
    ...params,

    _page: Number.parseInt(params._page) || 1,
    _limit: Number.parseInt(params._limit) || 6,
    _sort: params._sort || 'salePrice:ASC',
    isFreeShip: params.isFreeShip === 'true',
    isPromotion: params.isPromotion === 'true',
  }))

  // để chuyển object queryparam về đúng chuẩn
  // React.useEffect(() => {
  //   setQueryParams(() => ({
  //     ...params,
  //     _page: Number.parseInt(params._page) || 1,
  //     _limit: Number.parseInt(params._limit) || 6,
  //     _sort: params._sort || 'salePrice:ASC',
  //     isFreeShip: params.isFreeShip === 'true',
  //     isPromotion: params.isPromotion === 'true',
  //   }))
  // }, [window.location.search])

  const handlePageChange = (e: any, page: any) => {
    // giữ lại tất cả fiter trước đó.
    // setFilters((prevFilters: any) => ({
    //   ...prevFilters,
    //   _page: page,
    // }))

    const filters = {
      ...queryParams,
      _page: page,
    }
    history.pushState({}, '', mylocation.pathname + '?' + queryString.stringify(filters))
    const paramsURL: any = queryString.parse(window.location.search)
    setQueryParams(() => ({
      ...paramsURL,
      isFreeShip: params.isFreeShip === 'true',
      isPromotion: params.isPromotion === 'true',
    }))
  }

  const handleSortChange = (newsort: any) => {
    // giữ lại tất cả fiter trước đó.
    // setFilters((prevFilters: any) => ({
    //   ...prevFilters,
    //   _sort: newsort,
    // }))

    const filters = {
      ...queryParams,
      _sort: newsort,
    }
    history.pushState({}, '', mylocation.pathname + '?' + queryString.stringify(filters))
    const paramsURL: any = queryString.parse(window.location.search)
    setQueryParams(() => ({
      ...paramsURL,
      isFreeShip: paramsURL.isFreeShip === 'true',
      isPromotion: paramsURL.isPromotion === 'true',
    }))
  }

  const handleFiltersChange = (newFilter: any) => {
    // giữ lại tất cả fiter trước đó.
    // nhuwngx filtẻ hiện tại kết hợp với filter mới.
    // setFilters((prevFilters: any) => ({
    //   ...prevFilters,
    //   ...newFilter,
    // }))

    const filters = {
      ...queryParams,
      ...newFilter,
    }
    history.pushState({}, '', mylocation.pathname + '?' + queryString.stringify(filters))

    const paramsURL: any = queryString.parse(window.location.search)

    setQueryParams(() => ({
      // bởi vì khi parse thì nó sẽ thành chuôi true.. nên khi truyên xuống.. dữ liuej bị sai.
      // nên ta cập nhật laikj.
      ...paramsURL,
      isFreeShip: paramsURL.isFreeShip === 'true',
      isPromotion: paramsURL.isPromotion === 'true',
    }))
  }

  const setNewFilter = (newFilters: any) => {
    // setFilters(newFilters)
    history.pushState({}, '', mylocation.pathname + '?' + queryString.stringify(newFilters))
    const paramsURL: any = queryString.parse(window.location.search)
    setQueryParams(() => ({
      ...paramsURL,
      isFreeShip: paramsURL.isFreeShip === 'true',
      isPromotion: paramsURL.isPromotion === 'true',
    }))
  }

  const handleClickAll = () => {
    const rootParams = {
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 6,
      _sort: params._sort || 'salePrice:ASC',
      isFreeShip: false,
      isPromotion: false,
    }
    history.pushState({}, '', queryString.stringify(rootParams))
    setQueryParams({
      ...rootParams,
    })
  }

  // phải nhớ là pagination thay đổi..nó mơi cập nhật đc.
  // nó mới rerender đcược.

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data, pagination }: any = await productApi.getAll(queryParams)

        setProductList(data)
        setPagination(pagination)

        // Kiểm tra nếu total hiện tại bé hơn số page ở url thì ra reset về 1
        // và nếu tìm k có trang nào. thì k gán j hết
        const totalPage: any = Math.ceil(pagination.total / Number.parseInt(pagination.limit))

        if (totalPage === 0) return

        if (totalPage < Number.parseInt(pagination.page)) {
          const newQueryParam = {
            ...queryParams,
            _page: 1,
          }

          history.pushState({}, '', queryString.stringify(newQueryParam))

          setQueryParams({
            ...queryParams,
            _page: 1,
          })
        }

        // console.log('pagination', pagination)
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }

      setLoading(false)
    })()
  }, [queryParams])

  return (
    <div>
      {/* <MainLayout> */}
      <Container maxWidth="xl">
        <Box className={cx('wrapper')} sx={{ mt: '130px', position: 'relative' }}>
          <Grid container spacing={2} sx={{ mt: '50px' }}>
            <Grid item xs={3} sx={{ background: 'red', padding: 'unset !important' }}>
              <Item>
                <Box className={cx('all')} onClick={handleClickAll}>
                  All
                </Box>
                <ProductFilters
                  filters={queryParams}
                  onChange={handleFiltersChange}
                ></ProductFilters>
              </Item>
            </Grid>

            <Grid item xs={9} sx={{ paddingTop: 'unset !important' }}>
              <Item sx={{ background: 'var(--background-white)', color: 'var(--color-primary)' }}>
                <ProductSort
                  currentSort={queryParams._sort}
                  onChange={handleSortChange}
                ></ProductSort>

                <FilterViewer filters={queryParams} onChange={setNewFilter}></FilterViewer>
                <ProductList data={productList} type={'macbook'}></ProductList>

                <div className={cx('pagination')}>
                  <Stack spacing={5}>
                    <Pagination
                      onChange={handlePageChange}
                      count={Math.ceil(pagination.total / Number.parseInt(pagination.limit))}
                      page={Number.parseInt(queryParams._page)}
                      color="primary"
                    />
                  </Stack>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* </MainLayout> */}
    </div>
  )
}
