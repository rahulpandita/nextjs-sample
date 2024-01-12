import Button from './Button'

export default function ResetButton({ callback }) {
  return (
    <Button onClick={callback}>
      Reset State
    </Button>
  )
}
