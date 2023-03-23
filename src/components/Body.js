import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";
import { Link } from "react-router-dom";
//what is state
//what is hook 
//what is useState
function filterData(InputTxt, restaurants) {
  const filteredData = restaurants.filter((allRestaurants) => allRestaurants?.data?.name?.toLowerCase().includes(InputTxt.toLowerCase()));
  return filteredData
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([])
  const [searchTxt, setSearchTxt] = useState("");
  //Empty dependency array => will be called once after render
  //dep arry is [searchText] => will be called once after render and everytime after searchText changes
  useEffect(() => {
    // make api call here coz it will be fetched only once 
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Conditional Rendering 
  // if(restaurants =="")=>shimmer Ui
  // else data ui 
  console.log("Render");



  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length == 0) return <h1>No restaurant match your filter!!</h1>

  return (allRestaurants?.length == 0) ? (<Shimmer />) : (
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
          const data = filterData(searchTxt, allRestaurants); setFilteredRestaurants(data)
        }}>Search</button>
        {/* <h1>{searchClicked}</h1> */}

      </div>
      <div className="restaurant-list">
        {
          filteredRestaurants.map((restaurant) => {
            return (

              <Link to={'/restaurant/' + restaurant.data.id}
                key={restaurant.data.id}>
                <RestrauntCard {...restaurant.data} key={restaurant.id} />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}
export default Body;