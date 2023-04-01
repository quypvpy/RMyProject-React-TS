import { Box } from '@mui/material'
import * as React from 'react'
import { FilterByCategory, FilterByPrice, FilterByService } from './Filters'

export interface ProductFiltersProps {
  filters: object
  onChange?: any
}

export function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  const handleCategoryChange = (newCategoryId: any) => {
    if (!onChange) return

    const newFilters = {
      ' category.id': newCategoryId,
    }
    onChange(newFilters)
  }
  const handlePriceChange = (values: any) => {
    if (onChange) {
      onChange(values)
    }
  }
  const handleServiceChange = (values: any) => {
    if (onChange) {
      console.log(values)
      onChange(values)
    }
  }
  return (
    <Box
      sx={{
        paddingLeft: '10px',
        background: 'var(--background-white)',
        fontWeight: '600',
        color: 'var(--color-primary)',
      }}
    >
      <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
      <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
      <FilterByService filters={filters} onChange={handleServiceChange}></FilterByService>
      {/* caàn truyền filter để pk cái nào đc checked */}
    </Box>
  )
}
