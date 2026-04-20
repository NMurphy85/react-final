import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const API_KEY = "1989ac72";
const MovieData = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
 
useEffect(() => {
  async function getMoviePlot() {
    const { data } = await axios.get(
      // This api fetches both the single movie data, and the plot in one fetch
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
    );
    console.log(data);
    setMovie(data);
  }
  getMoviePlot();

}, [id])
  return (
    
    <>


      <Link to="/home">
        <figure className="bold">
          <FontAwesomeIcon icon="arrow-left" className="padding-left" /> Home
        </figure>
      </Link>
      {movie ? (
        <div className="user-list">

        <div className="user-card" key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p> {movie.Year}</p>
          <p> {movie.imdbID}</p>
          <img className="movie__img" src={movie.Poster} alt='' />
          <p className="bold"> Plot:</p>
          <p className="bold"> {movie.Plot}</p>
        </div>
      </div>
      // The structure of both of these conditional statements must match for the loading state to work! //
      ):(
        <div className="user-list">
        <div className="user-card">
          <h3 className="movie__title--skeleton" key={id}></h3>
          <p className="movie__title--skeleton"></p>
          <p className="movie__title--skeleton"></p>
          <div className="img__body--skeleton" alt="" ></div>

        </div>
        </div>
      )}
    </>
  );
};

export default MovieData;
