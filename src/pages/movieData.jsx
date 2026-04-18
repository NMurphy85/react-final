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

  async function getMoviePlot() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot`,
    );

    setPlot();
  }
  getMoviePlot();
  return (
    <>
      <Link to="/">
        <figure className="bold">
          <FontAwesomeIcon icon="arrow-left" className="padding-left" /> Home
        </figure>
      </Link>
      {movie ? (
        <div className="user-card__container" key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p> {movie.Year}</p>
          <p> {movie.imdbID}</p>
          <img className="movie__img" src={movie.Poster} alt='' onLoad={imageLoaded}/>
          <p> {movie.Plot}</p>
        </div>
      ):(
        <div className="movie__body--skeleton" key={id}>
          <h3 className="movie__title--skeleton"></h3>
          <p className="movie__title--skeleton">
            <b>Year</b>
          </p>
          <p className="movie__title--skeleton">
            <b>imdbID</b>
          </p>
          <img className="img-body--skeleton" alt="" />
        </div>

      )}
    </>
  );
};

export default MovieData;
