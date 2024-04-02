import React from 'react'
import ReactDOM from 'react-dom/client'
//Context:
import { ContextProvider } from './context/Context'
//Components:
import App from './App'
//Mui:
import { createTheme, ThemeProvider } from '@mui/material/styles'
//Lang:
import './language/i18n.js'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffff',
    },
  },
  themes: {
    darkMode: {
      backgroundColor: '#17202A',
      color: '#ffff',
      transition: 'all 0.7s ease-in-out'
    },
    lightMode: {
        backgroundColor: '#ffff',
        color: '#17202A',
        transition: 'all 0.7s ease-in-out'
    },
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
)
