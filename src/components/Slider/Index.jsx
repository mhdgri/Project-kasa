import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Banner from '../Banner/Index'

function Slider({ images }) {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(current < images.length - 1 ? current + 1 : 0)
  }

  const handlePrevious = () => {
    setCurrent(current > 0 ? current - 1 : images.length - 1)
  }

  return (
    <div className="slider">
      <div className="next_slider" onClick={() => handleNext()}>
        <i className="fa-solid fa-chevron-right"></i>{' '}
      </div>
      <div className="previous_slider" onClick={() => handlePrevious()}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <Banner urlImage={images[current]} height="415px" />
    </div>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider
