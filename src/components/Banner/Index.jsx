import React from 'react'
import PropTypes from 'prop-types'

function Banner(props) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.urlImage})`, height: props.height, width: props.width }}
    >
      <div className="banner__text">
        <h1 style={{ fontWeight: 300 }}>{props.text}</h1>
      </div>
    </div>
  )
}

Banner.propTypes = {
  urlImage: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

Banner.defaultProps = {
  height: '223px'
}

export default Banner
