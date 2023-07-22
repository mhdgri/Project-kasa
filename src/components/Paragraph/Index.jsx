import React from 'react'
import PropTypes from 'prop-types';

function Paragraph({ title, text }) {
  return (
    <div className="paraph">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Paragraph
