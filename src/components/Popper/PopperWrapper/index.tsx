import { ReactNode } from 'react'
import ClassNames from 'classnames/bind'
import styles from './PopperWrapper.module.scss'

const cx = ClassNames.bind(styles)

export interface PopperWrapperProps {
  children?: ReactNode
}

export function PopperWrapper({ children = '' }: PopperWrapperProps) {
  return <div className={cx('wrapper')}>{children}</div>
}
