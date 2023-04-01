import { Dialog, DialogTitle } from '@mui/material'
import { styled } from '@mui/material/styles'
import * as React from 'react'

import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles from './LightBox.module.scss'
import ClassNames from 'classnames/bind'

const cx = ClassNames.bind(styles)

const listItem = [
  'https://plus.unsplash.com/premium_photo-1669752000456-dd35381ca44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://plus.unsplash.com/premium_photo-1669752000456-dd35381ca44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80',
]

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

export interface LightBoxProps {
  isShow: any
  onClose?: any
  listItem: any
  currentIndex: any
}
export function LightBox({ isShow, onClose, listItem, currentIndex }: LightBoxProps) {
  const handleClose = () => {
    if (!onClose) return
    onClose()
  }
  return (
    <div>
      <Lightbox
        className={cx('lightbox')}
        index={currentIndex}
        open={isShow}
        close={handleClose}
        slides={[
          { src: listItem[0] },
          { src: listItem[1] },
          { src: listItem[2] },
          { src: listItem[3] },
          { src: listItem[4] },
          // { src: 'https://picsum.photos/id/20/867/267' },
          // { src: 'https://picsum.photos/id/20/867/267' },
          // { src: 'https://picsum.photos/id/20/867/267' },
        ]}
      ></Lightbox>
    </div>
  )
}

// export function LightBox({ isShow, onClose, listItem, currentIndex }: LightBoxProps) {
//   const [index, setIndex] = React.useState(currentIndex)
//   // const index = currentIndex
//   const handleClose = () => {
//     if (!onClose) return
//     onClose()
//   }

//   //  phair nhows gán vô index xong laya index..cập nhật.. chứ k nó k cập nhật đc.
//   React.useEffect(() => {
//     setIndex(currentIndex)
//   }, [currentIndex])

//   const handlePrevIcon = () => {
//     setIndex((index - 1 + listItem.length) % listItem.length)
//   }
//   const handleNextIcon = () => {
//     // cos bao nhieeu hình thì ta lấy đó chia.
//     // ví dụ.. tổng 5 hình ,.1%5 2%5..,

//     setIndex((index + 1) % listItem.length)
//   }

//   return (
//     <div>
//       <BootstrapDialog
//         maxWidth={'md'}
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={isShow}
//         sx={{ overflow: 'hidden' }}
//       >
//         <img width={'100%'} height={'500px'} src={listItem[index]}></img>

//         <Box className={cx('close')} component="span">
//           <CloseIcon onClick={handleClose} className={cx('close-icon')}></CloseIcon>
//           Đóng
//         </Box>
//         <Box className={cx('action')}>
//           <ArrowLeftIcon onClick={handlePrevIcon} className={cx('left')}></ArrowLeftIcon>
//           <ArrowRightIcon onClick={handleNextIcon} className={cx('right')}></ArrowRightIcon>
//         </Box>
//       </BootstrapDialog>
//     </div>
//   )
// }
