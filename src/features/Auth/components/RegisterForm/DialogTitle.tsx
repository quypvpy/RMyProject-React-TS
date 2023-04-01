import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

export interface BootstrapDialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const divStyle = {
  fontWeight: ' 600',
  letterSpacing: '1px',
}
const pStyle = {
  fontSize: '1.5rem',
  lineHeight: '1.5',
  borderBottom: '1px solid #666',
  display: 'inline-block',
}

export function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
  const { children, onClose, ...other } = props
  return (
    <DialogTitle style={divStyle} sx={{ m: 0, pt: 3, fontSize: 26, lineHeight: 1.4 }} {...other}>
      {children}
      <br />
      {/* <Typography style={pStyle} component={'p'}>
        Đăng nhập hoặc Tạo tài khoản
      </Typography> */}
    </DialogTitle>
  )
}
