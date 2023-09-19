import React from 'react'
import { auth, provider } from '../config'
import { signInWithPopup } from 'firebase/auth'
import { useEffect } from 'react';
const Login = () => {
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.emailVerified)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })
    return (
        <div>
            {value ? <Body /> :
                <button onClick={handleClick}>Login</button>
            }
        </div>
    )
}

export default Login;