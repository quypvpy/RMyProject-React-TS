import { formatPrice } from '@/utils'
import { Rating } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export interface ProductInfoProps {
  productId: any
}
const MyTypoName = styled(Typography)({
  fontSize: '25px',
})
const MyTypoDesription = styled(Typography)({
  fontSize: '20px',
  margin: '20px 0',
})

export function ProductInfo({ productId }: ProductInfoProps) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = productId
  return (
    <div>
      <MyTypoName>{name}</MyTypoName>
      <Rating name="read-only" value={4} sx={{ fontSize: '25px', marginTop: '20px' }} readOnly />
      <Box component={'div'} sx={{ fontSize: '30px', color: 'blue', margin: '20px 0' }}>
        {formatPrice(salePrice)}
      </Box>

      <Box sx={{ marginBottom: '10px' }}>
        {promotionPercent > 0 && (
          <>
            <Box sx={{ textDecoration: 'line-through', marginRight: '10px' }} component={'span'}>
              {originalPrice}
            </Box>
            <Box component={'span'}>{` -${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </div>
  )
}
