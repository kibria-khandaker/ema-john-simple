import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStorCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './../Cart/Cart';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStorCart();
        const savedCart = []
        // console.log(storedCart); // time 49-5-> 6.45
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])



    const handleAddToCart = (selectProduct) => {
        // console.log(selectProduct);
        // do not do this: cart.push(selectProduct)
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectProduct];
        setCart(newCart)
        addToDb(selectProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    {/* Use Link  */}
                    <Link to="/orders">
                        <button className='review_btn'>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;