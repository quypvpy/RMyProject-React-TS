import productApi from '@/api/productApi'
import { AddtoCart } from '@/features/Cart/cartSlice'
import { formatPrice } from '@/utils'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from '@mui/material'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { CountDown } from './CountDown'

export * from './flashsale.scss'

export interface FlashSaleProps {}
let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
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

export function FlashSale(props: FlashSaleProps) {
  // nayf datta để render
  const [productList, setProductList]: any = React.useState([])
  // const refElement: any = React.useRef()

  const [product, setproduct]: any = React.useState()
  const [indeximg, setIndexImg]: any = React.useState()

  const navigate = useNavigate()
  const dispath = useDispatch()

  const [queryParams, setQueryParams] = React.useState({
    id: [10404963, 22831265, 13230962, 22039101, 13761499, 17139573],
    _limit: 6,
    _page: 1,
  })
  React.useEffect(() => {
    ;(async () => {
      try {
        const { data, pagination }: any = await productApi.getAll(queryParams)
        setProductList(data)
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }
    })()
  }, [])

  // const handleClick = (item: any, indexImage: any) => {
  //   navigate(`/products/${item.id}/flashsale-${indexImage}.jpg`)
  // }

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
          const result = await productApi.get(item.id)
          setproduct(result)
          setIndexImg(indexImage)
        } catch (error) {
          console.log('fail to fetch product', error)
        }
      })()
      return
    } else navigate(`/products/${item.id}/flashsale-${indexImage}.jpg`)
  }
  React.useEffect(() => {
    try {
      console.log('product', product)
      const action = AddtoCart({
        id: product.id,
        product,
        quantity: 1,
        indexImage: `flashsale-${indeximg}.jpg`,
      })
      dispath(action)
    } catch (error) {
      console.log(error)
    }
  }, [product])

  return (
    <div className="flashsale">
      <div className="left">
        <video autoPlay muted loop>
          <source src="src/video/flashsale-1-video.mp4" type="video/mp4"></source>
        </video>
        <CountDown></CountDown>
      </div>
      <div className="right">
        <Slider {...settings}>
          {productList.map((item: any, index: any) => (
            <div key={index}>
              <div onClick={() => handleClick(event, item, index + 1)} className="item">
                <img alt={'image'} src={`src/assets/flashsale-${index + 1}.jpg`}></img>

                <Box className="addtocart">
                  <Box className="icon-text">Add to cart</Box>
                  <Box className="icon">
                    <ShoppingCartIcon className="iconsvg" />
                  </Box>
                </Box>
              </div>
              <div className="information">
                <div className="title">{item.name}</div>
                <Box className="saleprice" component="span" fontSize="16px">
                  <Box component={'span'} sx={{ fontWeight: 'bold', marginRight: '10px' }}>
                    {formatPrice(item.salePrice)}
                  </Box>
                  <Box component={'span'} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}
                  </Box>
                </Box>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
