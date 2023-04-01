import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import styles from './ProductReviews.module.scss'
import ClassNames from 'classnames/bind'
import { Button } from '@mui/material'

const cx = ClassNames.bind(styles)

export interface FormReviewsProps {}

export function FormReviews(props: FormReviewsProps) {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // console.log('form', e)
  }
  return (
    <div className={cx('form')}>
      <Box
        component="form"
        onSubmit={() => handleSubmit(event)}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ width: '100% !important' }}>
          <Box className={cx('label')}>Name *</Box>
          <TextField
            name="name"
            fullWidth
            className={cx('input')}
            required
            id="outlined-required"
          />
        </Box>
        <Box sx={{ width: '100% !important' }}>
          <Box className={cx('label')}>Email *</Box>
          <TextField fullWidth className={cx('input')} required id="outlined-required" />
        </Box>
        <Box sx={{ width: '100% !important' }}>
          <Box className={cx('label')}>Reviews *</Box>
          <TextField
            className={cx('textarea')}
            required
            fullWidth
            id="outlined-multiline-flexible"
            multiline
            rows={5}
            spellCheck="false"
          />
        </Box>
        <Button
          sx={{ fontSize: '17px', marginTop: '20px !important' }}
          type="submit"
          variant="contained"
        >
          Add review
        </Button>
      </Box>
    </div>
  )
}
