import React,{useContext} from "react"
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
import userContext from "../utils/userContext";
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, deliveryTime ,Name}) => {
  const {user} = useContext(userContext)
  return (
    <div className="lg:w-[232px] p-2 m-2 shadow-md h-[350px] hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer w-[300px]">
      <img className="h-40 lg:w-[230px] w-[300px]" src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{deliveryTime} Minutes ETA</h4>
      {/* <h4>{user.name} - {user.email}</h4> */}
      {/* <h4>{Name}</h4> */}
    </div>
  )
}
export default RestrauntCard;