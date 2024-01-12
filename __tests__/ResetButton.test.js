import { render, fireEvent } from 'react-testing-library'
import ResetButton from '../components/ResetButton'

test('ResetButton calls onReset prop on click', () => {
  const onReset = jest.fn()
  const { getByText } = render(<ResetButton onReset={onReset} />)
  const button = getByText('Reset State')
  fireEvent.click(button)
  expect(onReset).toHaveBeenCalledTimes(1)
})
