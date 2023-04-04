import React, { useEffect, useState } from "react";
import { MENU_FETCH_URL } from "../config";
const useRestaurant = (resId) =>{
    const [restaurant , setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo() {
        const data = await fetch(MENU_FETCH_URL + resId + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data)
    }
    return restaurant;
}
export default useRestaurant;