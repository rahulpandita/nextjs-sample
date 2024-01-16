import { useCallback, useState, useEffect } from 'react'
import Button from './Button'

export default function ClickCount({ reset }) {
  const [clicks, setClicks] = useState(0)
  const increment = useCallback(() => {
    setClicks((v) => v + 1)
  }, [setClicks])

  // Define a reset function that sets the state of clicks to zero
  const resetClicks = useCallback(() => {
    setClicks(0)
  }, [setClicks])

  // Use the reset prop from the parent component to call the reset function
  useEffect(() => {
    if (reset) {
      resetClicks()
    }
  }, [reset, resetClicks])

  return <Button onClick={increment}>Clicks: {clicks}</Button>
}
