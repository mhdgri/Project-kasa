import React from "react";
import logo from "../../Assets/logo_kasa_footer.png"
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
}


  return (
    <footer className="footer">
      <Link to='/' onClick={handleLogoClick}>
        <img className="footer__logo" src={logo} alt="Logo de Kasa" />
      </Link>
      <p className="footer__text">© {year} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;