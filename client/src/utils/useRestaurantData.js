import { useEffect, useState } from 'react'
import { Resturant_Data_URL } from '../config'
import { FOOD_CAROUSEL, ITEM_CAROUSEL, RESTAURANT_CAROUSEL, RESTAURANT_DATA } from '../mocks/data';

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [carousel, setCarousel] = useState([])
  const [restaurantCarousel, setRestaurantCarousel] = useState([])
  const [itemCarousel, setItemCarousel] = useState([])

  useEffect(() => {
    getRestaurants();
    // window.scrollTo(0, 0);
  }, []);

  // async function getRestaurants() {
  //   const data = await fetch(Resturant_Data_URL);
  //   const json = await data.json();
  //   // console.log(json)
  //   if (window.innerWidth < 1024 || !data.ok) {
  //     // console.log("Img cards :",FOOD_CAROUSEL?.imageGridCards);
  //     setCarousel(FOOD_CAROUSEL?.imageGridCards)
  //     setAllRestaurants(RESTAURANT_DATA?.restaurants)
  //     setFilteredRestaurants(RESTAURANT_DATA?.restaurants)
  //     setItemCarousel(ITEM_CAROUSEL?.card?.card?.imageGridCards?.info)
  //     setRestaurantCarousel(RESTAURANT_CAROUSEL?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   }
  //   else {
  //     // console.log("Img api cards : ", json?.data?.cards[0]?.card?.card?.imageGridCards)
  //     setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards)
  //     setItemCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  //     setRestaurantCarousel(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   }
  // }
  async function getRestaurants() {
    try {
      const response = await fetch(Resturant_Data_URL, {
        headers: {
        'x-cors-api-key': 'temp_31ab79b6de87edce8c7a77dcc5a8272d'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log(json);

      // Assuming the data structure of the response is correct
      setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards);
      setItemCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setRestaurantCarousel(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      setCarousel(FOOD_CAROUSEL?.imageGridCards);
      setAllRestaurants(RESTAURANT_DATA?.restaurants);
      setFilteredRestaurants(RESTAURANT_DATA?.restaurants);
      setItemCarousel(ITEM_CAROUSEL?.card?.card?.imageGridCards?.info);
      setRestaurantCarousel(RESTAURANT_CAROUSEL?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  }

  return { allRestaurants, carousel, filteredRestaurants, setFilteredRestaurants, setAllRestaurants, restaurantCarousel, itemCarousel }
}

export default useRestaurantData;