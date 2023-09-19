import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import { IMG_CDN_URL } from '../config';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();
    let total = 0, coupanPrice = 0;
    cartItems.map((item) => {
        if (item.price == NaN)
            item.price = 100.00;
        total += item.price*item.quantity / 100.00;
    })
    return (
        <>
        <div className='flex justify-center w-60vw border-gray-300 border-b-2 mx-[13rem] py-5 mb-5 h-15'>
            <span className='font-bold text-[30px]  text-gray-500'>Checkout</span>
        </div>
            <div className='flex  justify-around'>
                <div className=''>
                    <form className=''>
                        <div className='font-bold pl-2 py-1'>Billing Details</div>
                        <div className=''>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="First Name *" required />
                        </div>
                        <div className=' '>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="Last Name *" required />
                        </div>
                        <div className=' '>
                            {/* <input className='mt-2 p-2 w-72 rounded-md m-2' placeholder="Country *" /> */}
                            <select className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder='Country'>
                                <option value="India">India</option>
                            </select>
                        </div>
                        <div className=' '>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="Street Address *" required />
                        </div>
                        <div className=' '>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="Town/City *" required />
                        </div>
                        <div className=' '>
                            <select className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' >
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div className=' '>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="Zip *" required />
                        </div>
                        <div className=' '>
                            <input className='mt-2 p-2 w-72 border-[1px] border-gray-200 rounded-md m-2 shadow-md focus:outline-gray-400' placeholder="Phone *" required />
                        </div>

                        <div>
                            <div className='font-bold pl-2 py-1'>Additional Information</div>
                            <textarea className='w-72 h-30 border-[1px] border-gray-200 rounded-md m-2 mt-2 p-2 shadow-md focus:outline-gray-400' placeholder='Notes about your order. e.g - Special notes for delivery'></textarea>
                        </div>
                    </form>
                </div>
                <div className=''>
                    <div className=''>
                        <div className=' pl-2 py-1'>
                            <apan className='font-bold'>Your Order Summary</apan>
                        </div>
                        <ul className="justify-center items-center order-1 grid flex-wrap">
                            {cartItems.map((item) => (
                                <div className="flex items-center hover:shadow-lg border-b-[2px]">
                                    <li className="w-96" key={item.id}>
                                        <b>{item?.name} x {item.quantity}  - Rs.  {item.price*item.quantity == NaN ? 100.00 : item?.price*item.quantity/ 100.00}</b>
                                        {/* {console.log(menu?.card?.info)} */}
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <ul className='text-2xl font-bold'>
                            <li>
                                Subtotal : {total}
                            </li>
                            <li>
                                Total : {total - coupanPrice}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-bold pl-2 py-1'>
                            Payment Method
                        </div>
                        <ul>
                            <li className='mt-2 p-2 w-72 rounded-md m-2 shadow-md'>Some Data</li>
                            <li className='mt-2 p-2 w-72 rounded-md m-2 shadow-md'>Some Data</li>
                            <li className='mt-2 p-2 w-72 rounded-md m-2 shadow-md'>Some Data</li>
                            <li className='mt-2 p-2 w-72 rounded-md m-2 shadow-md'>Some Data</li>
                        </ul>
                    </div>
                    <div>
                        <button className='w-44 h-10 ml-4 px-11 mx-16 mt-2 text-white bg-gray-500 hover:bg-gray-700  font-medium rounded-lg' type="submit">Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;