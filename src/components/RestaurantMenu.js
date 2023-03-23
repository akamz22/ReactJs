import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL , MENU_CDN_URL} from "../config";
import Shimmer from './Shimmer'
const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);


    async function getRestaurantInfo() {

        const data = await fetch(MENU_CDN_URL + resId + "&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data)
        // console.log(restaurant);
    }




    return (!restaurant) ? <Shimmer /> :
        (
            <div className="menu">
                <div>
                    <h1>Restaurant id : {resId}</h1>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.area}</h2>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.city}</h2>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h2>
                    <img height={500} width={400} src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                </div>
                <div>
                    <h1>Menu</h1>
                    <ul>
                        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((menu) => (
                            <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} -  {menu?.card?.info?.price/100}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )

}
export default RestaurantMenu;