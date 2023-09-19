import React from 'react'
import error from "../assets/img/error.avif"
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();
    // console.error(error.data);
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
            <h2>{"Error : " + error.status + "  " + error.statusText}</h2>
            {/* <img src={error} alt="Oops Something went wrong!!" style={{ width: 1500, height: 500 }} /> */}
        </div>
    )
}

export default Error