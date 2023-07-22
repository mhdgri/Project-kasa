import React from 'react';
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <div className="back_to_home">
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
      </div>
    </div>
  )
}

export default Error
