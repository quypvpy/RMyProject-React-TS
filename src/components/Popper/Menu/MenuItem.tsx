import * as React from 'react'
import ClassNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Button } from '../../common'

export interface MenuItemProps {
  data: any
  onClick?: any
}
const cx = ClassNames.bind(styles)
export function MenuItem({ data, onClick }: MenuItemProps) {
  const classes = cx('menu-item', {
    separate: data.separate,
    // thêm class vào.
  })
  return (
    <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  )
}
