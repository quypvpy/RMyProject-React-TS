import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../userSlice'
import { RegisterForm } from '../RegisterForm'
import * as React from 'react'
import { SnackBar } from '@/components/common'

export interface RegisterProps {
  closeDialog?: any
}

export function Register({ closeDialog }: RegisterProps) {
  // const { enqueueSnackbar } = useSnackbar()
  const [submitError, setSubmitError] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  // const snackbar = useSelector((state: any) => state.snackbar)

  const dispath = useDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpen(false)
  }

  const handleSubmit = async (values: any) => {
    try {
      values.username = values.email
      const action: any = register(values)
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
      // console.log('Fail to regiter', error)
      setIsOpen(true)
      setSubmitError(error.message)
    }
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
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
