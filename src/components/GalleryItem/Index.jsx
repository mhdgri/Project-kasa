import React from 'react';
import PropTypes from 'prop-types';

function GalleryItems({ urlImage, text }) {
  return (
    <div
      className="gallery_item"
      style={{ backgroundImage: `url(${urlImage})` }}
    >
      <span>{text}</span>
    </div>
  )
}

GalleryItems.propTypes = {
  urlImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GalleryItems
