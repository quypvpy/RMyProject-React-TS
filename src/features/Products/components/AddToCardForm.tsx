import * as React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import { InputField, Quantity } from '@/components/form-controls'
import { styled } from '@mui/material/styles'
export interface AddToCardFormProps {
  onSubmit?: any
}

export function AddToCardForm({ onSubmit }: AddToCardFormProps) {
  const schema = yup.object({
    quantity: yup
      .number()
      .min(1, 'please enter aat least 1')
      .required('please enter quatity')
      .typeError('Please enter a number'),
  })

  // ddinh nghiax form
  const form = useForm({
    defaultValues: {
      // liệt kê tất cả các field
      quantity: 1,
    },

    resolver: yupResolver(schema),
  })

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values)
    }
    // form.reset()
  }

  const MyButton = styled(Button)({
    marginTop: '30px',
    color: 'var(--color-primary)',
    textTransform: 'unset',
    fontSize: '20px',
    background:
      ' linear-gradient(90deg, rgb(16, 54, 134) 1%, rgb(31, 164, 180) 44%, rgb(52, 170, 162) 100%)',
    textShadow: '0 0 15px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5)',
    width: ['300px'].join(','),
    '&:hover': {
      backgroundColor: 'var(--background-button-hover)',
    },
  })

  return (
    <div>
      <form key={2} onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <Quantity name="quantity" label="quantity" form={form}></Quantity>

          <MyButton type="submit">Add To Cart</MyButton>
        </div>
      </form>
      {/* {isSubmitting && (
        <Box sx={{ width: '100%', pt: 2 }}>
          <LinearProgress />
        </Box>
      )} */}
    </div>
  )
}
