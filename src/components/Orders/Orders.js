import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from './../Cart/Cart';

const Orders = () => {
    const [products, setProducts] = useProducts();
    // const [cart, setCart] = useCart(products);//----------
    const [cart, setCart] = useCart();//----------
    const navigate = useNavigate();

    const handleRemoveProduct =(product)=>{
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return(
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product=><ReviewItem 
                        key={product._id} 
                        handleRemoveProduct={handleRemoveProduct}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    {/* used by useNavigate()  */}
                    <button onClick={()=>navigate('/shipment')} className='review_btn'> Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;