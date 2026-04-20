import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
      <div class="container">
        <div class="footer__list">
          <Link to ="/" class="footer__link">Home</Link>
          <Link to ="footer__link no-cursor">About</Link>
          <Link to ="/" class="footer__link">Movies</Link>
          <Link to ="footer__link no-cursor">Contact</Link>
        </div>
        <div class="footer__copyright">Copyright &copy; 2026 Movie Club LLC.</div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
