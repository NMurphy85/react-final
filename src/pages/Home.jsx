import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_KEY = "1989ac72";

const Home = () => {
  const [sortBy, setSortBy] = useState("")  
  
  const { id } = useParams();
  const [query, setQuery] = useState('super' || []);
  const [movies, setMovies] = useState([]);
 const [searchTerm, setSearchTerm] = useState([]);
 const sortedMovies = [...movies].sort((a, b) => {
if (sortBy === "LOW_TO_HIGH")  
       return  a.Title.localeCompare(b.Title);
      
      if (sortBy === "HIGH_TO_LOW") 
        return  b.Title.localeCompare(a.Title);
      
      if (sortBy === "YEAR--LOW") 
        return  a.Year.localeCompare(b.Year);
      
      if (sortBy === "YEAR--HIGH") 
        return  b.Year.localeCompare(a.Year);
      
      return 0;
 })
 
 
 useEffect(() => {
    async function getMovies() {
      const {data} = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      console.log(data);
  setMovies(data.Search || []);
      
    }
    getMovies();
  }, [query]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="user-list">
            <div className="user">
              <div className="user-card">
                <div className="user-card">
            {sortedMovies.map((movie) =>( 
             
              <div className="user-card__container">
                <h3>{movie.Title}</h3>
                <p><b>Year</b> {movie.Year}</p>
                <p><b>imdbID</b> {movie.imdbID}</p>
                <img src={movie.Poster}/>
              </div>
            ))}
              
            
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );}
export default Home
