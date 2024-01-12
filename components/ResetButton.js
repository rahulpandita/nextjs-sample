import PropTypes from 'prop-types'
import Button from './Button'

export default function ResetButton({ onReset }) {
  return (
    <Button onClick={onReset}>
      Reset State
    </Button>
  )
}

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired
}
