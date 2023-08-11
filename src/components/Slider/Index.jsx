import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Banner from '../Banner/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Slider({ images }) {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(current < images.length - 1 ? current + 1 : 0)
  }

  const handlePrevious = () => {
    setCurrent(current > 0 ? current - 1 : images.length - 1)
    setCurrent( images < images.length ? false : faChevronLeft )
  }

  return (
    <div className="slider">
      {images.length > 1 && (
        <div className="slider__next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
      {images.length > 1 && (
        <div className="slider__previous" onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      <Banner className='slider__banner' urlImage={images[current]} height="415px" width="100%"/>
      <div className="slider__counter">{`${current}/${images.length - 1}`}</div>
    </div>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider
