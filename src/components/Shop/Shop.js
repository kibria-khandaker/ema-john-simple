import React, { useEffect, useState } from 'react';
import { addToDb, getStorCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './../Cart/Cart';
import './Shop.css';

const Shop = () => {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);

useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

useEffect(()=>{
    const storedCart = getStorCart();
    console.log(storedCart); // time 49-5-> 6.45
},[])

const handleAddToCart=(product)=>{
    // console.log(product);
    // do not do this: cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart)
    addToDb(product.id)
}
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                            key={product.id} 
                            product={product}
                            handleAddToCart={handleAddToCart}
                         ></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;