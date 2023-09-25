import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import { IMG_CDN_URL } from '../config';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  // console.log("CartItems : " , cartItems);
  const dispatch = useDispatch();
  let total = 0;
  cartItems.map((item) => {
    total += item.price * item.quantity / 100.00;
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
        cartItems
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        // Redirect to the checkout page using React Router
        // console.log('inside checkout');
        window.location = url;
      })
      .catch((err) => {
        console.error(err.error);
      });
  };


  return (

    <div className="container mx-auto mt-10 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:mx-32">
        <div className="p-4 md:p-6 lg:p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold">My Cart ({cartItems.length} Items)</h1>
        </div>

        <div className='flex flex-col lg:flex-row justify-between w-full'>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8">
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 py-4">
                    <div className="w-full md:w-1/4">
                      <img className="w-full h-24 object-cover" src={IMG_CDN_URL + item.imageId} alt={item.name} />
                    </div>
                    <div className="w-full md:w-3/4">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <p>Rate: {item.price / 100.00}</p>
                      <p>Price: Rs. {item.price * item.quantity / 100.00}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-80 lg:mb-0 lg:ml-10">
              <div className="p-4 bg-gray-100 rounded-lg">
                <button onClick={handleClearCart} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-medium rounded-lg text-sm py-2.5 mb-2">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          <div className="lg:ml-4 lg:w-1/2">
            <div className="p-4 md:p-6 lg:p-8 border-t lg:border-t-0 border-gray-200">
              <h2 className="text-2xl font-semibold">Order Summary</h2>
              <table className="table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">Qty: {item.quantity}</td>
                      <td className="px-4 py-2">Rs. {item.price * item.quantity / 100.00}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td className="px-4 py-2" colSpan="2">Discount:</td>
                    <td className="px-4 py-2">Rs. 0.00</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="px-4 py-2" colSpan="2">Subtotal:</td>
                    <td className="px-4 py-2">Rs. {total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 md:p-6 lg:p-8">
                <button onClick={handleCheckoutClick} className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm py-2.5">
                  Place Order
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Cart;