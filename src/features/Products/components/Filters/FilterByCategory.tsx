import categoryApi from '@/api/categoryApi'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import * as React from 'react'

export interface FilterByCategoryProps {
  onChange?: any
}

const theme = createTheme({
  palette: {
    neutral: {
      main: '#EEE9DA',
      contrastText: '#698269',
      // contrastText: '#fff',
    },
  },
})
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    neutral: true
  }
}

export function FilterByCategory({ onChange }: FilterByCategoryProps) {
  const [category, setCategory]: any = React.useState([])
  React.useEffect(() => {
    ;(async () => {
      try {
        const data: any = await categoryApi.getAll()

        setCategory(data)
      } catch (error) {
        console.log('Fail to fetch to product List', error)
      }

      // setLoading(false)
    })()
  }, [])

  const handleCategoryClick = (item: any) => {
    if (onChange) {
      onChange(item.id)
    }
  }

  return (
    <div>
      {category.map((item: any, index: any) => (
        <Box
          key={item.id}
          sx={{
            borderBottom: '1px solid var( --border-bottom-category)',
          }}
        >
          <Box
            onClick={() => handleCategoryClick(item)}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Typography key={index} sx={{ fontSize: '20px', fontWeight: '600', padding: '10px 0' }}>
              {item.name}
            </Typography>
            {/* <ThemeProvider theme={theme}> */}
            {/* phải có chứ k nó lỗi provider ở trên bao bọc */}
            {/* <Button color="neutral" variant="contained">
                          neutral
                        </Button> */}
            {/* <Badge badgeContent={4} sx={{ marginLeft: '20px' }} color="neutral"></Badge> */}
            {/* </ThemeProvider> */}
          </Box>
        </Box>
      ))}
    </div>
  )
}
