import { MainLayout } from '@/components/Layout'
import CloseIcon from '@mui/icons-material/Close'
import EventIcon from '@mui/icons-material/Event'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import ClassNames from 'classnames/bind'
import * as React from 'react'
import styles from './aboutpage.module.scss'
import { Box } from '@mui/material'

const cx = ClassNames.bind(styles)

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))
export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export function AboutPage() {
  let [currentIndex, SetCurrentIndex] = React.useState(1)
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickRef = (event: any) => {
    const { target } = event
    if (target.tagName !== 'IMG' || !target.dataset.album) return

    // img with data-album
    // trong target cos dattaset.. trong datasset cos phana album.=easyfronted.
    // vif thees ndùng cái easy frondtend nó đi query tất cả các tên trùng.
    let imgList = document.querySelectorAll(`img[data-album="${target.dataset.album}"]`)

    SetCurrentIndex([...imgList].findIndex((x) => x === target))
  }

  const handleNext = () => {
    SetCurrentIndex((x) => x + 1)
  }
  const handlePrev = () => {
    SetCurrentIndex((x) => x - 1)
  }
  return (
    <MainLayout>
      <Box ref={ref} onClick={() => handleClickRef(event)} className={cx('aboutpage')}>
        <div className={cx('date')}>
          <EventIcon className={cx('icon')}></EventIcon>
          <span>October 6, 2022</span>
          <FolderOpenIcon className={cx('icon')}></FolderOpenIcon>
        </div>
        <div className={cx('main')}>
          <div className={cx('title')}>10 best ways to lorem ipsum dolor glavrida amet</div>

          <div className={cx('description')}>
            Fusce sed maximus est, et viverra mauris. Phasellus a cursus elit. Praesent varius sem
            id felis scelerisque vehicula Sed sed pharetra velit. Vestibulum venenatis non venenatis
            erat.
          </div>
          <div className={cx('image')}>
            <img
              data-album="album-1"
              onClick={handleClickOpen}
              src={`./images/page-collection-1.png`}
              alt="image"
            />
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('left')}>
            <div className={cx('title')}>
              Phasellus velit lobortis quis nisi venenatis finibus velit
            </div>
            <ul className={cx('description')}>
              <li>Suspendisse potenti: libero id eleifend consectetur?</li>
              <li>Duis volutpat augue lorem?</li>
              <li>Aliquam gravida risus nec velit lacinia dapibus?</li>
            </ul>
          </div>
          <div className={cx('right')}>
            <img
              data-album="album-1"
              onClick={handleClickOpen}
              src="./images/page-collection-2.png"
              alt="image"
            />
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('left')}>
            <img
              data-album="album-1"
              onClick={handleClickOpen}
              src="./images/page-collection-3.png"
              alt="image"
            />
          </div>
          <div className={cx('right')}>
            <div className={cx('title')}>Lorem ipsum dolor amet</div>
            <div className={cx('description')}>
              Donec sit amet sodales eros. Suspendisse potenti. In scelerisque libero id eleifend
              consectetur. Sed lacinia tempor orci, non lacinia purus faucibus non.
            </div>
            <div className={cx('description')}>
              Aliquam gravida risus nec velit lacinia dapibus. Phasellus at magna id elit tristique
              lacinia. Integer a justo vitae arcu fermentum consequat.
            </div>
            <div className={cx('description')}>
              Quisque pellentesque, nunc a lacinia placerat, lacus nunc condimentum elit, nec
              scelerisque urna nisl at turpis.
            </div>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('left')}>
            <div className={cx('title')}>Dolor amet - pellentesque faucibus accumsan?</div>

            <li>Suspendisse potenti: libero id eleifend consectetur?</li>
            <li>Duis volutpat augue lorem?</li>
            <li>Aliquam gravida risus nec velit lacinia dapibus?</li>
          </div>
          <div className={cx('right')}>
            <img
              data-album="album-1"
              onClick={handleClickOpen}
              src="./images/page-collection-4.png"
              alt="image"
            />
          </div>
        </div>
      </Box>

      <BootstrapDialog
        maxWidth={'lg'}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Collections
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={cx('image-lightbox')}>
            <img src={`./images/page-collection-${currentIndex + 1}.png`} alt="image" />
            {/* <img src={`./images/page-collection-1.png`} alt="image" /> */}
          </div>
        </DialogContent>

        <DialogActions>
          {currentIndex === 0 ? (
            <Button variant="contained" disabled autoFocus onClick={handlePrev}>
              Prev
            </Button>
          ) : (
            <Button variant="contained" autoFocus onClick={handlePrev}>
              Prev
            </Button>
          )}

          {/* {currentIndex === listItem.length - 1 ? ( */}
          {currentIndex === 4 - 1 ? (
            <Button variant="contained" disabled autoFocus onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" autoFocus onClick={handleNext}>
              Next
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </MainLayout>
  )
}
