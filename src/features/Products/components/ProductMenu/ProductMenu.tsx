import { Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import * as React from 'react'
import ClassNames from 'classnames/bind'
import styles from './ProductMenu.module.scss'

const cx = ClassNames.bind(styles)
export interface ProductMenuProps {
  productId: any
  indexImage: any
}

export function ProductMenu({ productId, indexImage }: ProductMenuProps) {
  const [product, setProduct] = React.useState(0)

  // console.log('ref', ref.current)

  const handleproduct = () => {
    setProduct(1)
  }
  const handleaddination = () => {
    setProduct(2)
  }
  const handlereviews = () => {
    setProduct(3)
  }

  return (
    <div className={cx('product')}>
      {product === 1 ? (
        <Link
          onClick={handleproduct}
          className={cx('item', 'click')}
          component={NavLink}
          to={`/products/${productId}/${indexImage}`}
        >
          Description
        </Link>
      ) : (
        <Link
          onClick={handleproduct}
          className={cx('item')}
          component={NavLink}
          to={`/products/${productId}/${indexImage}`}
        >
          Description
        </Link>
      )}

      {product === 2 ? (
        <Link
          onClick={handleaddination}
          className={cx('item', 'click')}
          component={NavLink}
          to={`/products/${productId}/addination`}
        >
          Characteristics
        </Link>
      ) : (
        <Link
          onClick={handleaddination}
          className={cx('item')}
          component={NavLink}
          to={`/products/${productId}/addination`}
        >
          Characteristics
        </Link>
      )}

      {product === 3 ? (
        <Link
          onClick={handlereviews}
          className={cx('item', 'click')}
          component={NavLink}
          to={`/products/${productId}/reviews`}
        >
          Reviewr
        </Link>
      ) : (
        <Link
          onClick={handlereviews}
          className={cx('item')}
          component={NavLink}
          to={`/products/${productId}/reviews`}
        >
          Reviewr
        </Link>
      )}
    </div>
  )
}
