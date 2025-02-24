import { useCallback, useState } from 'react'
import Button from './Button'

export default function ClickCount() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  const reset = useCallback(() => {
    setCount(0)
  }, [setCount])

  return (
    <div>
      <Button onClick={increment}>Clicks: {count}</Button>
      <Button onClick={reset} className="resetBtn">Reset</Button>
    </div>
  )
}
