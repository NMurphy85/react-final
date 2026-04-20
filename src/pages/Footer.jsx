import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="container">
        <div className="footer__list">
          <Link to ="/" className="footer__link">Landing</Link>
          <Link to ="footer__link no-cursor">About</Link>
          <Link to ="/home" className="footer__link">Movies</Link>
          <Link to ='/contact' className = 'footer__link no-cursor'>Contact</Link>
        </div>
        <div className="footer__copyright">Copyright &copy; 2026 Movie Club LLC.</div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
