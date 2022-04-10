import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';

const Shipment = () => {
    //-1--------------------
    const [user, setUser] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');

    //-2--------------------
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    //-------
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name,email,address,phone}
        console.log(shipping);
    }

    //---------------------
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'> Shipping information </h2>
                <form onSubmit={handleCreateUser}  >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}> {error} </p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                <p className='new-account-link'>
                    Already have an account? <Link to='/login'> Login </Link>
                </p>
            </div>
        </div>
    );
};

export default Shipment;