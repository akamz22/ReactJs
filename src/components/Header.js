import React from 'react'
import  ReactDOM  from 'react'
export const Title = () => (
  <a href="/">
    <h1 id="title" key="h2">
      <img src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" alt="logo" id="logo" className="logo" />
    </h1>
  </a>
)
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header