import React, { useEffect } from "react"
import { useState } from "react";
const Profile = ({ name }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //API CALL
        // console.log("useEffect");
        const timer = setInterval(() => {
            console.log("Namaste React Op Fun");
        }, 1000);
        return () => {
            console.log("Use Effect return");
            clearInterval(timer)
        }
    }, []);
    console.log("Render");
    return (
        <div>
            <h1> Profile Functional Component </h1>
            <h2>Name : {name}</h2>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
export default Profile;