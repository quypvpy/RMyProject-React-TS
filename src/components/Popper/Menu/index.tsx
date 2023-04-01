import { ReactNode, useState } from 'react'
import ClassNames from 'classnames/bind'
import styles from './Menu.module.scss'

import { PopperItem } from '../PopperItem'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper } from '../PopperWrapper'
import { MenuItem } from './MenuItem'
import { Header } from './Header'

export interface MenuProps {
  children?: any
  items?: any
  onChange?: any
}
const cx = ClassNames.bind(styles)

export function Menu({ children = '', items = [], onChange = '' }: MenuProps) {
  const [history, setHistory] = useState([{ data: items }])
  // chuyển va object chắc cho dễ xử li.
  const current = history[history.length - 1]

  const renderItem = () => {
    return current.data.map((item: any, index: any) => {
      const isParent = !!item.children

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children])
            } else {
              onChange(item)
            }
          }}
        ></MenuItem>
      )
    })
  }

  return (
    <Tippy
      // ddeerd mình select được kq
      interactive
      //   0 lucs show.. 500 hiden
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }}
              ></Header>
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        // đẻ khi mình có đang ở cấp 2.. khi buông ra.. thì nó sẽ về cấp 1
        setHistory((prev) => prev.slice(0, 1))
      }}
    >
      {children}
    </Tippy>
  )
}
