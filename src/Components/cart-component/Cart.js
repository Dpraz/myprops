import React from 'react';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import './Cart.scss'

const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items " />
        <CustomButtonComponent >Go to Checkout</CustomButtonComponent>
    </div>
);

export default Cart;