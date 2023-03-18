import React from "react"
import { IMG_CDN_URL } from "../config"
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, deliveryTime }) => {
    return (
      <div className="card">
        <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{deliveryTime} Minutes ETA</h4>
      </div>
    ) 
} 
export default RestrauntCard;