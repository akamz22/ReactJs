import React, { useEffect, useState } from 'react'
import { FETCH_MENU_URL, FETCH_MENU_URL_MOBILE } from '../config'
import { MENU_DATA } from '../mocks/data'

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null)
    const [restaurantMenu, setRestaurantMenu] = useState(null)

    useEffect(() => {
        getRestaurantMenu();
        window.scrollTo(0, 0);
    }, [])

    // const getRestaurantMenu = async () => {
    //     let data;
    //     let menuData;
    //     let json;
    //     if(window.innerWidth >=1024){
    //          data = await fetch(FETCH_MENU_URL + resId)
    //          json = await data.json();
    //          menuData = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    //     }
    //     else{
    //          data = await fetch(FETCH_MENU_URL_MOBILE);
    //          json = await data.json();
    //          menuData = json?.data?.cards[3].groupedCard?.cardGroupMap?.REGULAR?.cards
    //         }
    //     // console.log(json.data)
    //     const info = json?.data?.cards[0].card?.card.info;
    //     const menu =  menuData
    //     setRestaurantInfo(info)
    //     setRestaurantMenu(menu)
    // }
    const getRestaurantMenu = async () => {
        try {
            let response;
            let json;
            let menuData;
            if (window.innerWidth >= 1024) {
                response = await fetch(FETCH_MENU_URL + resId, {
                    headers: {
                    'x-cors-api-key': 'temp_31ab79b6de87edce8c7a77dcc5a8272d'
                    }
                  });
                json = await response.json();
                menuData = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
            } else {
                response = await fetch(FETCH_MENU_URL_MOBILE, {
                    headers: {
                    'x-cors-api-key': 'temp_31ab79b6de87edce8c7a77dcc5a8272d'
                    }
                  });
                json = await response.json();
                menuData = json?.data?.cards[3].groupedCard?.cardGroupMap?.REGULAR?.cards;
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const info = json?.data?.cards[0].card?.card.info;
            setRestaurantInfo(info);
            setRestaurantMenu(menuData);
        } catch (error) {
            console.error('Error fetching or processing data:', error);
            // Fallback to mock data
            const mockData = MENU_DATA.data.cards.find(card =>
                card?.card?.card?.info?.id === resId
            );

            if (mockData && mockData.card && mockData.card.card && mockData.card.card.info) {
                setRestaurantInfo(mockData.card.card.info);
                setRestaurantMenu(mockData.card.card.menu); // Adjust based on your mock data
            } else {
                console.error('Restaurant ID not found in mock data');
            }
        }
    };

    return { restaurantInfo, restaurantMenu }
}

export default useRestaurantMenu