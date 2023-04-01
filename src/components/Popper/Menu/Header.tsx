import ClassNames from 'classnames/bind'
import styles from './Menu.module.scss'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface HeaderProps {
  title?: any
  onBack?: any
}
const cx = ClassNames.bind(styles)

export function Header({ title, onBack }: HeaderProps) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  )
}
