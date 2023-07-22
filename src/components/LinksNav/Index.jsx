import React from 'react'
import PropTypes from 'prop-types';

function LinksNav({ url, texte }) {
  return <a href={url}>{texte}</a>
}

LinksNav.propTypes = {
  url: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default LinksNav
