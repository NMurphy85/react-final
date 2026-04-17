import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__list">
          <figure className="movie__logo--wrapper"></figure>
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/about" className="nav__link">
            About
          </Link>
          <Link to="/movies" className="nav__link">
            Movies
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
