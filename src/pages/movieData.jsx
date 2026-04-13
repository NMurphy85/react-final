import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';

const movieData = () => {
  return (
    <>
    <Nav />
      <div className="user-card__container" key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p><b>Year</b> {movie.Year}</p>
                    <p><b>imdbID</b> {movie.imdbID}</p>
                    <Link to={`/home/${movie.imdbID}`}>
                    <img className="movie__img" src={movie.Poster} />
                    </Link>
               
                  </div>
    </>
  )
}

export default movieData
