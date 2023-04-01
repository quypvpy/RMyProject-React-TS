import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import styles from './seller.module.scss'
import ClassNames from 'classnames/bind'
import { SmoothHorizontal } from '@/utils'
import Slider from 'react-slick'
import productApi from '@/api/productApi'
import { NewProductSkelaton } from '../Whatnew/newProductSkelaton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box } from '@mui/material'
const cx = ClassNames.bind(styles)
export interface SellerProps {}
const listItem = [
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1672009086469-84b66e14b9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
]

export function Seller(props: SellerProps) {
  // const sliderRef: any = React.useRef()
  // const productRef: any = React.useRef()
  // const [dragDown, setDragDown] = React.useState(0)
  // const [dragMove, setDragMove] = React.useState(0)
  // const [isDrag, setIsDrag] = React.useState(false)

  // const handleScrollRight = () => {
  //   const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
  //   if (sliderRef.current.scrollLeft < maxScrollLeft) {
  //     SmoothHorizontal(
  //       sliderRef.current,
  //       250,
  //       productRef.current.clientWidth * 2,
  //       sliderRef.current.scrollLeft
  //     )
  //   }
  // }
  // const handleScrollLeft = () => {
  //   if (sliderRef.current.scrollLeft > 0) {
  //     SmoothHorizontal(
  //       sliderRef.current,
  //       250,
  //       -productRef.current.clientWidth * 2,
  //       sliderRef.current.scrollLeft
  //     )
  //   }
  // }

  // React.useEffect(() => {
  //   if (isDrag) {
  //     if (dragMove < dragDown) handleScrollRight()
  //     if (dragMove > dragDown) handleScrollLeft()
  //   }
  // })
  // const onDragStart = (e: any) => {
  //   setIsDrag(true)
  //   setDragDown(e.screenX)
  // }
  // const onDragEnd = (e: any) => {
  //   setIsDrag(false)
  // }
  // const onDragEnter = (e: any) => {
  //   setDragMove(e.screenX)
  // }

  const [newProductList, setNewProductList]: any = React.useState([])
  const [loading, setLoading] = React.useState(true)

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div onClick={onClick}>
        <ArrowRightIcon className={cx('icon', 'right-icon')}></ArrowRightIcon>
      </div>
    )
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div onClick={onClick}>
        <ArrowLeftIcon className={cx('icon', 'left-icon')}></ArrowLeftIcon>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data }: any = await productApi.getAll({ _page: 1, _limit: 7 })
        setNewProductList(data)
        console.log(loading)

        console.log({ newProductList })

        // console.log({ response })
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }

      setLoading(false)
    })()
  }, [])
  return (
    <section className={cx('seller')}>
      <h1>Bestsellers</h1>
      <div className={cx('wrapper')} draggable="false">
        {loading ? (
          <div>
            <Slider {...settings}>
              {Array.from(new Array(7)).map((x, index) => (
                <div key={index}>
                  <div className={cx('item')}>
                    <NewProductSkelaton></NewProductSkelaton>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div>
            <Slider {...settings} className="settings">
              {newProductList.map((item: any, index: any) => (
                <div key={index} className={cx('wrapper')}>
                  <div className={cx('item')}>
                    <img alt={index} src={listItem[index]}></img>
                  </div>
                  <div className={cx('information')}>
                    <div className="title">{item.name}</div>
                    <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
                      {new Intl.NumberFormat('vn-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.salePrice)}
                      ;
                    </Box>
                    {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}

                    <div className={cx('start')}>start</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          // <Slider {...settings} className="settings">
          //   {newProductList.map((item: any, index: any) => (
          //     <div key={index}>
          //       <div className={cx('item')}>
          //         <img alt={index} src={listItem[index]}></img>

          //       </div>
          //       <div className={cx('information')}>
          //         <div className="title">{item.name}</div>
          //         <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
          //           {new Intl.NumberFormat('vn-VN', {
          //             style: 'currency',
          //             currency: 'VND',
          //           }).format(item.salePrice)}
          //           ;
          //         </Box>
          //         {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}

          //         <div className={cx('start')}>start</div>
          //       </div>
          //     </div>
          //   ))}
          // </Slider>
        )}

        {/* <div
          ref={sliderRef}
          className={cx('product-list')}
          draggable="true"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragEnter={onDragEnter}
        >
          {listItem.map((item, index) => (
            <div key={index}>
              <div ref={productRef} className={cx('product-item')} key={index} draggable="false">
                <img src={item} alt="" draggable="false"></img>
             
                <div className={cx('cover')} draggable="false"></div>
              </div>

              <div className={cx('information')}>
                <div className={cx('title')}>title</div>
                <div className={cx('price')}>price</div>
                <div className={cx('start')}>start</div>
              </div>
            </div>
          ))}
        </div>

        <div className={cx('arrow', 'left')} onClick={handleScrollLeft}>
          <KeyboardArrowLeftIcon className={cx('arrow-left')}></KeyboardArrowLeftIcon>
        </div>

        <div className={cx('arrow', 'right')} onClick={handleScrollRight}>
          <KeyboardArrowRightIcon className={cx('arrow-right')}></KeyboardArrowRightIcon>
        </div> */}
      </div>
    </section>
  )
}
