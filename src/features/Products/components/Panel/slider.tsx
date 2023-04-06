import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box, Button } from '@mui/material'
import { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export * from './slider.scss'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div onClick={onClick}>
      <ArrowRightIcon className="slider-icon right-icon"></ArrowRightIcon>
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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div className="panel-slider">
        {/* phải để class này ở ngoài..chứ vô trong chỉnh k dc */}
        <Slider {...settings}>
          <Box className="wrapper">
            <img src="./images/panel-5.png"></img>
          </Box>

          <Box className="wrapper">
            <img src="./images/panel-1.png"></img>
          </Box>

          <Box className="wrapper">
            <img src="./images/panel-2.png"></img>
          </Box>
        </Slider>
      </div>
    )
  }
}
