import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';
import useCart from './../../hooks/useCart';
import Cart from './../Cart/Cart';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useProducts();
    // const [cart, setCart] = useState([]); // 
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    
    // ---- hook theke use na kore niya ese ekhane use kortechi.

    const [pageCount, setPageCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])
    //-----

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
    }, [page, size])


    // useEffect(() => {
    //     const storedCart = getStorCart();
    //     const savedCart = []
    //     // console.log(storedCart); // time 49-5-> 6.45
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product._id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //             // console.log(addedProduct);
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])

    const handleAddToCart = (selectProduct) => {
        // console.log(selectProduct);
        // do not do this: cart.push(selectProduct)
        let newCart = [];
        const exists = cart.find(product => product._id === selectProduct._id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        } else {
            const rest = cart.filter(product => product._id !== selectProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectProduct];
        setCart(newCart)
        addToDb(selectProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                key={number}
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number +1}</button>)
                    }

                    {/* {size} */}
                    <select className='select_option' defaultValue={'9'} onChange={e => setSize(e.target.value)} >
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="15">15</option>
                        <option value="21">21</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
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