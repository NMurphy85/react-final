import React from "react";
import { Link } from 'react-router-dom';
import Movie from '../Assets/Movie.png'
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__list">
          <figure className="movie__logo--wrapper">
            <img className="movie--logo" src={Movie} alt="" />
            <img className="movie--logo" src={Movie} alt="" />
            <img className="movie--logo" src={Movie} alt="" />
          </figure>
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/about" className="nav__link">
            About
          </Link>
          <Link to="/home" className="nav__link">
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
