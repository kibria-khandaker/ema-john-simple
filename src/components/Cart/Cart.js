import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    // console.log(props);
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    // toFixed er karone ekhane number ta string hoye jay so need to convert number
    const grandTotal = total + shipping + tax ;

    return (
        <div className='cart'>
                <h3>Order Summary</h3>
                <div className='cart-details'>
                    {/* <p>Selected Items: {cart.length}</p> */}
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                </div>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <button className='clear_btn'>Clear Cart </button><br/>
                {/* <button className='review_btn'>Review Order </button> */}
                {props.children}
        </div>
    );
};

export default Cart;