import React, { useState } from "react";
import { ReactDOM } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";

//what is state
//what is hook
//what is useState
function filterData(InputTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) => restaurant.data.name.includes(InputTxt));
  return filteredData
}
const Body = () => {
  const [searchTxt, setSearchTxt] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => {
            console.log(e);
            setSearchTxt(e.target.value)
          }
          }
        />
        <button onClick={() => {
          const data = filterData(searchTxt, restaurants); setRestaurants(data)
        }}>Search</button>
        {/* <h1>{searchClicked}</h1> */}

      </div>
      <div className="restaurant-list">
        {
          restaurants.map((restaurant) => {
            return <RestrauntCard {...restaurant.data} key={restaurant.id} />
          })
        }
      </div>
    </>
  )
}
export default Body;