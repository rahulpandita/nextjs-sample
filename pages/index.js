import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className="p-5 pb-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Fast Refresh Demo</h1>
      <p className="mb-6 text-gray-600">
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className="border-none border-b border-gray-200 my-12" />
      <div className="mb-8">
        <p className="mb-2 text-gray-700">
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p className="font-semibold text-blue-600">Current value: {count}</p>
      </div>
      <hr className="border-none border-b border-gray-200 my-12" />
      <div className="mb-8">
        <p className="mb-4 text-gray-700">Component with state.</p>
        <ClickCount />
      </div>
      <hr className="border-none border-b border-gray-200 my-12" />
      <div className="mb-8">
        <p className="mb-4 text-gray-700">
          The button below will throw 2 errors. You'll see the error overlay to
          let you know about the errors but it won't break the page or reset
          your state.
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Throw an Error
        </Button>
      </div>
      <hr className="border-none border-b border-gray-200 my-12" />
    </main>
  )
}

export default Home
