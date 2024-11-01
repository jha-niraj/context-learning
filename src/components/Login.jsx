import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserConext';

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
        console.log(username, password);
    }

    return (
        <section>
            <div>Login</div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <input 
                    type='text' 
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input 
                    type='password' 
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Login;