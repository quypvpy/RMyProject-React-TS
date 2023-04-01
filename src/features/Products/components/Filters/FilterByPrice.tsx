import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import ClassNames from 'classnames/bind'
import styles from './filter.module.scss'
function valuetext(value: number) {
  return `${value}°C`
}

const cx = ClassNames.bind(styles)

export interface FilterByPriceProps {
  onChange?: any
}
const minDistance = 5

export function FilterByPrice({ onChange }: FilterByPriceProps) {
  const [value1, setValue1] = React.useState<number[]>([1000000, 10000000])

  const MyBox = styled(Box)({
    marginTop: '40px',
    fontSize: '25px',
    marginBottom: '15px',
  })
  const MyButton = styled(Button)({
    marginTop: '15px',
    fontSize: '16px',
    padding: '0 12px',
    textTransform: 'capitalize',
    backgroundColor: '#3C84AB',
    color: ['white'].join(','),

    '&:hover': {
      backgroundColor: '#0F6292',
    },
  })
  const MyDiv = styled('div')({
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: ['30px'].join(','),

    '& > p': {
      fontSize: '14px',
    },
  })

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  const handleClick = () => {
    if (!onChange) return
    const values = {
      salePrice_gte: value1[0],
      salePrice_lte: value1[1],
    }
    onChange(values)
  }

  const handleClickCancel = () => {
    if (!onChange) return

    onChange()
  }

  return (
    <Box sx={{ paddingRight: '10px' }}>
      <MyBox>Price</MyBox>

      <MyDiv className={cx('label')}>
        <Typography>
          Min:
          {new Intl.NumberFormat('vn-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value1[0])}
        </Typography>
        <Typography>
          Max:
          {new Intl.NumberFormat('vn-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(value1[1])}
        </Typography>
      </MyDiv>
      <Slider
        sx={{ color: '#3C84AB' }}
        min={0}
        max={24000000}
        step={1000000}
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        // valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className={cx('button')}>
        <MyButton onClick={handleClick}>Filter</MyButton>
        <MyButton onClick={handleClickCancel} sx={{ marginLeft: '20px' }}>
          Cancel
        </MyButton>
      </div>
    </Box>
  )
}
