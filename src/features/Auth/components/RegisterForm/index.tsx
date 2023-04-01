import { useForm } from 'react-hook-form'

import { InputField, PasswordField } from '@/components/form-controls'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, LinearProgress, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import * as yup from 'yup'
import { ReactIcon } from './ReactIcon/reactIcon'

import { TextWelcome } from './TextWelcome/text'
import { LoginForm } from '../LoginForm'

export interface RegisterFormProps {
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

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  var [createAcount, setCreacteAcount] = useState(false)

  //validation with schema
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Please enter fullname.')
      .test('should has at least two words', 'Please enter at least two words', (value: any) => {
        return value.split(' ').length >= 2
      }),
    email: yup.string().required('Please enter your email').email('please enter an valid address'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'please enter at least 6 character.'),
    retypepassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password does not match.'),
  })

  // ddinh nghiax form
  const form = useForm({
    defaultValues: {
      // liệt kê tất cả các field
      fullName: '',
      email: '',
      password: '',
      retypepassword: '',
    },

    resolver: yupResolver(schema),
  })

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values)
    }
    // form.reset()
  }
  // const handleCreateAcount = () => {
  //   setCreacteAcount(true)
  //   form.reset()
  // }
  // const handleLogin = () => {
  //   setCreacteAcount(false)
  //   form.reset()
  // }

  // trạng thái đang submit của form trong react hook form
  // const { isSubmitting, isSubmitSuccessful } = form.formState
  const { isSubmitting } = form.formState

  return (
    <div>
      <form key={2} onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <InputField name="fullName" label="fullName" form={form}></InputField>
          <InputField name="email" label="Email" form={form}></InputField>
          <PasswordField name="password" label="Password" form={form}></PasswordField>
          <PasswordField name="retypepassword" label="RetypePassword" form={form}></PasswordField>
          <BootstrapButton disabled={isSubmitting} type="submit">
            CREATE
          </BootstrapButton>
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
