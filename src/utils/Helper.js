export function filterData(InputTxt, restaurants) {
    const filteredData = restaurants.filter((allRestaurants) => allRestaurants?.data?.name?.toLowerCase().includes(InputTxt.toLowerCase()));
    return filteredData;
}