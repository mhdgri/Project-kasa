import React from 'react';
import PropTypes from 'prop-types';
import GalleryContainer from '../GalleryContainer/Index';
import GalleryItems from '../GalleryItem/Index';
import Logements from '../../logements.json';

function Gallery() {
  return (
    <GalleryContainer>
      {Logements.map((logement, id) => (
        <a href={`details/${logement.id}`} key={id}>
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
