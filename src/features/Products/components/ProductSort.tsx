import { Box } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import styles from './Laptop/laptop.module.scss'

import ClassNames from 'classnames/bind'
const cx = ClassNames.bind(styles)
export interface ProductSortProps {
  currentSort: string
  onChange?: any
}

const BootstrapButton = styled(Box)({
  color: 'black',
})
export function ProductSort({ currentSort, onChange }: ProductSortProps) {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    if (onChange) onChange(event.target.value)
    setAge(event.target.value)
  }

  return (
    <BootstrapButton>
      <FormControl className={cx('width-sort')} variant="standard" sx={{ m: 1, width: '250px' }}>
        <InputLabel
          sx={{ fontSize: '16px', color: '#609EA2' }}
          id="demo-simple-select-standard-label"
        >
          Sort
        </InputLabel>
        <Select
          sx={{ fontSize: '15px', color: '#609EA2' }}
          autoWidth={true}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Sort by"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="salePrice:ASC" sx={{ fontSize: '16px', color: '#609EA2' }}>
            Sort by price:low to hight
          </MenuItem>
          <MenuItem value="salePrice:DESC" sx={{ fontSize: '16px', color: '#609EA2' }}>
            Sort by price:hight to low
          </MenuItem>
        </Select>
      </FormControl>
    </BootstrapButton>
  )
}
