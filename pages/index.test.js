import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './index'

jest.useFakeTimers()

test('renders the home page with initial state', () => {
  render(<Home />)
  const counter = screen.getByText(/Current value:/)
  const clickCount = screen.getByText(/Clicks:/)
  expect(counter).toHaveTextContent('Current value: 0')
  expect(clickCount).toHaveTextContent('Clicks: 0')
})

test('increments the click count on click', () => {
  render(<Home />)
  const clickCount = screen.getByText(/Clicks:/)
  const clicksButton = screen.getByRole('button', { name: /Clicks:/ })
  expect(clickCount).toHaveTextContent('Clicks: 0')
  fireEvent.click(clicksButton)
  expect(clickCount).toHaveTextContent('Clicks: 1')
})

test('resets the state on click', () => {
  render(<Home />)
  const counter = screen.getByText(/Current value:/)
  const clickCount = screen.getByText(/Clicks:/)
  const clicksButton = screen.getByRole('button', { name: /Clicks:/ })
  const resetButton = screen.getByRole('button', { name: /Reset State/ })
  fireEvent.click(clicksButton)
  jest.advanceTimersByTime(1000)
  expect(counter).toHaveTextContent('Current value: 1')
  expect(clickCount).toHaveTextContent('Clicks: 1')
  fireEvent.click(resetButton)
  expect(counter).toHaveTextContent('Current value: 0')
  expect(clickCount).toHaveTextContent('Clicks: 0')
})
