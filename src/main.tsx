import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { GlobalStyles } from './components/GlobalStyles'

// de custom theme
import { ThemeProvider } from '@mui/material'
import { customTheme } from './customTheme'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles>
          <ThemeProvider theme={customTheme}>
            <SnackbarProvider
              className="SnackbarProvider"
              // maxSnack={3}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </GlobalStyles>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
