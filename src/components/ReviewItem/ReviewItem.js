import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {img, name,price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className='review-item-img'>
                <img src={img} alt="" />
            </div>
            <div className='review_item_details_warper'>
                <div className="review-item-details">
                    <h4 title={name}>
                        {name.length > 20 ? name.slice(0,20)+' ... ' : name}
                    </h4>
                    <p><small>Price :</small> ${price}</p>
                    <p><small>Shipping Charge :</small> ${shipping}</p>
                    <p><small>Quantity :</small> {quantity}</p>
                </div>
                <div className="review-item-delete-btn">
                    <button onClick={()=>handleRemoveProduct(product)}><FontAwesomeIcon className='delete-btn-icon' icon={faTrashAlt} /> </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;