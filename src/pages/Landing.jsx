import React from 'react'
import MovieData from './MovieData'
import { Link } from 'react-router-dom'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Landing = (query,setQuery, sortBy, setSortBy) => {
   
    return (
        
      <div className="container">
        <div className="row">
        <h3 className="landing__header "> The Internets 
          <span className="landing-header-font"> Best </span>  
          Movie <span className="landing-header-font">
            DataBase</span> </h3>
            <div className="container">
              <div className="row">
            <h3 className="landing__header">Why<span className="landing-header-font">Movie Club?</span> </h3>
            <div className="landing__highlights">
              <div className="highlight">
                <div className="highlight__img">
                       <FontAwesomeIcon icon = 'fa-solid fa-clapperboard' className='fa-icon--name'  />
                </div>
                  <h3 className="highlight__subtitle">
                    Best Selection
                  </h3>
                  <p className="highlight__para">
                    Huge DataBase with a wide variety of movies
                  </p>
              </div>
              <div className="highlight">
                <div className="highlight__img">
                      <FontAwesomeIcon icon="fa-solid fa-video" />
                </div>
                  <h3 className="highlight__subtitle">
                    Genre & Variety
                  </h3>
                  <p className="highlight__para">
                    Genres From many different categories for young, and old
                  </p>
              </div>
              <div className="highlight">
                <div className="highlight__img">
                <FontAwesomeIcon icon="fa-solid fa-book" />
                </div>
                  <h3 className="highlight__subtitle">
                    Plot Details
                  </h3>
                  <p className="highlight__para">
                    Detailed Plot information to help you decide your next favorite!
                  </p>
              </div>
              <h3 className="landing__header">Check it out! Click one of these <span className="landing-header-font">Super</span>  Movies below to get started!</h3>
         
              </div>
            </div>
            </div>
            </div>



        
           
      </div>
    
    
  )
}

export default Landing
