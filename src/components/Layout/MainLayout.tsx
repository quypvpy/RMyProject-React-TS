import ClassNames from 'classnames/bind'
import styles from './MainLayout.module.scss'

import { ReactNode } from 'react'
import { Footer, Header } from '../common'

export interface MainLayoutProps {
  children: ReactNode
}
const cx = ClassNames.bind(styles)
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        {/* <Sidebar></Sidebar>
        <div className={cx('content')}>{children}</div> */}
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}
