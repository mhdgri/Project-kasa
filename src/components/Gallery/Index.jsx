import React from 'react';
import PropTypes from 'prop-types';
import GalleryContainer from '../GalleryContainer/Index';
import GalleryItems from '../GalleryItem/Index';
import Logements from '../../logements.json';

function Gallery() {
  return (
    <GalleryContainer>
      {Logements.map((logement, index) => (
        <a href={`details/${index}`} key={index}>
          <GalleryItems
            text={logement.title}
            urlImage={logement.cover}
          />
        </a>
      ))}
    </GalleryContainer>
  );
}

GalleryItems.propTypes = {
  text: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default Gallery;
