import CloseIcon from '@mui/icons-material/Close'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import ClassNames from 'classnames/bind'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './menu.module.scss'

const cx = ClassNames.bind(styles)
type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function DrawerLeft() {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const handleClick = (text: any) => {
    const newtext = text.toLowerCase()
    if (newtext === 'more') return
    navigate(`/${newtext}`)
  }

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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={cx('wrapper')}>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
        <div className={cx('title')}>
          <p className={cx('text')}>Menu</p>
          <div className={cx('button')}>
            <CloseIcon className={cx('icon')}></CloseIcon>
          </div>
        </div>
        {['Home', 'About', 'News', 'More'].map((text: any, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon className={cx('icon-sub')} />
                ) : (
                  <MailIcon className={cx('icon-sub')} />
                )}
              </ListItemIcon>
              <ListItemText
                onClick={() => handleClick(text)}
                className={cx('listItemText')}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ minWidth: 'unset ', paddingLeft: 'unset' }}
          >
            {' '}
            <MenuIcon sx={{ fontSize: '35px', color: 'var(--white)' }}></MenuIcon>
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
