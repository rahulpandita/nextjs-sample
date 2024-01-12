import { useRouter } from 'next/router'
import Button from './Button'
import styles from './Button.module.css'

export default function ResetButton() {
  const router = useRouter()

  const handleClick = () => {
    router.reload()
  }

  return <Button onClick={handleClick} className={styles.btn-warning}>Reset State</Button>
}
