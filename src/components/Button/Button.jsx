import { useEffect } from 'react'
import { LoadMoreButton } from './Button.styled'
import PropTypes from 'prop-types'

function Button({ text, onClick, page }) {
  useEffect(() => {
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [page])

  return (
    <LoadMoreButton type="button" onClick={onClick}>
      {text}
    </LoadMoreButton>
  )
}

Button.defaultProps = {
  onClick: () => null,
}
Button.propType = {
  onClick: PropTypes.func,
}
export default Button
