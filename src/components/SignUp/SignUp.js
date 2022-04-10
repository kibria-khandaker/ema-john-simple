import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const SignUp = () => {
    //-1--------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //-3--------------------
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    //-2--------------------
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    //-------
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Both Password not match')
            return;
        }
        if (password.length < 6) {
            setError('Password need more then 6 characters')
            return;
        }
        // react hook er theke neoa
        createUserWithEmailAndPassword(email, password);
    }
    //---------------------
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}  >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password"> Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}> {error} </p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p className='new-account-link'>
                    Already have an account? <Link to='/login'> Login </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;