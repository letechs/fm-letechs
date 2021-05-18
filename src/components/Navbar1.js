import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import './Navbar.css';

const Navbar1 = () => {
  const [click,setClick]=useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link to='/' className='navbar-brand'>
          LeTechs
            <i className='fab fa-typo3' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">

            <li className='nav-item active'>
              <Link to='/'
                className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about'
                className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'>
                Services
              </Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-links dropdown-toggle" to="#" id="navbarDropdown" 
            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Training
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="belevel">Beginners Level</Link>
              <Link className="dropdown-item" to="adlevel">Advance Level</Link>
              <Link className="dropdown-item" to="prolevel">Professional Level</Link>
              </div>
          </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links' >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar1;