import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>SignUp</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password"> Confirm Password</label>
                        <input type="password" name="confirm-password" id=""  required />
                    </div>
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