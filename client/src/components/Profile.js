import React from "react"

const Profile = ({ name }) => {
    return (
        <div className="font-bold m-10 mx-40 h-screen">
            <div className="flex text-3xl py-4 bottom-2 border-b-gray-400 justify-center">
                <div>
                    About Us
                </div>
            </div> 
            <div className="text-xl">
                React is a popular JavaScript library used for building user interfaces, while Swiggy is a food delivery platform that connects customers with nearby restaurants. Together, they can be used to create a web application that allows users to order food from their favorite restaurants with ease.

                To start building an application that uses the Swiggy API with React, you will need to set up a development environment with the necessary dependencies. This includes installing Node.js and NPM, as well as creating a new React project using the create-react-app command.

                Once your environment is set up, you can begin integrating the Swiggy API into your application. This involves making API requests to the Swiggy servers to retrieve data about restaurants, menu items, and orders.

                One way to implement this is by creating a new component in React that makes an API request to the Swiggy API using the Axios library. Axios is a popular JavaScript library for making HTTP requests, and it can be used to make GET and POST requests to the Swiggy API.

                The component can be designed to display information about nearby restaurants and their menu items, as well as allowing users to place an order. This can be achieved by using React state to manage the user's selected items and updating the total price dynamically.

                Another important aspect of building a food delivery application is the user authentication system. Swiggy provides an API for user authentication, allowing users to create accounts, login, and manage their orders.

                Using React, you can create a user authentication system that integrates with the Swiggy API. This can be achieved by creating a new component that allows users to create accounts, login, and view their order history.

                The Swiggy API also provides real-time updates on order status, allowing you to create a dynamic user interface that updates in real-time. This can be implemented using React's built-in features for handling state changes and rendering components based on user actions.

                Finally, to ensure a smooth user experience, you can use React's component lifecycle methods to optimize your application's performance. This includes using shouldComponentUpdate to prevent unnecessary re-renders and using componentDidMount to fetch data asynchronously.

                In conclusion, building a food delivery application using React and the Swiggy API can be a challenging but rewarding task. With the right tools and techniques, you can create a user-friendly and efficient web application that connects users with their favorite restaurants and delivers food to their doorsteps in no time.
            </div>
        </div>
    )
}
export default Profile;