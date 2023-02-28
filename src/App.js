import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";
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