import React from "react";
import PropTypes from 'prop-types';

function Tags({ text }) {
  return <div className="tags">{text}</div>;
}

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
