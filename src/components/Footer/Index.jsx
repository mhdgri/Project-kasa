import React from "react";
import logo from "../../Assets/logo_kasa_footer.png"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <img src={logo} alt="Logo de Kasa" />
      <p>© {year} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;