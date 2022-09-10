import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import App from './App'
import './index.css'

const IndexElement = document.getElementById('root')
if (IndexElement) {
  axios.defaults.baseURL = 'https://u-pa.mydns.jp/api'
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }
  ReactDOM.createRoot(IndexElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  )
}
