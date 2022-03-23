import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart,product}=props
    // console.log(props.product);
    // const {id,category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity}=props.product;
    const {name,seller,price,ratings,img}=product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p><small> Manufacturer: {seller} </small></p>
                <p><small> Rating: {ratings} start</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='add-to-cart'>
                Add to Cart  &nbsp;
                <FontAwesomeIcon icon={faShoppingCart} /> 
            </button>
        </div>
    );
};

export default Product;