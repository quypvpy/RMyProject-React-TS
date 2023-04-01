import ClassNames from 'classnames/bind'
import styles from './Header.module.scss'
export * from '../../Header-contact/Header-contact.scss'

// tippy
// import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional nếu xài tooltip thì cái trên và cái này..thieus trên k chạy
import HeadlessTippy from '@tippyjs/react/headless' // different import path! headless
import Tippy from '@tippyjs/react' // different import path! headless

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Menu, PopperItem, PopperWrapper } from '../../Popper'
import { Button as CustomButton } from '../Button'
import { UploadIcon } from '../../Icons'
import Image from '../../Image'
import { MySwitch, Search } from '../../Layout'

//dialog

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import { Register } from '@/features/Auth/components/Register'

import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Authentication } from '@/features/Auth/Authentication/Authentication'
import { Login } from '@/features/Auth/components/Login'
import { HeaderContact } from '@/components/Header-contact'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import { useDispatch, useSelector } from 'react-redux'
import { cartItemCountSelector } from '@/features/Cart/selector'
import { useNavigate } from 'react-router-dom'

import { DrawerLeft, DrawerTop } from '../Drawer'

export interface HeaderProps {}

const cx = ClassNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          // type để pj loại nào để xử lí..
          type: 'language',
          code: 'en',
          title: 'english',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            title: 'Language',
            data: [
              {
                code: 'en',
                title: 'english 1',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt 1',
                children: {
                  title: 'Language',
                  data: [
                    {
                      code: 'en',
                      title: 'english 2 ',
                    },
                    {
                      code: 'vi',
                      title: 'Tiếng Việt 2',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: '/',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keybord and shortcut',
  },
]

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}
export function Header(props: HeaderProps) {
  const [searchResult, setSeatchResult] = useState([1, 2])
  const navigate = useNavigate()
  const dispath = useDispatch()

  // lấy từ selector..
  const cartItemCount = useSelector(cartItemCountSelector)

  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(MODE.LOGIN)

  const handleClickOpen = () => {
    setOpen(true)
    setMode(MODE.LOGIN)
    // để khi reset (tắt dialog xong bất lại..thì nó  luôn hiện form LOGIN)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleModeLogin = () => {
    setMode(MODE.LOGIN)
  }
  const handleModeRegister = () => {
    setMode(MODE.REGISTER)
  }
  const handleCartClick = () => {
    navigate('/cart')
  }

  // Handle logic
  const handleMenuChange = (menuItem: any) => {
    console.log(menuItem)
    // switch(menuItem.type){
    //   case 'language':
    //     handle change language
    //     break;
    //   default:
    // }
  }
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: 'English',
    },
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: 'English',
    },
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: 'English',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: 'log out',
      separate: true,
      // để cấu himh boder trên cho logout
    },
  ]

  const handleSearch = (value: string) => {
    navigate(`/search?name_contains=${value}`)
  }

  const currentUser = false

  useEffect(() => {
    window.onscroll = function () {
      var header: any = document.getElementById('header-wrapper')
      if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        // console.log(document.documentElement.scrollTop)
        header.classList.add('header-wrapper')
      } else {
        header.classList.remove('header-wrapper')
      }
    }
  }, [document.documentElement.scrollTop])
  const navigateHome = () => {
    navigate('/home')
  }
  const navigateAbout = () => {
    navigate('/about')
  }
  const navigateNew = () => {
    navigate('/news')
  }
  const handleClickAcount = () => {
    setOpen(true)
  }

  return (
    <div>
      <HeaderContact></HeaderContact>
      <header className={cx('wrapper')} id="header-wrapper">
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <div className={cx('content')}>
              <div className={cx('menu-responsive')}>
                <DrawerLeft></DrawerLeft>
              </div>

              <LocalMallIcon className={cx('icon')} sx={{ fontSize: 30 }}></LocalMallIcon>
              <p>LightShop</p>
            </div>
            <div className={cx('switch')}>
              <MySwitch></MySwitch>
            </div>
          </div>
          <div className={cx('menu')}>
            <ul className={cx('menu-list')}>
              <li onClick={navigateHome}>home</li>
              {/* <li>catalogue</li> */}
              <li onClick={navigateAbout}>about</li>
              <li onClick={navigateNew}>new</li>
              <li className={cx('more')}>
                more
                <div className={cx('after')}>
                  <div className={cx('link')}>
                    <div>Contact</div>
                    <div>Payment</div>
                    <div>Delivery</div>
                    <div>Order tracking</div>
                    <div>Exchanges & returns</div>
                    <div>Sitemap</div>
                    <div>404 error page</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Search */}
          <div className={cx('search')}>
            <Search onSearch={handleSearch}></Search>
          </div>

          <div className={cx('actions')}>
            {currentUser ? (
              <>
                <Tippy content="Upload" placement="bottom">
                  <button onClick={handleClickOpen}>
                    <UploadIcon></UploadIcon>
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <IconButton>
                  <div className={cx('search-responsive')}>
                    <DrawerTop></DrawerTop>
                  </div>
                </IconButton>
                <div className={cx('account-icon')} onClick={handleClickAcount}>
                  <PersonIcon sx={{ fontSize: 30 }}></PersonIcon>
                  <p>Account</p>
                </div>
                <div onClick={handleCartClick} className={cx('cart-icon')}>
                  <Badge badgeContent={cartItemCount} color="primary" className={cx('cart-badge')}>
                    <ShoppingCartOutlinedIcon
                      className={cx('shopping-icon')}
                    ></ShoppingCartOutlinedIcon>
                  </Badge>
                  <p>Your Cart</p>
                </div>
              </>
            )}

            <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
              {currentUser ? (
                <Image
                  className={cx('user-avatar')}
                  alt="Van Quy"
                  src="https://plus.unsplash.com/premium_photo-1663054893054-5dc0aa4e7d49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80"
                  fallback="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                ></Image>
              ) : (
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                </button>
              )}
            </Menu>
          </div>
        </div>
      </header>

      <Dialog
        maxWidth={'md'}
        className={cx('maxwidth')}
        disableEscapeKeyDown
        // onBackdropClick={ha}
        fullWidth
        open={open}
        // onClose={handleClose}
      >
        {open ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <DialogContent className={cx('bk')}>
          {mode === MODE.REGISTER && (
            <Authentication
              mode={mode}
              onSetModeRegister={handleModeRegister}
              onSetModeLogin={handleModeLogin}
            >
              <Register closeDialog={handleClose}></Register>
            </Authentication>
          )}
          {mode === MODE.LOGIN && (
            <Authentication
              mode={mode}
              onSetModeLogin={handleModeLogin}
              onSetModeRegister={handleModeRegister}
            >
              <Login closeDialog={handleClose}></Login>
            </Authentication>
          )}

          {/* <Register closeDialog={handleClose}></Register> */}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  )
}
