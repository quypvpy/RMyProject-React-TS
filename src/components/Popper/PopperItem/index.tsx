import { ReactNode } from 'react'
import ClassNames from 'classnames/bind'
import styles from './PopperItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export interface PopperItemProps {}

const cx = ClassNames.bind(styles)
export function PopperItem(props: PopperItemProps) {
  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass}></FontAwesomeIcon>
      <div className={cx('title')}>Phamj Hoang Thanh Thi</div>
    </div>
  )
}
