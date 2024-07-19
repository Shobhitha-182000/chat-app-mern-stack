import React, { useState } from 'react'
import './UserLogin.css'
import ProgressButton from 'react-progress-button'

const Login = ({setUser}) => {
    const [user, setAUser] = useState('');
    const [loading, setLoading] = useState('idle');
   

    const handleUser = () => {
        if(!user) return
        localStorage.setItem("user", user);
        setUser(user)
        localStorage.setItem("avatar", `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`);
    }

    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     setLoading('loading..');
    //     setTimeout(() => {
    //         setLoading('success');
    //     }, 2000);
    // }

    

    return (
        <div className='login-container'>
            <h1>Chat app</h1>
            <form action="">
                <div className="login-btn">
                    <input 
                        type='text' 
                        placeholder='enter the username'
                        value={user}
                        onChange={(e) => setAUser(e.target.value)}
                    />
                    <button className='btn-container' onClick={handleUser}>Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default Login
