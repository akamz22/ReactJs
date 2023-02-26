import React from "react";
import ReactDOM from "react-dom/client";
//-------------------------JSX----------------------------
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
)


//----------------React Component-----------------------
const HeaderComponent = () => {
  return (
    <div>
      <Title/>
      <div className="header" id="header">
       <img alt="logo" id="logo" src="./assets/logo.svg"/>
       <img alt="searchBar" id="search" src="./assets/search.png"/>
       <img alt="User" id="user" src="/assets/user.svg"/>
      </div>
    </div>
  )
}
const HeaderComponent2 = () => (
  <div>
    <h1>NR fuunctional headerComponent2.....</h1>
    <h2>Heading 2......</h2>
  </div>
)




//paasing a react element inside the root................................. 
const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(<HeaderComponent />)