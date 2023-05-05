import React,{ useState , useContext} from 'react';
import ReactDOM from 'react'
import Logo from '../assets/img/foodvilla.png'
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

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
  const {user} = useContext(userContext)
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex sticky top-0 z-50 justify-between items-center h-32 bg-gray-100 shadow-lg">
      <Title />
      <div className="">
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
            <li className='px-6 hover:text-blue-600'>Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className='p-10 font-bold text-blue-600'>{user.name}</span> 
      {
        // js expression can be written & statement cannot be written
        isLoggedIn ?
          <button onClick={() => setisLoggedIn(false)} className='w-32 px-11 mx-16  mt-2 text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Logout</button>
          : <button onClick={() => setisLoggedIn(true)} className='w-32 px-11 mx-16 mt-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Login</button>
      }
    
    </div>
  )
}

export default Header