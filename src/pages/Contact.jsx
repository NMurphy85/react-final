import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    
      <div className=" user-list" >
        <Link to="/home">
        <figure className="bold">
          <FontAwesomeIcon icon="arrow-left" className="padding-left" /> Home
        </figure>
      </Link>
      <div className=" user-card" >
          <h3 className='bold'>  Contact Us:</h3>
          
          <p className="bold"> <b className='blue'> Questions ?</b></p>
          <p className="bold"> <b className='blue'> Comments ?</b></p>
          <p className="bold"> <b className='blue'> Concerns ?</b></p>
          
          <p className="bold"> Email Us at <b className="blue">support@movieclub.co.de.us</b>  </p>
          <p className="bold"> Call Us at <b className="blue">1-8MO-VIE-CLUB</b>  </p>
          <p className="bold"> Good Luck and </p>
          <p className="bold">  <b className="blue">Happy Searching!!</b>  </p>
          
          
        </div>
    </div>
  )
}

export default Contact
