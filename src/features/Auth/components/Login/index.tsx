import { SnackBar } from '@/components/common'
import { unwrapResult } from '@reduxjs/toolkit'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../userSlice'
import { LoginForm } from '../LoginForm'

export interface LoginProps {
  closeDialog?: any
}

export function Login({ closeDialog }: LoginProps) {
  const [submitError, setSubmitError] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const dispath = useDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpen(false)
  }

  const handleSubmit = async (values: any) => {
    try {
      const action: any = login(values)
      const resultAction = await dispath(action)
      const user = unwrapResult(resultAction)

      // close dialog
      if (closeDialog) {
        setTimeout(() => {
          closeDialog()
        }, 3000)
      }
      setIsOpen(true)
      setSubmitError(false)
      // console.log('New user', user)
      // enqueueSnackbar('Register successfully', { variant: 'success' })
    } catch (error: any) {
      // console.log('Fail to Login', error)
      setIsOpen(true)
      setSubmitError(error.message)
    }
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
      {submitError ? (
        <SnackBar
          isOpen={isOpen}
          onClose={handleClose}
          type={'error'}
          message={submitError}
        ></SnackBar>
      ) : (
        <SnackBar isOpen={isOpen} onClose={handleClose}></SnackBar>
      )}
    </div>
  )
}
