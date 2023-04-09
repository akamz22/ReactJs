import React from "react"
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, deliveryTime ,Name}) => {
  return (
    <div className="w-[232px] p-2 m-2 shadow-md h-[350px] hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <img className="h-40 w-[230px]" src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{deliveryTime} Minutes ETA</h4>
      <h4>{Name}</h4>
    </div>
  )
}
export default RestrauntCard;