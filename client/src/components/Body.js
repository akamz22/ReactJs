import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import ButtonList from "./ButtonList";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ItemCarousel from "./ItemCarousel";
import FoodCarousel from "./FoodCarousel";
import RestaurantCarousel from "./RestaurantCarousel";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [page, setPage] = useState(10)
  const { carousel, allRestaurants, filteredRestaurants, setFilteredRestaurants, setAllRestaurants, restaurantCarousel, itemCarousel } = useRestaurantData();


  const filterData = (e) => {
    const filteredData = allRestaurants.filter((Restaurants) => {
      if (e.target.value === "")
        return allRestaurants;
      // console.log(e.target.value);
      return Restaurants?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setSearchTxt(e.target.value);
    // console.log("Filterdtata : ",filteredData);
    setFilteredRestaurants(filteredData);
  }


  // async function getRestaurantMore() {
  //   try {
  //     const response = await fetch(
  //       'https://cors-proxy.htmldriven.com/?url=https://www.swiggy.com/dapi/restaurants/list/update',
  //       {
  //         method: 'POST', // Use POST for fetching more restaurants
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // Add any additional headers here
  //         },
  //         body: JSON.stringify({
  //           lat: 12.9715987,
  //           lng: 77.5945627,
  //           nextOffset: 'COVCELQ4KID4ruup+9+KczCnEzgD', // Use the correct nextOffset value
  //           // Other payload parameters if needed
  //           seoParams: {
  //             apiName: "FoodHomePage",
  //             pageType: "FOOD_HOMEPAGE",
  //             seoUrl: "https://www.swiggy.com/",
  //           },
  //           widgetOffset: {
  //             // Include your widgetOffset values here
  //             NewListingView_Topical_Fullbleed: '',
  //             NewListingView_category_bar_chicletranking_TwoRows: '',
  //             NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
  //           },
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     //    console.log(data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
  //     if (allRestaurants) {

  //       let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

  //       setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
  //       setAllRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching restaurants:', error);
  //   }
  // }


  // useEffect(() => {
  //   if (page > 2) {
  //     getRestaurantMore();
  //   }
  // }, [page]);
  // const handleLoadMoreClick = () => {
  //   // Increment the page state to load more restaurants
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const handelInfiniteScroll = async () => {
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setPage((prev) => prev + 20);
  //     }
  //   } catch (error) { }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handelInfiniteScroll);
  //   return () => window.removeEventListener("scroll", handelInfiniteScroll);
  // }, []);


  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline, Please Check your internet connection!!</h1>
  }

  if (!allRestaurants) return null;


  return (allRestaurants?.length == 0) ? (<Shimmer />) : (
    <>
      {/* <div className="max-w-full m-4">
        <div className="flex justify-center md:ml-8 sm-ml-8">
          <input
            className="text-sm rounded-lg block px-4 w-96 h-10 sm-w-40  bg-gray-100 focus:bg-white focus:outline-gray-300"
            type="text"
            placeholder="Search Restaurants..."
            value={searchTxt}

            onChange={
              filterData
            }
          />
        </div>
      </div> */}
      <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
        {
          <FoodCarousel data={carousel} />
        }
      </div>

      <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
        <ItemCarousel data={itemCarousel} />
      </div>

      <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />


      <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-40 p-4'>
        <RestaurantCarousel data={restaurantCarousel} />
      </div>

      <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />
      <div className="flex flex-wrap items-center justify-center lg:mx-60">
        <h1 className='font-bold text-2xl pb-4 sm:ml-5'>Restaurants with online food delivery</h1>
        <div>
          <ButtonList />
        </div>
        <div className="max-w-full m-4">
        <div className="flex justify-center md:ml-8 sm-ml-8">
          <input
            className="text-sm rounded-lg block px-4 w-96 h-10 sm-w-40  bg-gray-100 focus:bg-white focus:outline-gray-300"
            type="text"
            placeholder="Search Restaurants..."
            value={searchTxt}

            onChange={
              filterData
            }
          />
        </div>
      </div>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8" data-testid='res-list'>
          {/* You have to write logic for NO restraunt fount here */}
          {console.log("FL",filteredRestaurants)}
          {filteredRestaurants && filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
                className='pr-4'
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
      {/* <div className="flex justify-center my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMoreClick}
        >
          Load More
        </button>
      </div> */}
    </>
  )
}
export default Body;