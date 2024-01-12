import { useRouter } from 'next/router'
import Button from './Button'
import styles from './Button.module.css'

export default function ResetButton() {
  const router = useRouter()
  const resetState = () => {
    router.reload()
  }
  return (
    <Button onClick={resetState} className={styles.warning}>
      Reset State
    </Button>
  )
}
