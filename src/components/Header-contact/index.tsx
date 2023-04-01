import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import Box from '@mui/material/Box'
export * from './Header-contact.scss'
export interface HeaderContactProps {}

export function HeaderContact(props: HeaderContactProps) {
  return (
    <header className="header-contact">
      <div className="wrapper">
        <div className="left">
          <SupportAgentIcon></SupportAgentIcon>
          <Box component={'span'} sx={{ margin: '0 5px' }}>
            Call us{' '}
          </Box>
          <span className="">0397-975-733</span>
        </div>
        <div className="right">
          <a className="help">Help & contact</a>
          <a className="order">Order tracking</a>
        </div>
      </div>
    </header>
  )
}
