import productApi from '@/api/productApi'
import * as React from 'react'
export * from './whatnew.scss'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { NewProductSkelaton } from './newProductSkelaton'

import { AddtoCart } from '@/features/Cart/cartSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export interface WhatNewProps {}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div onClick={onClick}>
      <ArrowRightIcon className="icon-arrow right-icon"></ArrowRightIcon>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div onClick={onClick}>
      <ArrowLeftIcon className="icon-arrow left-icon"></ArrowLeftIcon>
    </div>
  )
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

export function WhatNew(props: WhatNewProps) {
  const [newProductList, setNewProductList]: any = React.useState([])

  const [product, setproduct]: any = React.useState()
  const [indeximg, setIndexImg]: any = React.useState()

  const navigate = useNavigate()
  const dispath = useDispatch()

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data }: any = await productApi.getAll({ _page: 1, _limit: 6 })
        setNewProductList(data)
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }

      setLoading(false)
    })()
  }, [])
  const handleClick = (event: any, item: any, indexImage: any) => {
    // tìm cha của event dang click
    const ParentElementClick = event.target.parentNode
    let classList: any = ParentElementClick?.getAttribute('class')
    if (
      classList.includes('addtocart') ||
      classList.includes('iconsvg') ||
      classList.includes('icon')
    ) {
      ;(async () => {
        try {
          const result: any = await productApi.get(item.id)
          setproduct(result)
          setIndexImg(indexImage)

          try {
            const action = AddtoCart({
              id: result.id,
              product: result,
              quantity: 1,
              indexImage: `women-fashion-${indexImage}.jpg`,
            })
            dispath(action)
          } catch (error) {
            console.log(error)
          }
        } catch (error) {
          console.log('fail to fetch product', error)
        }
      })()
      return
    } else navigate(`/products/${item.id}/women-fashion-${indexImage}.jpg`)
  }

  return (
    <section className="whatnew">
      <h1>Women Clothes</h1>
      <div className="wrapper">
        {loading ? (
          <div>
            <Slider {...settings}>
              {Array.from(new Array(7)).map((x, index) => (
                <div key={index}>
                  <div className="item">
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
                <div key={index}>
                  <div className="item" onClick={() => handleClick(event, item, index + 1)}>
                    <img alt={index} src={`src/assets/women-fashion-${index + 1}.jpg`}></img>
                    <Box className="addtocart">
                      <Box className="icon-text">Add to cart</Box>
                      <Box className="icon">
                        <ShoppingCartIcon className="iconsvg" />
                      </Box>
                    </Box>
                  </div>
                  <div className="information">
                    <div className="title">{item.name}</div>
                    <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
                      {new Intl.NumberFormat('vn-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.salePrice)}
                      ;
                    </Box>
                    <Box component={'span'} sx={{ fontWeight: 'bold' }}>
                      {' '}
                      {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}
                    </Box>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}
