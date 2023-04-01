import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Box, FormHelperText, styled } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Controller } from 'react-hook-form'
export * from '../../../features/Auth/components/RegisterForm/TextWelcome/text.scss'

export interface QuantityProps {
  label?: string
  disabled?: boolean
  name: string
  form: any
}

const MyOutlinedInput = styled(OutlinedInput)({
  border: '1px solid white',
  padding: 'unset',
  fontSize: ['20px'].join(','),

  '& input': {
    width: '30px',
    height: '15px',
    color: 'var(--color-primary)',
  },
})

export function Quantity({ name, label, form, disabled }: QuantityProps) {
  // console.log(form)
  const { formState, setValue } = form
  // show khi control ddax touch howawch chỉnh sửa r
  const hasError = formState.touchedFields[name] && formState.errors[name]

  return (
    <FormControl fullWidth variant="outlined">
      {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          // fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Box>
            <MyOutlinedInput
              id={name}
              type={'text'}
              value={value}
              // label={label}
              onChange={onChange}
              onBlur={onBlur}
              error={!!hasError}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      setValue(name, value === 1 ? 1 : Number.parseInt(value) - 1)
                    }}
                  >
                    {value < 2 ? (
                      <RemoveIcon
                        sx={{
                          color: 'var(--color-primary)',
                          fontSize: '20px',
                          cursor: 'not-allowed',
                        }}
                      ></RemoveIcon>
                    ) : (
                      <RemoveIcon
                        sx={{ fontSize: '20px', color: 'var(--color-primary)' }}
                      ></RemoveIcon>
                    )}
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setValue(name, Number.parseInt(value) + 1)
                    }}
                  >
                    <AddIcon sx={{ color: 'var(--color-primary)', fontSize: '20px' }}></AddIcon>
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        )}
      ></Controller>
      {/* xài  form hepper text để xài đc helppertext */}
      <FormHelperText error={!!hasError}>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  )
}
