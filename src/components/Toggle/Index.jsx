import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Vous pouvez simplement importer faChevronUp ici

function Toggle({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle">
      <h1 onClick={handleToggle}>
        {title}{' '}
        <span>
          <FontAwesomeIcon
            icon={faChevronUp} // Utilisez toujours la flèche vers le haut comme icône
            style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }} // Appliquez la rotation en fonction de l'état d'ouverture
          ></FontAwesomeIcon>
        </span>
      </h1>
      <div className={`toggle-text ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Toggle;
