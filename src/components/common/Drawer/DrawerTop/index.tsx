import { Search } from '@/components/Layout'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import ClassNames from 'classnames/bind'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './menu.module.scss'
const cx = ClassNames.bind(styles)
type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function DrawerTop() {
  const navigate = useNavigate()
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
  const handleSearch = (value: any) => {
    setState({
      ...state,
      top: false,
    })
    navigate(`/search?name_contains=${value}`)
  }
  const list = (anchor: Anchor) => (
    <Box
      className={cx('wrapper')}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ width: '300px', height: '200px' }} className={cx('search')}>
        <Search onSearch={handleSearch}></Search>
      </Box>

      <Divider />
    </Box>
  )

  return (
    // <div className="">ssaads</div>
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          {/* <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ minWidth: 'unset ', paddingLeft: 'unset' }}
          > */}
          <PanoramaFishEyeIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ fontSize: '35px', color: 'var(--color-primary)' }}
          ></PanoramaFishEyeIcon>
          {/* </Button> */}
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
