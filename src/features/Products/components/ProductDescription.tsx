import * as React from 'react'
import DomPurify from 'dompurify'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'

export interface ProductDescriptionProps {
  product: any
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  const safeDescription = DomPurify.sanitize(product.description)
  return (
    <Box sx={{ padding: '15px', color: 'var(--color-primary) ' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Box>
  )
}
