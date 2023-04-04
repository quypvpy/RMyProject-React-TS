import * as React from 'react'

import Slider from 'react-slick'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import productApi from '@/api/productApi'
import { NewProductSkelaton } from '../Whatnew/newProductSkelaton'
import Box from '@mui/material/Box'
import { formatPrice } from '@/utils'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '@/features/Cart/cartSlice'

export * from './collection.scss'

export interface CollectionProps {}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div onClick={onClick}>
      <ArrowRightIcon className="slider-icon right-icon"></ArrowRightIcon>
      {/* <ArrowRightIcon className={cx('slider-icon', 'right-icon')}></ArrowRightIcon> */}
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div onClick={onClick}>
      <ArrowLeftIcon className="slider-icon left-icon"></ArrowLeftIcon>
    </div>
  )
}
const listItem = [
  'src/assets/women-fashion-1.jpg',
  'src/assets/women-fashion-2.jpg',
  'src/assets/women-fashion-3.jpg',
  'src/assets/women-fashion-6.jpg',
  'src/assets/women-fashion-5.jpg',
  'src/assets/women-fashion-4.jpg',
]

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

export function Collection(props: CollectionProps) {
  const [productList, setProductList]: any = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const [product, setproduct]: any = React.useState()
  const [indeximg, setIndexImg]: any = React.useState()

  const navigate = useNavigate()
  const dispath = useDispatch()

  const [queryParams, setQueryParams] = React.useState({
    id: [26602214, 24703737, 24690548, 30195058, 16751972, 9534554],
    _limit: 6,
    _page: 1,
  })
  React.useEffect(() => {
    ;(async () => {
      try {
        const { data }: any = await productApi.getAll(queryParams)
        setProductList(data)
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
              indexImage: `beauty-${indexImage}.png`,
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
    } else navigate(`/products/${item.id}/beauty-${indexImage}.png`)
  }

  return (
    <div>
      <div className="collection-wrapper">
        <div className="panel">
          <div className="left">
            <div>
              <video autoPlay muted loop className="myVideo">
                <source src="src/video/collection-3-video.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div>
              <img src="src/assets/collection-5.png" alt="image"></img>
            </div>
          </div>
          <div className="right">
            <img src="src/assets/collection-2.png" alt="image"></img>
          </div>
        </div>
        <div className="collection">
          <div className="left">
            <img src="src/assets/collection-1.png" alt="image"></img>
          </div>
          <div className="right">
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
                  {productList.map((item: any, index: any) => (
                    <div key={index}>
                      <div onClick={() => handleClick(event, item, index + 1)} className="item">
                        <img alt={'image'} src={`src/assets/beauty-${index + 1}.png`}></img>
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
                          {formatPrice(item.salePrice)}
                        </Box>
                        {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
