import productApi from '@/api/productApi'
import { MainLayout } from '@/components/Layout'
import { Pagination, Stack } from '@mui/material'
import ClassNames from 'classnames/bind'
import queryString from 'query-string'
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FilterByPrice, FilterByService, FilterViewer } from '../Filters'
import { ProductList } from '../ProductList'
import { ProductSort } from '../ProductSort'
import styles from './search.module.scss'

import { DrawerFilter } from '@/components/common/Drawer'

const cx = ClassNames.bind(styles)

export interface SearchProps {
  valueSearch?: string
}

export function Search({ valueSearch }: SearchProps) {
  const [productList, setProductList]: any = React.useState([])
  const [paginations, setPagination]: any = React.useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = React.useState(1)

  let queryParams: any = React.useMemo(() => {
    const params: any = queryString.parse(location.search)

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 6,
      _sort: params._sort || 'salePrice:ASC',
      // name_contains: valueSearch,
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

  const setNewFilter = (newFilters: any) => {
    navigate(`${location.pathname}?${queryString.stringify(newFilters)}`)
  }

  return (
    <MainLayout>
      <div className={cx('wrapper')}>
        <div className={cx('laptop')}>
          <div className={cx('left')}>
            <div className={cx('filterByPrice')}>
              <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
            </div>
            <div className={cx('filterByService')}>
              <FilterByService
                filters={queryParams}
                onChange={handleServiceChange}
              ></FilterByService>
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('sort')}>
              <div className={cx('title')}>Products</div>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              ></ProductSort>

              <div className={cx('filter')}>
                <DrawerFilter></DrawerFilter>
                Filter
              </div>
            </div>

            <FilterViewer filters={queryParams} onChange={setNewFilter}></FilterViewer>

            <ProductList data={productList}></ProductList>
            <div className={cx('pagination')}>
              <Stack spacing={5}>
                <Pagination
                  color="primary"
                  onChange={handlePageChange}
                  count={Math.ceil(paginations.total / Number.parseInt(paginations.limit))}
                  page={page}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
