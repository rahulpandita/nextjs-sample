import { useCallback, useState, npm, useImperativeHandle } from 'react'
import Button from './Button'

// Export a function called resetState that sets the count state to 0
export function resetState(setCount) {
  setCount(0)
}

// Use the useImperativeHandle hook to expose the resetState function to the parent component via the ref prop
const ClickCount = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useImperativeHandle(ref, () => ({
    resetState: () => resetState(setCount)
  }))

  return <Button onClick={increment}>Clicks: {count}</Button>
})

export default ClickCount
