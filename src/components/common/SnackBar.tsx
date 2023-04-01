import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'

export interface SnackBarProps {
  message?: any
  type?: any
  isOpen: boolean
  onClose?: any
}

export function SnackBar({
  message = 'Successfully!!!',
  type = 'success',
  isOpen,
  onClose,
}: SnackBarProps) {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{ width: '100%', fontSize: 14, background: 'green', color: 'white' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
