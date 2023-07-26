import React from "react";
import logo from "../../Assets/logo_kasa_footer.png"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo de Kasa" />
      <p className="footer__text">© {year} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;