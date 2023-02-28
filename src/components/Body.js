import React from "react";
import { ReactDOM } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";
const Body = () => {
    return (
      <div className="restaurant-list">
        {
          restaurantList.map((restaurant) => {
            return <RestrauntCard {...restaurant.data} key = {restaurant.id} />
          })
        }
      </div>
    )
}
export default Body;