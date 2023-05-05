import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import { IMG_CDN_URL } from '../config';
const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div>
      <div className='font-bold text-3xl'>
        Cart items - {cartItems.length}
      </div>
      <button onClick={handleClearCart} className='w-32 px-11 mx-16  mt-2 text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm  py-2.5 mr-6 mb-2'>Clear Cart</button>
      <div className="">
        <ul className="justify-center items-center order-1 grid flex-wrap">
          {cartItems.map((item) => (
            <div className="flex items-center m-2 p-4 hover:shadow-lg border-b-[2px]">
              <li className="w-[540px]" key={item.id}>
                <b>{item?.name}  - Rs.  {item?.price / 100}</b>
                {/* {console.log(menu?.card?.info)} */}
              </li>
              <div className="flex">
                <img className="ml-60 h-20 w-20" src={IMG_CDN_URL + item?.imageId} />
                <button className="ml-[252px] mt-[65px] px-3 absolute border-solid border-2 rounded-md border-gray-300 bg-white font-bold duration-500 hover:shadow-lg text-emerald-500 hover:scale-110 ">Add</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cart;