import React from 'react'
import ReactDOM from 'react'
import Logo from '../assets/img/foodvilla.webp'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
const loggedInUser = () => {
  //API call to check auth
  return true;
}

//SPA - Single Page Application

export const Title = () => (
  <Link href="/">
    <h1 id="title" key="h2">
      <img src={Logo} alt="logo" className="h-28 pl-2" />
    </h1>
  </Link>
)



const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isOnline = useOnline();
  // const isLoggedIn = useAuth();
  // const [getLocalVariables,setLocalVariables]  = useLocalStorage();
  return (
    <div className="flex sticky top-0 z-50 justify-between items-center h-32 bg-white shadow-lg">
      <Title />
      <div className="">
        <ul className='flex py-10 px-44 '>
          <Link to='/'>
            <li className='px-6 hover:text-blue-600'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='px-6 hover:text-blue-600'>About Us</li>
          </Link>
          <Link to='/contact'>
            <li className='px-6 hover:text-blue-600'>Contact</li>
          </Link>
          <Link to='/cart'>
            <li className='px-6 hover:text-blue-600'>Cart</li>
          </Link>
          <Link to='/instamart'>
            <li className='px-6 hover:text-blue-600'>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {
        // js expression can be written & statement cannot be written
        isLoggedIn ?
          <button onClick={() => setisLoggedIn(false)} className='px-11 mx-16 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2'>Logout</button>
          : <button onClick={() => setisLoggedIn(true)} className='px-11 mx-8 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2'>Login</button>
      }
    </div>
  )
}

export default Header