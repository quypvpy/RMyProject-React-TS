import { forwardRef, useState } from 'react'
import styles from './image.module.scss'
import classNames from 'classnames'
export interface ImageProps {
  alt?: any
  src?: any
  className?: any
  props?: any
  fallback?: any
}
// #7
// forwardRef ddee tránh bị lỗi.
// đổi prop fallback thành cútomfallback
const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallback: customFallback = 'https://via.placeholder.com/150',
      ...props
    }: ImageProps,
    ref: any
  ) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
      setFallback(customFallback)
    }

    return (
      // mặc định comp index..có css wrapper... về sau muốn cuustom riêng thì class từ bên ngoài vào classname,nối las
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        {...props}
        src={fallback || src}
        alt={alt}
        onError={handleError}
      ></img>
    )
  }
)
export default Image
