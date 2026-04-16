import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';

const MovieData = (movie) => {
  return (
    <>
    
      <div className="user-card__container" key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p> {movie.Year}</p>
                    <p> {movie.imdbID}</p>
                    <img className="movie__img" src={movie.Poster} />
                   
               
                  </div>
    </>
  )
}

export default MovieData
