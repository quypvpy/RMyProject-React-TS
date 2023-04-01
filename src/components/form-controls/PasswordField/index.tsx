import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Controller, useForm } from 'react-hook-form'
import * as React from 'react'
import { FormHelperText } from '@mui/material'
export * from '../../../features/Auth/components/RegisterForm/TextWelcome/text.scss'

export interface PasswordFieldProps {
  label?: string
  disabled?: boolean
  name: string
  form: any
}
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
}

export function PasswordField({ name, label, form, disabled }: PasswordFieldProps) {
  const [showPassword, setShowpassword] = React.useState(false)

  const { formState } = form
  // show khi control ddax touch howawch chỉnh sửa r
  const hasError = formState.touchedFields[name] && formState.errors[name]

  const handleClickShowPassword = () => {
    setShowpassword((x) => !x)
  }
  return (
    <FormControl className={'custominput'} fullWidth variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          // fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={value}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            error={!!hasError}
          />
        )}
      ></Controller>
      {/* xài  form hepper text để xài đc helppertext */}
      <FormHelperText error={!!hasError}>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  )
}
