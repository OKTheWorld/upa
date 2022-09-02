import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Home from './Home'
import Form from './form'

const App: React.FC = () => {
  axios.defaults.baseURL = 'https://u-pa.mydns.jp/api'
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
