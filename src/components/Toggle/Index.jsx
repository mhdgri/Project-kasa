import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Toggle({ title, children, variant }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle toggle-${variant}`}>
      <h1 onClick={handleToggle}>
        {title}{' '}
        <span>
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }}
          ></FontAwesomeIcon>
        </span>
      </h1>
      <div className={`toggle-text toggle-text-${variant} ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Toggle;
