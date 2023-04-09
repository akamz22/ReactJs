import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";
import { filterData } from "../utils/Helper";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
//what is state
//what are props
//what is hook 
//what is useState
const Body = ({user}) => {
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
    const json = await data?.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Conditional Rendering 
  // if(restaurants =="")=>shimmer Ui
  // else data ui 
  // console.log("Render");

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline, Please Check your internet connection!!</h1>
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length == 0) return <h1>No restaurant match your filter!!</h1>

  return (allRestaurants?.length == 0) ? (<Shimmer />) : (
    <>
      <div className="flex items-center w-[700px] m-4 ml-[400px]">
        <input
          className="text-sm rounded-lg w-[700px] block p-4 bg-gray-100 focus:bg-white focus:outline-dashed"
          type="text"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => {
            console.log(e);
            setSearchTxt(e.target.value)
          }
          }
        />
        <button
          className="px-16 mx-8 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data)
          }}>Search</button>
        {/* <h1>{searchClicked}</h1> */}

      </div>
      <div className="flex flex-wrap ml-60 w-[70%] items-center justify-center">
        {
          filteredRestaurants.map((restaurant) => {
            return (

              <Link className="" to={'/restaurant/' + restaurant.data.id}
                key={restaurant.data.id}>
                <RestrauntCard {...restaurant.data} key={restaurant.id} Name={user.Name}/>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}
export default Body;