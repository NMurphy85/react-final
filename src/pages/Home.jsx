import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const API_KEY = "1989ac72";

const Home = ({ query, setQuery, sortBy, setSortBy }) => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === "LOW_TO_HIGH") return a.Title.localeCompare(b.Title);

    if (sortBy === "HIGH_TO_LOW") return b.Title.localeCompare(a.Title);

    if (sortBy === "YEAR--LOW") return a.Year.localeCompare(b.Year);

    if (sortBy === "YEAR--HIGH") return b.Year.localeCompare(a.Year);

    return 0;
  });

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
      );
      console.log(data);
      setMovies(data.Search || []);
      setLoading(false);
    }
    getMovies();
  }, [query]);

  return (
    <>
      <div key={sortBy.id} className="container ">
        <div className="row">
          <div className="user-list">
            <div className="user-card">
              <div className="user-card__container">
                {loading ? (
                 <>
                    <div className="movie__body--skeleton" key={query.id}></div>
                      <h3 className="movie__title--skeleton"></h3>
                      <p className="movie__title--skeleton"><b>Year</b></p>
                      <p className="movie__title--skeleton"><b>imdbID</b></p>
                      <img className="img-body--skeleton" alt="" />
                 </>
                  
                ) : (
                  <div>
                  {sortedMovies.map((movie) => (
                    <Link to={`/${movie.imdbID}`} key={movie.imdbID}>
                          <div className="user-card__container">
                        <div className="user-card">
                            <h3>{movie.Title}</h3>
                            <p>
                              <b>Year</b> {movie.Year}
                            </p>
                            <p>
                              <b>imdbID</b> {movie.imdbID}
                            </p>

                            <img className="movie__img" src={movie.Poster} alt='' />
                          </div>
                        </div>
                      </Link>
                ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
