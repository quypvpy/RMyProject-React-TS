import * as React from 'react'
import ClassNames from 'classnames/bind'
import styles from './information.module.scss'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
const cx = ClassNames.bind(styles)
export interface InformationProps {}

export function Information(props: InformationProps) {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('item')}>
          <GppGoodOutlinedIcon className={cx('icon')}></GppGoodOutlinedIcon>
          <div className="title">Secure payments</div>
        </div>
        <div className={cx('item')}>
          <LoopOutlinedIcon className={cx('icon')}></LoopOutlinedIcon>
          <div className="title">30 days return period</div>
        </div>
        <div className={cx('item')}>
          <SupportOutlinedIcon className={cx('icon')}></SupportOutlinedIcon>
          <div className="title">24/7 customer support</div>
        </div>
        <div className={cx('item')}>
          <LocalShippingOutlinedIcon className={cx('icon')}></LocalShippingOutlinedIcon>
          <div className="title">Flexible shipping</div>
        </div>
      </div>
    </div>
  )
}
