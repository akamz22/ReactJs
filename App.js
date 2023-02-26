/*
---------Features Of Parcel-------------
*Bundling
*minify
*https on dev
*port number
*image optimization
*compression
*caching while development
*zero config
*compatable with older versions
*consistant hashing algorithm
*super fast build algorithm
*cleaning our code 
*file matcher algorithm c++
*hot module replacement
*
*
*Transitive dependencies
*/


import React from "react";
import ReactDOM from "react-dom/client";


//React.createRoot gives us an Object

/*
      <div class="header">
      <h1>Namaste react</h1>
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Support</li>
        </ul>
      </div>
*/
// const heading1 = React.createElement("h1",
//   { id: "title1", key: "h1" }, "Heading1 from parcel!");
// const heading2 = React.createElement("h2",
//   { id: "title2", key: "h2" }, "Heading2!  ");
// // console.log(heading);
// console.log(heading1);
// const container = React.createElement("div", { id: "container", hello: "World" },
//   [React.createElement("h1", { title: 'h1', key: 'h1' }, "Heading1")
//     , React.createElement("ul", {}, [React.createElement("li", {},
//       "Home"
//     ), React.createElement("li", {},
//       "About Us"
//     ), React.createElement("li", {},
//       "Contact"
//     ), React.createElement("li", {},
//       "Support"
//     )])]
// );
//-------------------------JSX----------------------------
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
)


//----------------React Component-----------------------
//Functional Componenet & Class based component


//Functional Components (just functionn)
//Name starts with capital letter
//

// const data = api.getData();
const HeaderComponent = () => {
  return (
    <div>
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