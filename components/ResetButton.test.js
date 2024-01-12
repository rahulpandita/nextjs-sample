import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResetButton from './ResetButton'

test('renders a button with the text "Reset State"', () => {
  const mockCallback = jest.fn()
  render(<ResetButton callback={mockCallback} />)
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('Reset State')
})

test('calls the callback prop on click', () => {
  const mockCallback = jest.fn()
  render(<ResetButton callback={mockCallback} />)
  const button = screen.getByRole('button')
  expect(mockCallback).not.toHaveBeenCalled()
  fireEvent.click(button)
  expect(mockCallback).toHaveBeenCalledTimes(1)
})
