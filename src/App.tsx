import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import Form from './form/Form'

const message = 'test message'
const App: React.FC = () => {
  axios.defaults.baseURL = 'https://u-pa.mydns.jp/api'
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Form message={message} />
        </header>
      </div>
    </>
  )
}

export default App
