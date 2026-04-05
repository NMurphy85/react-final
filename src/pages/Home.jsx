import  React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const API_KEY = "1989ac72"

const Home = () => {
  const {id} = useParams()
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect(() => {

    async function getMovies(filter) {
        const {data} =  await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=super`)
         setSearchTerm(data)
         console.log(data)
         if (searchTerm === "LOW_TO_HIGH") {
         data.Search.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  if (searchTerm === "HIGH_TO_LOW") {
    data.Search.sort((a, b) => b.Title.localeCompare(a.Title));
  }
  if (searchTerm === "YEAR--LOW") {
    data.Search.sort((a, b) => a.Year.localeCompare(b.Year));
  }
  if (searchTerm === "YEAR--HIGH") {
    data.Search.sort((a, b) => b.Year.localeCompare(a.Year));
  }
      }
      getMovies()
  }, [])
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="user-list">
          <div className="user">
            <div className="user-card">
              <div className="user-card">
            <div className="user-card__container">
                <h3>{searchTerm.Title}</h3>
                <p><b>Year</b>{searchTerm.Year}</p>
                <p><b>imdbID</b> {`${searchTerm.imdbID}`}</p>
                <p><img src={`${searchTerm.Poster}`}  /></p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }

export default Home
