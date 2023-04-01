import { TextField } from '@mui/material'
export * from '../../../features/Auth/components/RegisterForm/TextWelcome/text.scss'

import { Controller, useForm } from 'react-hook-form'

export interface InputFieldProps {
  label?: string
  disabled?: boolean
  name: string
  form: any
  // resetError: boolean

  // để khi chuyển đổi giữa login và sigin thì nó k hiển thị lỗi khi chưa submit
}

export function InputField({ name, label, form, disabled }: InputFieldProps) {
  const { formState } = form
  // show khi control ddax touch howawch chỉnh sửa r
  const hasError = formState.touchedFields[name] && formState.errors[name]

  // console.log(formState.touchedFields[name])
  // console.log(formState.errors[name])

  return (
    // để tự đông bidding những hàm như onchange onblur thì sủ dụng tv ngoài là controler của react hoookform
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        // fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <TextField
          className="custominput"
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          // haserror là để hiện cái ô boder đỏ đỏ.
          // error={!!hasError && resetError}
          error={!!hasError}
          // heper là để hiện messase
          // helperText={resetError && formState.errors[name]?.message}
          helperText={formState.errors[name]?.message}
        ></TextField>
      )}
    ></Controller>
  )
}
