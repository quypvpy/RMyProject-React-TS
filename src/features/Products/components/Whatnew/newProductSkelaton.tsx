import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export interface NewProductSkelatonProps {}

export function NewProductSkelaton(props: NewProductSkelatonProps) {
  return (
    <Box>
      {/* vì làm slider k set height đc cho item. nên cần truyền */}
      <Stack spacing={1}>
        <Skeleton variant="rectangular" sx={{ height: '300px' }} />
        <Skeleton variant="text" width={170} sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" width={170} sx={{ fontSize: '1rem' }} />

        {/* <Skeleton variant="rounded" width={210} height="100%" /> */}
      </Stack>
    </Box>
  )
}
