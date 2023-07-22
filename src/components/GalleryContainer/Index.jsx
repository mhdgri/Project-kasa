import React from 'react';
import PropTypes from 'prop-types';

function GalleryContainer({ children }) {
  return <div className="gallery_container">{children}</div>
}

GalleryContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GalleryContainer
