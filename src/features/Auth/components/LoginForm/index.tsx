import * as React from 'react'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputField, PasswordField } from '@/components/form-controls'
import { useForm } from 'react-hook-form'
import { styled } from '@mui/material/styles'
import { Box, Button, LinearProgress, Typography } from '@mui/material'

export interface LoginFormProps {
  onSubmit?: any
}
const BootstrapButton = styled(Button)({
  fontWeight: '600',
  color: 'white',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  marginTop: '16px',
  padding: '4px 40px',
  border: '1px solid',
  lineHeight: 1.8,
  backgroundColor: '#191C27',
  borderColor: 'var(--border-form-login)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#29485A',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object({
    identifier: yup
      .string()
      .required('Please enter your email')
      .email('please enter an valid address'),
    password: yup.string().required('Please enter your password.'),
  })

  // ddinh nghiax form
  const form = useForm({
    defaultValues: {
      // liệt kê tất cả các field
      identifier: '',
      password: '',
    },

    resolver: yupResolver(schema),
  })

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values)
    }
    // form.reset()
  }
  // trạng thái đang submit của form trong react hook form
  // const { isSubmitting, isSubmitSuccessful } = form.formState
  const { isSubmitting } = form.formState

  return (
    <div>
      <form key={2} onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <InputField name="identifier" label="Email" form={form}></InputField>
          <PasswordField name="password" label="Password" form={form}></PasswordField>
          <BootstrapButton type="submit">LOGIN</BootstrapButton>
        </div>
      </form>
      {isSubmitting && (
        <Box sx={{ width: '100%', pt: 2 }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  )
}
