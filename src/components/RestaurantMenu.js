import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from "../config";
import Shimmer from './Shimmer'
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurant(resId);
    return (!restaurant) ? <Shimmer /> :
        (
            <div className="relative">
                <div className="flex text-white justify-center items-center">
                    {/* <h1>Restaurant id : {resId}</h1> */}
                    <img className="w-[900px] h-[500px] linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                    <div className="absolute text-lg font-bold pt-80 pr-20">
                        <h2 className="text-6xl">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                        <h2>{restaurant?.cards[0]?.card?.card?.info?.area}</h2>
                        <h2>{restaurant?.cards[0]?.card?.card?.info?.city}</h2>
                        <h2>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
                        <h2>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h2>
                    </div>

                </div>
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold ml-[700px]">Menu</h1>
                </div>
                <div className="">
                    <ul className="justify-center items-center order-1 grid flex-wrap">
                        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((menu) => (
                            <div className="flex items-center m-2 p-4 hover:shadow-lg border-b-[2px]">
                                <li className="w-[540px]" key={menu?.card?.info?.id}>
                                    <b>{menu?.card?.info?.name}  - Rs.  {menu?.card?.info?.price / 100}</b>
                                    {/* {console.log(menu?.card?.info)} */}
                                </li>
                                <div className="flex">
                                    <img className="ml-60 h-20 w-20" src={IMG_CDN_URL + menu?.card?.info?.imageId} />
                                    <button className="ml-[252px] mt-[65px] px-3 absolute border-solid border-2 rounded-md border-gray-300 bg-white font-bold duration-500 hover:shadow-lg text-emerald-500 hover:scale-110 ">Add</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        )

}
export default RestaurantMenu;