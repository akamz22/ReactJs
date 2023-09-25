import React, { useEffect, useState } from "react";
import { MENU_FETCH_URL } from "../config";
import { restaurantMenu } from "../config";
const useRestaurant = (resId) => {
    const dummydata = restaurantMenu.filter((allMenu) => allMenu.data.cards[0]?.card?.card?.info?.id == resId)
    const [restaurant, setRestaurant] = useState();
    useEffect(() => {
        getRestaurantInfo();
    }, [])
    async function getRestaurantInfo() {
        try {
            const data = await fetch(MENU_FETCH_URL + resId + "&submitAction=ENTER");
            const json = await data.json();
            // console.log("API Menu Data  : ",json.data);
            setRestaurant(json.data);
        } catch (e) {
            // console.log("Dummy Menu Data  : ", dummydata[0].data);
            setRestaurant(dummydata[0].data);
        }
    }
    return restaurant;
}
export default useRestaurant;