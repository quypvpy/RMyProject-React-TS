import { Box, Chip } from '@mui/material'
import * as React from 'react'

export interface FilterViewerProps {
  filters: any
  onChange?: any
}

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao Hàng Miễn Phí',
    isActive: (filters: any) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters: any) => {
      const newFilters = { ...filters }
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip
      } else {
        newFilters.isFreeShip = true
      }
      return newFilters
    },
  },
  {
    id: 2,
    getLabel: () => 'Có Khuyến Mãi',
    isActive: () => true,
    isVisible: (filters: any) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters: any) => {
      const newFilters = { ...filters }
      delete newFilters.isPromotion
      return newFilters
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters: any) =>
      `Từ${new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(filters.salePrice_gte)} đến ${new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(filters.salePrice_lte)}`,

    isActive: () => true,
    isVisible: (filters: any) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),
    isRemovable: true,
    onRemove: (filters: any) => {
      const newFilters = { ...filters }
      delete newFilters.salePrice_gte
      delete newFilters.salePrice_lte
      return newFilters
    },
    onToggle: () => {},
  },
  //   {
  //     id: 1,
  //     getLabel: (filter) => "Danh Mục",
  //     isActive: (filter) => true,
  //     isVisible: (filter) => true,
  //     isRemovable: true,
  //     onRemove: (filters) => {},
  //     onToggle: (filters) => {},
  //   },
]
export function FilterViewer({ filters = {}, onChange }: FilterViewerProps) {
  // nó chỉ chạy lại khi filter thay đổi.
  // neus k xài,,thì mỗi khi component chính này render.. thì nó
  // sẽ chạy lại ..nên ta xài memo ..để khi thay đổi mới chạy
  const visibleFilters = React.useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters))
  }, [filters])
  const handleClickDelete = (x: any) => {
    if (x.isRemovable) {
      if (!onChange) return
      const newFilters = x.onRemove(filters)
      onChange(newFilters)
    }
  }
  const handleClick = (x: any) => {
    if (x.isRemovable) return
    if (!onChange) return
    const newFilters = x.onToggle(filters)
    onChange(newFilters)
  }
  return (
    <Box
      component={'ul'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0',
        gap: '16px',
        listStyleType: 'none',
      }}
    >
      {/* Mình truyền filter vào để lên trên FILTERS LIST nó lấy nó check */}
      {/* {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => ( */}
      {visibleFilters.map((x: any) => (
        <li key={x.id}>
          <Chip
            sx={{ fontSize: '14px', color: 'var(--color-primary)' }}
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={() => handleClick(x)}
            onDelete={() => handleClickDelete(x)}
          ></Chip>
        </li>
      ))}
    </Box>
  )
}
{
  /* <Chip
            sx={{ fontSize: '14px', color: 'var(--color-primary)' }}
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return
                    const newFilters = x.onToggle(filters)
                    onChange(newFilters)
                  }
            }
            
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return
                    const newFilters = x.onRemove(filters)
                    onChange(newFilters)
                  }
                : null
            }
          ></Chip> */
}
