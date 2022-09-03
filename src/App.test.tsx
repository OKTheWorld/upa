import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders learn react link', () => {
  render(<App />, { wrapper: BrowserRouter })
  expect(screen.getByText(/learn react/i)).toBeInTheDocument()
})
