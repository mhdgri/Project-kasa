import React from 'react'
import PropTypes from 'prop-types'

function Banner(props) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.urlImage})`, height: props.height, width: props.width }}
    >
      <div className="banner-text">
        <h1 style={{ fontWeight: 300 }}>{props.text}</h1>
        <p>{props.subTitle}</p>
      </div>
    </div>
  )
}

Banner.propTypes = {
  urlImage: PropTypes.string,
  text: PropTypes.string,
  subTitle: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

Banner.defaultProps = {
  height: '218px'
}

export default Banner
