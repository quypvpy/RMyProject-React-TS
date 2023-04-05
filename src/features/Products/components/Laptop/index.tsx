import productApi from '@/api/productApi'
import queryString from 'query-string'
import * as React from 'react'
import { ProductList } from '../ProductList'
import ClassNames from 'classnames/bind'
import styles from './laptop.module.scss'
import { Pagination, Stack } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductSort } from '../ProductSort'
import { FilterByPrice, FilterByService } from '../Filters'
import FilterListIcon from '@mui/icons-material/FilterList'
import { DrawerFilter } from '@/components/common/Drawer'

const cx = ClassNames.bind(styles)

export interface LaptopProps {}

export function Laptop(props: LaptopProps) {
  const [productList, setProductList]: any = React.useState([])
  const [pagination, setPagination]: any = React.useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = React.useState(1)
  const [count, setCount] = React.useState(1)

  let queryParams: any = React.useMemo(() => {
    const params: any = queryString.parse(location.search)

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 6,
      _sort: params._sort || 'salePrice:ASC',
      name_contains: 'macbook',
      isFreeShip: params.isFreeShip === 'true',
      isPromotion: params.isPromotion === 'true',
    }
  }, [location.search])

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data, pagination }: any = await productApi.getAll(queryParams)
        setProductList(data)
        setPagination(pagination)
        setPage(pagination.page)
        setCount(Math.ceil(pagination.total / Number.parseInt(pagination.limit)))

        const totalPage: any = Math.ceil(pagination.total / Number.parseInt(pagination.limit))
        if (totalPage === 0) return

        if (totalPage < Number.parseInt(pagination.page)) {
          const filters = {
            ...queryParams,
            _page: 1,
          }
          navigate(`${location.pathname}?${queryString.stringify(filters)}`)
        }
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }
    })()
  }, [queryParams])

  const handlePageChange = (e: any, page: any) => {
    const filters = {
      ...queryParams,
      _page: page,
    }
    navigate(`${location.pathname}?${queryString.stringify(filters)}`)
  }
  const handleSortChange = (newsort: any) => {
    const filters = {
      ...queryParams,
      _sort: newsort,
    }
    navigate(`${location.pathname}?${queryString.stringify(filters)}`)
  }
  const handlePriceChange = (values: object) => {
    let filters = {
      ...queryParams,
      ...values,
    }
    if (values === undefined) {
      delete filters.salePrice_gte
      delete filters.salePrice_lte
    }

    navigate(`${location.pathname}?${queryString.stringify(filters)}`)
  }
  const handleServiceChange = (values: object) => {
    const filters = {
      ...queryParams,
      ...values,
    }
    navigate(`${location.pathname}?${queryString.stringify(filters)}`)
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title-respontive')}>Laptop Sinh Viên</div>
      <div className={cx('laptop')}>
        <div className={cx('left')}>
          {/* <img src="src/assets/collection-5.png" alt="image"></img> */}
          <video autoPlay muted loop className={cx('myVideo')}>
            <source src="./video/laptop-1-video.mp4" type="video/mp4"></source>
          </video>
          <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
          <FilterByService filters={queryParams} onChange={handleServiceChange}></FilterByService>
        </div>
        <div className={cx('right')}>
          <div className={cx('sort')}>
            <div className={cx('title')}>Laptop Sinh Viên</div>
            <div className={cx('filter')}>
              <DrawerFilter direction="left"></DrawerFilter>
              {/* <FilterListIcon sx={{ marginRight: '10px', fontSize: '20px' }}></FilterListIcon> */}
              Filter
            </div>
            <div className={cx('width-sort')}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              ></ProductSort>
            </div>
          </div>
          <ProductList data={productList} page={page} type="macbook"></ProductList>
          <div className={cx('pagination')}>
            <Stack spacing={5}>
              <Pagination onChange={handlePageChange} count={count} page={page} color="primary" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}
