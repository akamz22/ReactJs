import React from "react";
import ReactDOM from "react-dom/client";
const Logo = () => (
  <a href="/">
    <h1 id="title" key="h2">
      <img src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" alt="logo" id="logo" className="logo" />
    </h1>
  </a>
)
const Header = () => {
  return (
    <div className="header">
      <Logo />
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



//Config drifven UI


const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "80% off"
      },
      {
        offerName: "No Delhivery Charge"
      }
    ],
    type: "restaurant",
    cards: [
      {
        name: "Burger King",
        id:"1",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
        cusines: ["Burger", "American"],
        rating: "4.3"
      },
      {
        name: "Burger King",
        id:"1",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
        cusines: ["Burger", "American"],
        rating: "4.3"
      }
    ]

  }
]

const restaurantList = [{

  name: "Burger King",
  id:"1",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"2",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"3",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"4",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
},
{
  name: "Burger King",
  id:"5",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"

}, {
  name: "Burger King",
  id:"6",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"7",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"8",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"9",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"10",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"11",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
}, {
  name: "Burger King",
  id:"12",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ufzxglygurm6dowpbc2t",
  cuisines: ["Burger", "American"],
  rating: "4.3"
},
]


const RestrauntCart = ({ name, cuisines, image, rating }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{rating} Stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) => {
          return <RestrauntCart {...restaurant} key = {restaurant.id} />
        })
      }
    </div>
  )
}
const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}











const AppLayout = () => {
  return (
    <>
      {
        /*
        *Header
          -Logo
          -Nav Items(right side)
          -Cart
        *Body
          -SearchBar
          -RestroList
            -Restroinfo Card(Many Cards)
              -Image
              -Name
              -Rating
              -Cusine
        *Footer
          -Links
          -Copyright
          -Some Items
         */
      }
      <Header />
      <Body />
      <Footer />
    </>
  )
}








//paasing a react element inside the root................................. 
const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(<AppLayout />)