import { useCallback, useEffect, useState, createContext, useContext } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'

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

  // Define a function resetState that sets the state of count to zero
  const resetState = useCallback(() => {
    setCount(0)
  }, [setCount])

  // Create a ClickContext using createContext from react
  const ClickContext = createContext()

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>Current value: {count}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        {/* Wrap the ClickCount component in a ClickContext.Provider with a value of resetState */}
        <ClickContext.Provider value={resetState}>
          <ClickCount />
        </ClickContext.Provider>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
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
        {/* Add a Button component with the label "Reset State" and the onClick handler of resetState */}
        {/* Place the Button component below the "Throw an Error" button */}
        <Button onClick={resetState}>Reset State</Button>
      </div>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
