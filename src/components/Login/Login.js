import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    //-1--------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //-3--------------------
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //-4--------------------
    const location = useLocation();  
    const from = location.state?.from?.pathname || "/";

    //-2--------------------
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    //-2b------
    if (user) {
        navigate(from, { replace: true });
    }
    //-2a------
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    //---------------------
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Login</h2>
                <form onSubmit={handleUserSignIn} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p style={{ color: 'green' }}>Loading .. . </p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='new-account-link'>
                    New to Ema-Jhon? <Link to='/signup'> Create an account </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;