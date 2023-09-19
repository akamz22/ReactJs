import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import { IMG_CDN_URL } from '../config';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  console.log("CartItems : " , cartItems);
  const dispatch = useDispatch();
  let total = 0;
  cartItems.map((item) => {
    // if (item.price == NaN)
    //   item.price = 100.00;
    // console.log("Item : ",item.price);
    // console.log("Item Quantity : ",item.quantity);
    total += item.price*item.quantity / 100.00;
  })
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleCheckoutClick = () => {
    fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // items: [
        //   { id: 1, quantity: 2 },
        //   { id: 2, quantity: 3 },
        // ],
        cartItems
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        // Redirect to the checkout page using React Router
        console.log('inside checkout');
        window.location = url;
      })
      .catch((err) => {
        console.error(err.error);
      });
  };


  return (
    <div>

      {/* {console.log(cartItems)} */}
      <div className='flex justify-between ml-[330px] w-[850px] pb-20 mt-10 border-b-2 border-black-100'>
        <div className='font-bold text-3xl'>My Cart </div>
        <div className='font-bold text-3xl'>{cartItems.length} Items</div>
      </div>


      <div className='flex justify-between ml-[330px] w-[850px] pb-10 mt-10 border-b-2 border-black-100'>
        <button onClick={handleClearCart} className='w-32 text-white bg-gray-500 hover:bg-gray-700  font-medium rounded-lg text-sm  py-2.5 mb-2'>Clear Cart</button>
        <div className='text-2xl font-bold'>
          Subtotal : {total}
        </div>
      </div>


      <div className="">
        <ul className="justify-center items-center order-1 grid flex-wrap">
          {cartItems.map((item) => (
            <div className="flex items-center m-2 p-4 hover:shadow-lg border-b-[2px]">
              <li className="w-[540px]" key={item.id}>
                <b>{item?.name} ✖️ {item.quantity}  - Rs. {item?.price*item.quantity / 100.00}</b>
                {/* {console.log(menu?.card?.info)} */}
              </li>
              <div className="flex">
                <img className="ml-60 h-20 w-20" src={IMG_CDN_URL + item?.imageId} />
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className='flex justify-center'>
        <Link>
          <button onClick={handleCheckoutClick} className='w-40 mt-4 text-white bg-gray-500 hover:bg-gray-700   font-medium rounded-lg text-sm  py-2.5 mb-2'>Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart;