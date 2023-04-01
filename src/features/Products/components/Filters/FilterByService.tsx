import { Box, styled } from '@mui/material'
import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import ClassNames from 'classnames/bind'
import styles from './filter.module.scss'
const cx = ClassNames.bind(styles)
export interface FilterByServiceProps {
  onChange?: any
  filters?: any
}

const MyDiv = styled('div')({
  marginTop: ['40px'].join(','),

  '& > div': {
    fontSize: '25px',
  },
  '& > li': {
    margin: '10px 0',
    listStyleType: 'none',
  },
  '& .MuiFormControlLabel-label': {
    fontSize: '18px',
  },
})

export function FilterByService({ onChange, filters = {} }: FilterByServiceProps) {
  const handleChange = (e: any) => {
    if (!onChange) return
    const { name, checked } = e.target
    onChange({
      [name]: checked,
    })
  }

  return (
    <MyDiv>
      <Box>Dịch Vụ</Box>
      {[
        { value: 'isPromotion', label: 'Có Khuyến Mãi' },
        { value: 'isFreeShip', label: 'Vận Chuyển Miễn Phí' },
      ].map((service) => (
        <li key={service.value}>
          <FormGroup>
            <FormControlLabel
              className={cx('text')}
              control={
                <Checkbox
                  sx={{ color: 'var(--color-primary)' }}
                  checked={Boolean(filters[service.value])}
                  name={service.value}
                  onChange={handleChange}
                />
              }
              label={service.label}
            />
          </FormGroup>
        </li>
      ))}
    </MyDiv>
  )
}
