import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const API_KEY = "1989ac72";
const MovieData = () => {
  const [movie, setMovie] = useState(null);
  const [plot, setPlot] = useState(null);
  const { id } = useParams();
  function imageLoaded() {
    console.log("Image loaded");
  }
  useEffect(() => {
    async function getMovie() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
      );
      setMovie(data);
    }
    getMovie();
  }, [id]);
useEffect(() => {
  async function getMoviePlot() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
    );
    console.log(data);
    setPlot(data);
  }

  getMoviePlot();
}, [plot])
  return (
    
      <Link to="/">
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
          <img className="movie__img" src={movie.Poster} alt='' onLoad={imageLoaded}/>
          <p className="bold"> Plot:</p>
          <p className="bold"> {movie.Plot}</p>
        </div>
      
      ):(
        <div className="user-card">
        <div className="movie__body--skeleton" key={id}></div>
          <h3 className="movie__title--skeleton"></h3>
          <p className="movie__title--skeleton"></p>
          <p className="movie__title--skeleton"></p>
          <img className="img__body--skeleton" alt="" />
        
        </div>
      )}
        </div>
    
  );
};

export default MovieData;
