import ClassNames from 'classnames/bind'
import styles from './Button.module.scss'

import { Link } from 'react-router-dom'

export interface ButtonProps {
  to?: any
  href?: any
  children?: any
  onClick?: any
  passPropss?: any
  target?: any
  primary?: any
  outline?: any
  small?: any
  large?: any
  text?: any
  disabled?: any
  rounded?: any
  className?: any
  leftIcon?: any
  rightIcon?: any
}

const cx = ClassNames.bind(styles)

// t

export function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  className = false,
  leftIcon = false,
  rightIcon = false,
  children = '',
  onClick,
  ...passPropss
}: ButtonProps) {
  // lấy hết những cái props gọi là pasprops
  // passPropss là thuộc tính ta muốn thêm vào nhưng ta k kiểm sotas đc..
  // như target :_blank
  let Comp: any = 'button'
  const props: any = {
    onClick,
    ...passPropss,
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && props[key] === 'function') {
        delete props[key]
      }
    })
  }
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    // khi mà class primary dc ttuyeenf .. nó sẽ add class primary và kgi viết module thì nó sẽ tự md hóa
    // primary:primary
    [className]: className,
    // khi cos gias trị className thì nó lấy giá trị className làm key ở vế trái.
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}
