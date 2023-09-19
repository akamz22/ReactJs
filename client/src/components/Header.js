import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react'
import Logo from '../assets/img/foodvilla.png'
import FoodLogo from '../assets/img/foodlogo.png'
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';
import { auth, provider } from '../config'
import { signInWithPopup } from 'firebase/auth'
//SPA - Single Page Application

export const Title = () => (
  <h1 id="title" key="h2">
    <Link to="/">
      <img src={Logo} alt="logo" className="h-28 pl-2" />
    </Link>
  </h1>
)



const Header = () => {
  const [value, setValue] = useState('');
  const Logout = () => {
    localStorage.clear();
  }
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"))
  })
  const cartItems = useSelector(store => store.cart.items);
  const [navbar, setNavbar] = useState(false);

  return (
    <>







      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <img src={FoodLogo} alt="logo" className="h-12" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>

            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <Link to='/'>
                  <li className='px-6 hover:text-blue-600 '>Home</li>
                </Link>
                <Link to='/about'>
                  <li className='px-6 hover:text-blue-600'>About</li>
                </Link>
                <Link to='/contact'>
                  <li className='px-6 hover:text-blue-600'>Contact</li>
                </Link>
                <Link to='/instamart'>
                  <li className='px-6 hover:text-blue-600'>Instamart</li>
                </Link>
                <Link to='/cart'>
                  <li className='px-6 hover:text-blue-600'>Cart <span className='absolute rounded-full bg-red-600 w-5 h-5  p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{cartItems.length}</span> </li>
                </Link>
                <div className='flex md:order-2 ml-auto'>
                  {
                    // js expression can be written & statement cannot be written
                    (value == null) ? <button onClick={handleClick} className='w-32 px-11 mx-16 mt-2 text-white bg-gray-500 hover:bg-gray-700 ml-0  font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Login</button> :
                      <button onClick={Logout} className='w-32 px-11 mx-16 mt-2 text-white bg-gray-500 hover:bg-gray-700 ml-0  font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Logout</button>

                  }
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>










      {/* <nav className=''>
        <div className="max-w-full flex flex-wrap items-center justify-between bg-gray-100 shadow-lg">

          <Title />
          <div className='flex md:order-2'>
            {
              // js expression can be written & statement cannot be written
              (value == null) ? <button onClick={handleClick} className='w-32 px-11 mx-16 mt-2 text-white bg-gray-500 hover:bg-gray-700 ml-0  font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Login</button> :
                <button onClick={Logout} className='w-32 px-11 mx-16 mt-2 text-white bg-gray-500 hover:bg-gray-700 ml-0  font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Logout</button>

            }
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className='flex py-10 px-44 '>
              <Link to='/'>
                <li className='px-6 hover:text-blue-600 '>Home</li>
              </Link>
              <Link to='/about'>
                <li className='px-6 hover:text-blue-600'>About</li>
              </Link>
              <Link to='/contact'>
                <li className='px-6 hover:text-blue-600'>Contact</li>
              </Link>
              <Link to='/instamart'>
                <li className='px-6 hover:text-blue-600'>Instamart</li>
              </Link>
              <Link to='/cart'>
                <li className='px-6 hover:text-blue-600'>Cart <span className='absolute rounded-full bg-red-600 w-5 h-5  p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{cartItems.length}</span> </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Header