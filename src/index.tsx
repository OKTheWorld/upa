import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import App from './App'

const IndexElement = document.getElementById('root')
if (IndexElement) {
  axios.defaults.baseURL = 'https://u-pa.mydns.jp/api'
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }
  const theme = {
    body: { margin: 0 },
    code: { fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace" }
  }
  ReactDOM.createRoot(IndexElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}
