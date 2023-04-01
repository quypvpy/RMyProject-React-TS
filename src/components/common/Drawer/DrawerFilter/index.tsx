import { FilterByPrice, FilterByService } from '@/features/Products/components/Filters'
import CloseIcon from '@mui/icons-material/Close'
import FilterListIcon from '@mui/icons-material/FilterList'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import ClassNames from 'classnames/bind'
import queryString from 'query-string'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './menu.module.scss'
const cx = ClassNames.bind(styles)
type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function DrawerFilter() {
  const navigate = useNavigate()

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
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
  const handleClickTitle = () => {
    setState({
      ...state,
      right: false,
    })
  }
  const list = (anchor: Anchor) => (
    <Box
      className={cx('wrapper')}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={cx('title')}>
        <p className={cx('text')}>Filter</p>
        <div onClick={handleClickTitle} className={cx('button')}>
          <CloseIcon className={cx('icon')}></CloseIcon>
        </div>
      </div>
      <Box sx={{}} className={cx('filter')}>
        <div className={cx('filterByPrice')}>
          <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
        </div>
        <div className={cx('filterByService')}>
          <FilterByService filters={queryParams} onChange={handleServiceChange}></FilterByService>
        </div>
      </Box>

      <Divider />
    </Box>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ minWidth: 'unset ', paddingLeft: 'unset' }}
          >
            {' '}
            <FilterListIcon sx={{ marginRight: '10px', fontSize: '20px' }}></FilterListIcon>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
