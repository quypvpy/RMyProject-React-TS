import ClassNames from 'classnames/bind'
import styles from './decor.module.scss'
const cx = ClassNames.bind(styles)
export interface DecorProps {}

export function Decor(props: DecorProps) {
  return (
    <div>
      <div className={cx('title')}>Nhãn Hiệu Hợp Tác</div>
      <div className={cx('wrapper')}>
        <div className={cx('image')}>
          <img src="./images/logo-1.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="./images/logo-2.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="./images/logo-3.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="./images/logo-4.png" alt="image" />
        </div>
      </div>
    </div>
  )
}
