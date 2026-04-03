import React from 'react'
import '../App.css'
const nav = () => {
  return (
    <div>
       <nav>
        <div className="nav__list">
          <figure className="movie__logo--wrapper">
          </figure>
          <a href="#" className="nav__link">Home</a>
          <a className="nav__link no-cursor">About</a>
          <a href="#Movies" className="nav__link">Movies</a>
          <a className="nav__link no-cursor">Contact</a>
        </div>
      
      </nav>
    </div>
  )
}
export default nav
