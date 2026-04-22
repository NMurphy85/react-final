import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className=" user-list" >
      <div className=" user-card" >

          <h3 className='bold'>  About Movie Club:</h3>
          
          <p className="bold"> The <b className='blue'> Best</b>  Movie Search on the <b className="blue">Web!</b> </p>
          <p className="bold"> Relive an Old <b className="blue">Favorite</b> from your childhood! </p>
          <p className="bold"> Find A <b className="blue">New</b> Favorite! </p>
          <p className="bold"> Search it <b className="blue">Here!</b>  At Movie Club! </p>
        </div>
    </div>
    <Link to='/home'>
     <FontAwesomeIcon icon = 'fa-solid fa-clapperboard' className='fa-icon--name'  />
    </Link>
    <p className="bold fa-icon">Movies</p>
    </div>
  )
}

export default About
