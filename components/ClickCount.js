import { useCallback, useState } from 'react'
import Button from './Button'
import styles from './Button.module.css'

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
      <Button onClick={reset} className={styles.reset}>
        Reset value
      </Button>
    </div>
  )
}
