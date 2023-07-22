import React from "react";
import PropTypes from 'prop-types';

function TagsContainer({ children }) {
  return <div className="tags-container">{children}</div>;
}

TagsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TagsContainer;
