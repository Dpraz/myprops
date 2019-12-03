import React from 'react'
import './InsideCart.scss';
const InsideCart = ({ item: { price, name, imageUrl, quantity } }) => (
    <div className='inside'>
        <img src={imageUrl} alt='inside' />
        <div className="item-detail">
            <span className='name'>{name}</span>
            <span className='price'>{quantity}   X   &#8377;{price} </span>
        </div>

    </div>
);
export default InsideCart;