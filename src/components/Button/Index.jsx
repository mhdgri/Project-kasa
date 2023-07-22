import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.colorBackgound,
        color: props.colorText,
        borderRadius: props.radius,
      }}
    >
      {' '}
      {props.text}{' '}
    </button>
  )
}

Button.propTypes = {
  colorBackgound: PropTypes.string,
  colorText: PropTypes.string,
  radius: PropTypes.string,
  text: PropTypes.string,
}

export default Button
