import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ClassNames from 'classnames/bind'
import * as React from 'react'
import { ReactIcon } from '../components/RegisterForm/ReactIcon/reactIcon'
import { TextWelcome } from '../components/RegisterForm/TextWelcome/text'
import styles from './Authentication.module.scss'
export interface AuthenticationProps {
  children: React.ReactNode
  mode: string
  onSetModeRegister?: any
  onSetModeLogin?: any
}
const BootstrapButton = styled(Button)({
  fontWeight: '600',
  color: 'white',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  marginTop: '16px',
  padding: '4px 40px',
  border: '1px solid',
  lineHeight: 1.8,
  backgroundColor: '#191C27',
  borderColor: 'var(--border-form-login)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#29485A',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})
const pStyle = {
  marginTop: '10px',
  fontSize: '1.5rem',
  lineHeight: '1.5',
  display: 'inline-block',
}

const cx = ClassNames.bind(styles)
export function Authentication({
  children,
  mode,
  onSetModeRegister,
  onSetModeLogin,
}: AuthenticationProps) {
  const handleCreateAcount = () => {
    if (onSetModeRegister) {
      onSetModeRegister()
    }
    // form.reset()
  }
  const handleLogin = () => {
    if (onSetModeLogin) {
      onSetModeLogin()
    }
    // form.reset()
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <ReactIcon></ReactIcon>
        <div className={cx('content')}>
          <div className={cx('title')}>
            <TextWelcome></TextWelcome>
          </div>
          <div className={cx('description')}>
            It’s everywhere you want to be, quality never goes of style.{' '}
          </div>
          <BootstrapButton sx={{ mt: 6 }}>explore</BootstrapButton>
        </div>
      </div>

      <div className={cx('form')}>
        <div className={cx('title')}>{mode}</div>
        <br />
        <Typography style={pStyle} component={'p'}>
          <span onClick={handleLogin} className={cx('create-acount')}>
            Đăng nhập
          </span>{' '}
          hoặc{' '}
          <span onClick={handleCreateAcount} className={cx('create-acount')}>
            Tạo tài khoản
          </span>
        </Typography>

        <div>{children}</div>
      </div>
    </div>
  )
}
