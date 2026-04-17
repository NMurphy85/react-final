import Nav from './Nav';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const API_KEY = "1989ac72"
const MovieData = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
  async function getMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    setMovie(data);
  }
  getMovie();
}, [id]);


  return (
    <>
    
                    {movie && (
      <div className="user-card__container" key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                    <p> {movie.Year}</p>
                    <p> {movie.imdbID}</p>
                    <img className="movie__img" src={movie.Poster} />
                  </div>
                    )}
                    
                   
               
    </>
  )
}

export default MovieData
