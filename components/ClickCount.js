import { useCallback, useState, useContext } from 'react'
import Button from './Button'

// Import useContext from react
// Use useContext to access the resetState function from ClickContext
// Make sure this does not yield TypeError: Cannot read properties of undefined (reading '_context').
export default function ClickCount() {
  const [clicks, setClicks] = useState(0)
  const increment = useCallback(() => {
    setClicks((v) => v + 1)
  }, [setClicks])

  // Get the resetState function from the context
  const resetState = useContext(ClickContext)

  // Modify the resetState function to also set the state of clicks to zero
  const resetClicks = useCallback(() => {
    resetState()
    setClicks(0)
  }, [resetState, setClicks])

  return <Button onClick={increment}>Clicks: {clicks}</Button>
}
