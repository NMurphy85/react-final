import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Landing
            </Link>
            <Link to="/about" className="footer__link">
              About
            </Link>

            <Link to="/home" className="footer__link">
              Movies
            </Link>
            <Link to="/contact" className="footer__link">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
