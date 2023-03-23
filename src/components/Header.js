import React from 'react'
import ReactDOM from 'react'
import Logo from '../assets/img/foodvilla.webp'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const loggedInUser = () => {
  //API call to check auth
  return true;
}

//SPA - Single Page Application

export const Title = () => (
  <Link href="/">
    <h1 id="title" key="h2">
      <img src={Logo} alt="logo" id="logo" className="logo" />
    </h1>
  </Link>
)



const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About Us</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
          <Link to='/cart'>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      {
        // js expression can be written & statement cannot be written
        isLoggedIn ?
          <button onClick={() => setisLoggedIn(false)}>Logout</button>
          : <button onClick={() => setisLoggedIn(true)}>Login</button>
      }
    </div>
  )
}

export default Header